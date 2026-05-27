# Graph Report - accounty  (2026-05-28)

## Corpus Check
- 107 files · ~51,006 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 820 nodes · 959 edges · 63 communities (58 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b151afc9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 62|Community 62]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 126 edges
2. `compilerOptions` - 16 edges
3. `compilerOptions` - 14 edges
4. `Convex Create Component` - 12 edges
5. `Convex Quickstart` - 12 edges
6. `Convex guidelines` - 12 edges
7. `Migrations Component Reference` - 11 edges
8. `Hot Path Rules` - 11 edges
9. `Convex Auth` - 11 edges
10. `Convex Migration Helper` - 10 edges

## Surprising Connections (you probably didn't know these)
- `AlertTitle()` --calls--> `cn()`  [EXTRACTED]
  accounty/components/ui/alert.tsx → accounty/lib/utils.ts
- `AlertDescription()` --calls--> `cn()`  [EXTRACTED]
  accounty/components/ui/alert.tsx → accounty/lib/utils.ts
- `AlertAction()` --calls--> `cn()`  [EXTRACTED]
  accounty/components/ui/alert.tsx → accounty/lib/utils.ts
- `Avatar()` --calls--> `cn()`  [EXTRACTED]
  accounty/components/ui/avatar.tsx → accounty/lib/utils.ts
- `AvatarImage()` --calls--> `cn()`  [EXTRACTED]
  accounty/components/ui/avatar.tsx → accounty/lib/utils.ts

## Communities (63 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (23): cn(), Progress(), ProgressIndicator(), ProgressLabel(), ProgressTrack(), ProgressValue(), SelectContent(), SelectGroup() (+15 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (43): useIsMobile(), AppHeader(), AppSidebar(), navItems, Button(), buttonVariants, Sheet(), SheetContent() (+35 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (35): dependencies, @base-ui/react, class-variance-authority, @clerk/clerk-react, @clerk/nextjs, clsx, convex, lucide-react (+27 more)

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (6): DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay(), DialogTitle()

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.27
Nodes (9): routeLabels, Breadcrumb(), BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator() (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.06
Nodes (27): http, internalOrgs, internalUsers, svixId, svixSignature, svixTimestamp, wh, addNumber (+19 more)

### Community 9 - "Community 9"
Cohesion: 0.22
Nodes (5): geistMono, geistSans, metadata, convex, TooltipProvider()

### Community 20 - "Community 20"
Cohesion: 0.40
Nodes (5): Alert(), AlertAction(), AlertDescription(), AlertTitle(), alertVariants

### Community 21 - "Community 21"
Cohesion: 0.05
Nodes (43): Agent Mode, Checklist, code:bash (npm create convex@latest my-app -- -t owner/repo), code:bash (npx convex dev --once), code:tsx (// Bad: re-creates the client on every render), code:tsx (// src/main.tsx), code:tsx (// app/ConvexClientProvider.tsx), code:tsx (// app/layout.tsx) (+35 more)

### Community 22 - "Community 22"
Cohesion: 0.33
Nodes (4): DataModel, Doc, Id, TableNames

### Community 23 - "Community 23"
Cohesion: 0.05
Nodes (38): 1. Push Filters To Storage, 2. Minimize Data Sources, 3. Minimize Row Size, 4. Isolate Frequently-Updated Fields, 5. Match Consistency To Read Patterns, Aggregates, Backfills, Check for redundant indexes (+30 more)

### Community 24 - "Community 24"
Cohesion: 0.06
Nodes (32): 1. Use point-in-time reads when live updates are not valuable, 2. Batch related data into fewer queries, 3. Use skip to avoid unnecessary subscriptions, 4. Isolate frequently-updated fields into separate documents, 5. Use the aggregate component for counts and sums, 6. Narrow query read sets, 7. Remove `Date.now()` from queries, 8. Consider pagination strategy (+24 more)

### Community 25 - "Community 25"
Cohesion: 0.06
Nodes (32): Action guidelines, Authentication guidelines, code:typescript (import { httpRouter } from "convex/server";), code:ts (import { cronJobs } from "convex/server";), code:typescript (/// <reference types="vite/client" />), code:block12 (import { query } from "./_generated/server";), code:typescript (import { mutation } from "./_generated/server";), code:typescript (import { defineSchema, defineTable } from "convex/server";) (+24 more)

### Community 26 - "Community 26"
Cohesion: 0.06
Nodes (32): computedHash, computedHash, skillPath, source, sourceType, computedHash, skillPath, source (+24 more)

### Community 27 - "Community 27"
Cohesion: 0.06
Nodes (31): Cancel a Running Migration, Check Migration Status, code:bash (npm install @convex-dev/migrations), code:bash (npx convex run migrations:runIt '{"dryRun": true}'), code:bash (npx convex run --component migrations lib:getStatus --watch), code:bash (npx convex run --component migrations lib:cancel '{"name": "), code:typescript (await migrations.cancel(ctx, internal.migrations.addDefaultR), code:bash (npx convex deploy --cmd 'npm run build' && npx convex run mi) (+23 more)

### Community 28 - "Community 28"
Cohesion: 0.06
Nodes (30): 1. Bound your reads, 2. Read smaller shapes, 3. Break large mutations into batches, 4. Move heavy work to actions, 5. Trim return values, 6. Replace `ctx.runQuery` and `ctx.runMutation` with helper functions, 7. Avoid unnecessary `runAction` calls, code:ts (// Bad: unbounded read, breaks as the table grows) (+22 more)

### Community 29 - "Community 29"
Cohesion: 0.07
Nodes (27): Advanced Patterns, Authentication and environment access, Checklist, Choose the Shape, Client-facing API, code:ts (// convex/components/notifications/convex.config.ts), code:ts (// Bad: parent app table IDs are not valid component validat), code:ts (// Good: treat parent-owned IDs as strings at the boundary) (+19 more)

### Community 30 - "Community 30"
Cohesion: 0.09
Nodes (22): Adding a Required Field, Changing a Field Type, Cleaning Up Orphaned Documents, code:typescript (// Deploy 1: Schema allows both states), code:typescript (import { query } from "./_generated/server";), code:bash (npx convex run --component migrations lib:getStatus --watch), code:typescript (// Deploy 1: Make optional), code:typescript (// Deploy 1: Add new field, keep old field optional) (+14 more)

### Community 31 - "Community 31"
Cohesion: 0.09
Nodes (21): 1. Reduce read set size, 2. Split hot documents, 3. Move non-critical work to scheduled functions, 4. Combine competing writes, Broad read sets causing false conflicts, code:ts (// Bad: broad scan creates a wide conflict surface), code:ts (// Good: indexed query touches only relevant documents), code:ts (// Bad: every vote increments the same counter document) (+13 more)

### Community 32 - "Community 32"
Cohesion: 0.10
Nodes (20): Adding Index, Adding New Table, Adding Optional Field, Breaking Changes: The Deployment Workflow, code:typescript (// Before), code:typescript (posts: defineTable({), code:typescript (users: defineTable({), Common Migration Patterns (+12 more)

### Community 33 - "Community 33"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 34 - "Community 34"
Cohesion: 0.12
Nodes (16): compilerOptions, allowJs, allowSyntheticDefaultImports, forceConsistentCasingInFileNames, isolatedModules, jsx, lib, module (+8 more)

### Community 35 - "Community 35"
Cohesion: 0.12
Nodes (15): 1. Scope the problem, 2. Trace the full read and write set, 3. Apply fixes from the relevant reference, 4. Fix sibling functions together, 5. Verify before finishing, Checklist, Convex Performance Audit, Escalate Larger Fixes (+7 more)

### Community 36 - "Community 36"
Cohesion: 0.15
Nodes (12): Advanced Component Patterns, Class-based client wrappers, code:ts (// App side: create a handle and pass it to the component), code:ts (// Component side: accept and invoke the handle), code:ts (import { v } from "convex/values";), code:ts (// schema.ts), code:ts (// lib.ts), code:ts (// src/client/index.ts) (+4 more)

### Community 37 - "Community 37"
Cohesion: 0.15
Nodes (12): After Choosing a Provider, Checklist, code:ts (// Bad: trusting a client-provided userId), code:ts (// Good: verifying identity server-side), Convex Authentication Setup, Core Pattern: Protecting Backend Functions, First Step: Choose the Auth Provider, Provider References (+4 more)

### Community 38 - "Community 38"
Cohesion: 0.17
Nodes (11): Checklist, Concrete Steps, Convex Auth, Expected Files and Decisions, Gotchas, Human Handoff, Production, Validation (+3 more)

### Community 39 - "Community 39"
Cohesion: 0.17
Nodes (6): Input(), Label(), ScrollArea(), ScrollBar(), Skeleton(), Textarea()

### Community 40 - "Community 40"
Cohesion: 0.18
Nodes (10): Auth0, Checklist, Concrete Steps, Files and Env Vars To Expect, Gotchas, Key Setup Areas, Production, Validation (+2 more)

### Community 41 - "Community 41"
Cohesion: 0.18
Nodes (10): Checklist, Clerk, Concrete Steps, Files and Env Vars To Expect, Gotchas, Key Setup Areas, Production, Validation (+2 more)

### Community 42 - "Community 42"
Cohesion: 0.18
Nodes (10): Checklist, Concrete Steps, Files and Env Vars To Expect, Gotchas, Key Setup Areas, Production, Validation, What To Do (+2 more)

### Community 43 - "Community 43"
Cohesion: 0.25
Nodes (7): Build Flow, Checklist, Default Approach, Package Exports, Packaged Convex Components, Testing, When to Choose This

### Community 44 - "Community 44"
Cohesion: 0.25
Nodes (7): Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle()

### Community 45 - "Community 45"
Cohesion: 0.29
Nodes (6): Checklist, code:text (convex/), Default Layout, Local Convex Components, When to Choose This, Workflow Notes

### Community 46 - "Community 46"
Cohesion: 0.29
Nodes (6): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage()

### Community 47 - "Community 47"
Cohesion: 0.29
Nodes (6): code:block1 (npm install), code:block2 (npm create convex@latest -- -t nextjs-clerk), Get started, Join the community, Learn more, Welcome to your Convex + Next.js + Clerk app

### Community 48 - "Community 48"
Cohesion: 0.33
Nodes (5): Checklist, Default Advice, Hybrid Convex Components, Risks, What This Means

### Community 49 - "Community 49"
Cohesion: 0.33
Nodes (5): code:bash (npx convex ai-files install), Convex, Route to the Right Skill, Start Here, When Not to Use

### Community 50 - "Community 50"
Cohesion: 0.33
Nodes (5): ActionCtx, DatabaseReader, DatabaseWriter, MutationCtx, QueryCtx

### Community 51 - "Community 51"
Cohesion: 0.33
Nodes (5): code:ts (// convex/myFunctions.ts), code:ts (const data = useQuery(api.myFunctions.myQueryFunction, {), code:ts (// convex/myFunctions.ts), code:ts (const mutation = useMutation(api.myFunctions.myMutationFunct), Welcome to your Convex functions directory!

### Community 52 - "Community 52"
Cohesion: 0.40
Nodes (4): agentSkillsSha, agentsMdSectionHash, claudeMdHash, guidelinesHash

## Knowledge Gaps
- **444 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+439 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 0` to `Community 1`, `Community 3`, `Community 5`, `Community 6`, `Community 7`, `Community 39`, `Community 44`, `Community 46`, `Community 20`, `Community 53`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _444 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14461538461538462 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06009783368273934 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._