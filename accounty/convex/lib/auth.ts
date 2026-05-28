import type { MutationCtx, QueryCtx } from "../_generated/server";

export async function requireAuth(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");
  return identity;
}

export async function requireOrgMember(ctx: QueryCtx | MutationCtx) {
  const identity = await requireAuth(ctx);
  const orgId = identity["org_id"] as string | undefined;
  if (!orgId) throw new Error("No active organization");
  return {
    identity,
    orgId,
    orgRole: identity["org_role"] as string | undefined,
    orgSlug: identity["org_slug"] as string | undefined,
    orgPermissions: (identity["org_permission"] as string[] | undefined) ?? [],
  };
}

/** Check if a Clerk billing feature is enabled for the active org. */
export function hasFeature(orgPermissions: string[], feature: string): boolean {
  return orgPermissions.includes(`feature:${feature}`);
}

/** Require a specific Clerk billing feature or throw. */
export function requireFeature(orgPermissions: string[], feature: string) {
  if (!hasFeature(orgPermissions, feature)) {
    throw new Error(`Your plan does not include: ${feature}`);
  }
}
