import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  numbers: defineTable({
    value: v.number(),
  }),
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  }).index("by_clerkId", ["clerkId"]),
  organizations: defineTable({
    clerkOrgId: v.string(),
    name: v.string(),
    slug: v.optional(v.string()),
    plan: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  }).index("by_clerkOrgId", ["clerkOrgId"]),
  accounts: defineTable({
    orgId: v.string(),
    number: v.string(),
    name: v.string(),
    type: v.union(
      v.literal("asset"),
      v.literal("liability"),
      v.literal("equity"),
      v.literal("income"),
      v.literal("expense"),
    ),
    description: v.optional(v.string()),
    parentId: v.optional(v.id("accounts")),
    normalBalance: v.union(v.literal("debit"), v.literal("credit")),
    isActive: v.boolean(),
  })
    .index("by_orgId", ["orgId"])
    .index("by_orgId_and_type", ["orgId", "type"])
    .index("by_orgId_and_isActive", ["orgId", "isActive"]),
});
