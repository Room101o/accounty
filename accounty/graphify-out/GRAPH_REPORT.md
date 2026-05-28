# Graph Report - .  (2026-05-26)

## Corpus Check
- Corpus is ~44,864 words - fits in a single context window. You may not need a graph.

## Summary
- 377 nodes · 423 edges · 34 communities (22 shown, 12 thin omitted)
- Extraction: 82% EXTRACTED · 18% INFERRED · 0% AMBIGUOUS · INFERRED: 76 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Next.js App Pages|Next.js App Pages]]
- [[_COMMUNITY_Auth Provider References|Auth Provider References]]
- [[_COMMUNITY_Skills Lock Registry|Skills Lock Registry]]
- [[_COMMUNITY_Project Dependencies|Project Dependencies]]
- [[_COMMUNITY_Auth Configuration|Auth Configuration]]
- [[_COMMUNITY_Skill Icon Concepts|Skill Icon Concepts]]
- [[_COMMUNITY_Convex Generated Types|Convex Generated Types]]
- [[_COMMUNITY_Data Migration Patterns|Data Migration Patterns]]
- [[_COMMUNITY_Performance Audit Rules|Performance Audit Rules]]
- [[_COMMUNITY_Agent & Project Docs|Agent & Project Docs]]
- [[_COMMUNITY_Root TypeScript Config|Root TypeScript Config]]
- [[_COMMUNITY_Convex TypeScript Config|Convex TypeScript Config]]
- [[_COMMUNITY_Core App Architecture|Core App Architecture]]
- [[_COMMUNITY_App Layout & Providers|App Layout & Providers]]
- [[_COMMUNITY_Convex Server Context Types|Convex Server Context Types]]
- [[_COMMUNITY_Convex Schema & Data Model|Convex Schema & Data Model]]
- [[_COMMUNITY_AI Files State Tracking|AI Files State Tracking]]
- [[_COMMUNITY_Tech Stack README|Tech Stack README]]
- [[_COMMUNITY_Auth Middleware|Auth Middleware]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_HTTP Action Handler|HTTP Action Handler]]
- [[_COMMUNITY_Internal Action|Internal Action]]
- [[_COMMUNITY_Next Config|Next Config]]
- [[_COMMUNITY_PostCSS|PostCSS]]
- [[_COMMUNITY_Root TSConfig|Root TSConfig]]
- [[_COMMUNITY_Convex TSConfig|Convex TSConfig]]
- [[_COMMUNITY_Globals Table Pattern|Globals Table Pattern]]
- [[_COMMUNITY_Class Wrapper Pattern|Class Wrapper Pattern]]
- [[_COMMUNITY_Derive Validators|Derive Validators]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `DataModel Type` - 16 edges
3. `compilerOptions` - 14 edges
4. `Convex AI Guidelines` - 13 edges
5. `Convex Skill Ecosystem` - 10 edges
6. `Convex My Functions` - 9 edges
7. `Convex Quickstart Skill` - 9 edges
8. `Convex Setup Auth Skill` - 9 edges
9. `Convex Migration Helper Skill` - 9 edges
10. `Convex Create Component Skill` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Actions for Heavy Work Pattern` --semantically_similar_to--> `Actions and Node.js Runtime`  [INFERRED] [semantically similar]
  .claude/skills/convex-performance-audit/references/function-budget.md → convex/_generated/ai/guidelines.md
- `No .filter() - Use withIndex()` --semantically_similar_to--> `Push Filters to Storage (withIndex)`  [INFERRED] [semantically similar]
  convex/_generated/ai/guidelines.md → .claude/skills/convex-performance-audit/references/hot-path-rules.md
- `Schema Guidelines` --semantically_similar_to--> `Isolate Frequently-Updated Fields`  [INFERRED] [semantically similar]
  convex/_generated/ai/guidelines.md → .claude/skills/convex-performance-audit/references/hot-path-rules.md
- `AI Files State (Hashes)` --references--> `Convex AI Guidelines guidelines.md`  [INFERRED]
  convex/_generated/ai/ai-files.state.json → CLAUDE.md
- `ESLint Config` --references--> `Convex My Functions`  [INFERRED]
  eslint.config.mjs → convex/myFunctions.ts

## Communities (34 total, 12 thin omitted)

### Community 0 - "Next.js App Pages"
Cohesion: 0.06
Nodes (22): http, internalUsers, svixId, svixSignature, svixTimestamp, wh, addNumber, listNumbers (+14 more)

### Community 1 - "Auth Provider References"
Cohesion: 0.06
Nodes (37): Function Handles for Callbacks, Auth0 Setup Reference, convex/auth.config.ts (Auth0), ConvexProviderWithAuth0, convex/auth.config.ts (Clerk), Clerk Setup Reference, ConvexProviderWithClerk, authTables in convex/schema.ts (+29 more)

### Community 2 - "Skills Lock Registry"
Cohesion: 0.06
Nodes (32): computedHash, computedHash, skillPath, source, sourceType, computedHash, skillPath, source (+24 more)

### Community 3 - "Project Dependencies"
Cohesion: 0.07
Nodes (27): dependencies, @clerk/clerk-react, @clerk/nextjs, convex, next, react, react-dom, svix (+19 more)

### Community 4 - "Auth Configuration"
Cohesion: 0.10
Nodes (26): Auth0 Environment Variables, ConvexProviderWithClerk + ClerkProvider, Clerk Environment Variables, convex/auth.config.ts, Convex Auth Packages, ConvexProviderWithAuth, ctx.auth.getUserIdentity(), Auth0 Provider (+18 more)

### Community 5 - "Skill Icon Concepts"
Cohesion: 0.18
Nodes (25): Authentication / Security Setup Concept, Component Modularity / Package Creation Concept, Data Migration / Schema Evolution Concept, Performance Monitoring / Audit Concept, Quick Launch / Getting Started Concept, Convex Create Component Icon (3D Cube), Convex Migration Helper Icon (Circular Arrows / Refresh), Convex Performance Audit Icon (CPU Chip) (+17 more)

### Community 6 - "Convex Generated Types"
Cohesion: 0.09
Nodes (23): Convex Generated Code, DataModel Type, Doc Type, Id Type, TableNames Type, Schema Import (dataModel), ActionCtx Type, DatabaseReader Type (+15 more)

### Community 7 - "Data Migration Patterns"
Cohesion: 0.11
Nodes (21): Convex Migration Helper OpenAI Agent Config, Convex Migration Helper Skill, Widen-Migrate-Narrow Pattern, Dual Write Zero-Downtime Strategy, Adding Required Field Migration Pattern, Splitting Nested Data into Separate Table, Migration Dry Run, @convex-dev/migrations Component (+13 more)

### Community 8 - "Performance Audit Rules"
Cohesion: 0.12
Nodes (21): Convex Migration Helper Skill (Referenced), Actions for Heavy Work Pattern, @convex-dev/aggregate Component, Convex Performance Audit Agent, Cursor-Based Batch Processing Pattern, Date.now() in Queries Anti-Pattern, Denormalization for Hot Paths, Digest / Summary Tables Pattern (+13 more)

### Community 9 - "Agent & Project Docs"
Cohesion: 0.13
Nodes (19): AI Files State (Hashes), Component Boundary auth/env in app, Convex AI Guidelines guidelines.md, Widen-Migrate-Narrow Pattern, Advanced Component Patterns Reference, Function Budget Reference, Hot Path Rules Reference, Hybrid Components Reference (+11 more)

### Community 10 - "Root TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 11 - "Convex TypeScript Config"
Cohesion: 0.12
Nodes (16): compilerOptions, allowJs, allowSyntheticDefaultImports, forceConsistentCasingInFileNames, isolatedModules, jsx, lib, module (+8 more)

### Community 12 - "Core App Architecture"
Cohesion: 0.20
Nodes (15): App Root Layout, Home Page, Convex Auth Config, ConvexClientProvider, Generated API Types, Convex HTTP Router, Convex My Functions, Convex Schema (+7 more)

### Community 13 - "App Layout & Providers"
Cohesion: 0.25
Nodes (4): geistMono, geistSans, metadata, convex

### Community 14 - "Convex Server Context Types"
Cohesion: 0.33
Nodes (5): ActionCtx, DatabaseReader, DatabaseWriter, MutationCtx, QueryCtx

### Community 15 - "Convex Schema & Data Model"
Cohesion: 0.33
Nodes (4): DataModel, Doc, Id, TableNames

### Community 16 - "AI Files State Tracking"
Cohesion: 0.40
Nodes (4): agentSkillsSha, agentsMdSectionHash, claudeMdHash, guidelinesHash

### Community 17 - "Tech Stack README"
Cohesion: 0.50
Nodes (4): Clerk Authentication, Convex Backend, Next.js Frontend, Tailwind CSS

## Ambiguous Edges - Review These
- `Convex Migration Helper Icon (Circular Arrows / Sync)` → `Convex Setup Auth Icon (Padlock / Security)`  [AMBIGUOUS]
  .claude/skills/convex-setup-auth/assets/icon.svg · relation: semantically_similar_to

## Knowledge Gaps
- **191 isolated node(s):** `nextConfig`, `name`, `version`, `private`, `dev` (+186 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Convex Migration Helper Icon (Circular Arrows / Sync)` and `Convex Setup Auth Icon (Padlock / Security)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **Why does `Convex Quickstart Skill` connect `Auth Provider References` to `Data Migration Patterns`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `Convex Quickstart Skill` connect `Auth Provider References` to `Auth Configuration`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Why does `Convex Setup Auth Skill` connect `Auth Configuration` to `Auth Provider References`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **What connects `nextConfig`, `name`, `version` to the rest of the system?**
  _221 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Next.js App Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.06156156156156156 - nodes in this community are weakly interconnected._
- **Should `Auth Provider References` be split into smaller, more focused modules?**
  _Cohesion score 0.05855855855855856 - nodes in this community are weakly interconnected._