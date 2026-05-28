import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireOrgMember } from "./lib/auth";

const EDITOR_ROLES = ["org:admin", "org:accountant"];

const accountTypeValidator = v.union(
  v.literal("asset"),
  v.literal("liability"),
  v.literal("equity"),
  v.literal("income"),
  v.literal("expense"),
);

function requireEditor(orgRole: string | undefined) {
  if (!orgRole || !EDITOR_ROLES.includes(orgRole)) {
    throw new Error("Insufficient permissions");
  }
}

export const list = query({
  args: {},
  handler: async (ctx) => {
    const { orgId } = await requireOrgMember(ctx);
    return await ctx.db
      .query("accounts")
      .withIndex("by_orgId", (q) => q.eq("orgId", orgId))
      .take(500);
  },
});

export const create = mutation({
  args: {
    number: v.string(),
    name: v.string(),
    type: accountTypeValidator,
    description: v.optional(v.string()),
    parentId: v.optional(v.id("accounts")),
    normalBalance: v.union(v.literal("debit"), v.literal("credit")),
  },
  handler: async (ctx, args) => {
    const { orgId, orgRole } = await requireOrgMember(ctx);
    requireEditor(orgRole);
    return await ctx.db.insert("accounts", { ...args, orgId, isActive: true });
  },
});

export const update = mutation({
  args: {
    id: v.id("accounts"),
    number: v.string(),
    name: v.string(),
    type: accountTypeValidator,
    description: v.optional(v.string()),
    parentId: v.optional(v.id("accounts")),
    normalBalance: v.union(v.literal("debit"), v.literal("credit")),
  },
  handler: async (ctx, args) => {
    const { orgId, orgRole } = await requireOrgMember(ctx);
    requireEditor(orgRole);
    const account = await ctx.db.get(args.id);
    if (!account || account.orgId !== orgId) throw new Error("Not found");
    const { id, ...fields } = args;
    await ctx.db.patch(id, fields);
  },
});

export const archive = mutation({
  args: { id: v.id("accounts") },
  handler: async (ctx, args) => {
    const { orgId, orgRole } = await requireOrgMember(ctx);
    requireEditor(orgRole);
    const account = await ctx.db.get(args.id);
    if (!account || account.orgId !== orgId) throw new Error("Not found");
    await ctx.db.patch(args.id, { isActive: false });
  },
});
