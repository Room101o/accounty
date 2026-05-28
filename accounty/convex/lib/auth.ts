import type { MutationCtx, QueryCtx } from "../_generated/server";

/**
 * Ensures the request is authenticated and returns the current user's identity.
 *
 * @param ctx - Convex query or mutation context used to obtain the authenticated user identity
 * @returns The authenticated user's identity object
 * @throws Error("Unauthenticated") if no authenticated identity is present
 */
export async function requireAuth(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");
  return identity;
}

/**
 * Ensures the request is authenticated and that an active organization is set, then returns the identity and organization metadata.
 *
 * @returns An object containing:
 * - `identity` — the authenticated user identity
 * - `orgId` — the active organization identifier
 * - `orgRole` — the user's role within the organization, or `undefined`
 * - `orgSlug` — the organization's slug, or `undefined`
 * - `orgPermissions` — array of organization permissions (empty array if none)
 *
 * @throws Error("No active organization") if the identity has no active organization
 */
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

/**
 * Determines whether the given billing feature is present in the organization's permissions.
 *
 * @param orgPermissions - Array of permission strings for the organization
 * @param feature - Feature key to check
 * @returns `true` if `orgPermissions` contains `feature:<feature>`, `false` otherwise.
 */
export function hasFeature(orgPermissions: string[], feature: string): boolean {
  return orgPermissions.includes(`feature:${feature}`);
}

/**
 * Enforces that the given organization permissions include the specified billing feature.
 *
 * @param orgPermissions - Array of permission strings for the organization
 * @param feature - Feature name to require (checked as `feature:${feature}`)
 * @throws Error when the permission `feature:${feature}` is not present
 */
export function requireFeature(orgPermissions: string[], feature: string) {
  if (!hasFeature(orgPermissions, feature)) {
    throw new Error(`Your plan does not include: ${feature}`);
  }
}
