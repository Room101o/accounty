import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";

export const getByClerkOrgId = internalQuery({
  args: { clerkOrgId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("organizations")
      .withIndex("by_clerkOrgId", (q) => q.eq("clerkOrgId", args.clerkOrgId))
      .unique();
  },
});

export const create = internalMutation({
  args: {
    clerkOrgId: v.string(),
    name: v.string(),
    slug: v.optional(v.string()),
    plan: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("organizations", args);
  },
});

export const update = internalMutation({
  args: {
    clerkOrgId: v.string(),
    name: v.string(),
    slug: v.optional(v.string()),
    plan: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const org = await ctx.db
      .query("organizations")
      .withIndex("by_clerkOrgId", (q) => q.eq("clerkOrgId", args.clerkOrgId))
      .unique();
    if (!org) return;
    const { clerkOrgId, ...fields } = args;
    await ctx.db.patch(org._id, fields);
  },
});

export const remove = internalMutation({
  args: { clerkOrgId: v.string() },
  handler: async (ctx, args) => {
    const org = await ctx.db
      .query("organizations")
      .withIndex("by_clerkOrgId", (q) => q.eq("clerkOrgId", args.clerkOrgId))
      .unique();
    if (!org) return;
    await ctx.db.delete(org._id);
  },
});
