import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { Webhook } from "svix";
import type { WebhookEvent } from "@clerk/nextjs/server";

export const clerkWebhook = httpAction(async (ctx, req) => {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return new Response("Missing CLERK_WEBHOOK_SECRET", { status: 500 });
  }

  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const body = await req.text();

  const wh = new Webhook(webhookSecret);
  let event: WebhookEvent;

  try {
    event = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch {
    return new Response("Invalid webhook signature", { status: 400 });
  }

  if (event.type === "user.created" || event.type === "user.updated") {
    const { id, first_name, last_name, image_url, email_addresses, primary_email_address_id } = event.data;
    const email =
      email_addresses?.find((e) => e.id === primary_email_address_id)
        ?.email_address ??
      email_addresses?.[0]?.email_address ??
      "";

    if (event.type === "user.created") {
      await ctx.runMutation(internal.users.create, {
        clerkId: id,
        email,
        firstName: first_name ?? undefined,
        lastName: last_name ?? undefined,
        imageUrl: image_url ?? undefined,
      });
    } else {
      await ctx.runMutation(internal.users.update, {
        clerkId: id,
        email,
        firstName: first_name ?? undefined,
        lastName: last_name ?? undefined,
        imageUrl: image_url ?? undefined,
      });
    }
  } else if (event.type === "user.deleted") {
    const { id } = event.data;
    if (id) {
      await ctx.runMutation(internal.users.remove, { clerkId: id });
    }
  } else if (event.type === "organization.created" || event.type === "organization.updated") {
    const { id, name, slug, image_url, public_metadata } = event.data;
    const rawPlan = (public_metadata as Record<string, unknown> | null)?.plan;
    const plan = typeof rawPlan === "string" ? rawPlan : undefined;

    if (event.type === "organization.created") {
      await ctx.runMutation(internal.organizations.create, {
        clerkOrgId: id,
        name,
        slug: slug ?? undefined,
        plan,
        imageUrl: image_url ?? undefined,
      });
    } else {
      await ctx.runMutation(internal.organizations.update, {
        clerkOrgId: id,
        name,
        slug: slug ?? undefined,
        plan,
        imageUrl: image_url ?? undefined,
      });
    }
  } else if (event.type === "organization.deleted") {
    const { id } = event.data;
    if (id) {
      await ctx.runMutation(internal.organizations.remove, { clerkOrgId: id });
    }
  }

  return new Response(null, { status: 200 });
});
