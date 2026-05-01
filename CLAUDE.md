# react-user-feedback

A React component library for collecting user feedback via a form in a modal. Built with React, TypeScript, and PatternFly; the library builds with **TypeScript (`tsc`)**, and local extension docs use the **PatternFly documentation framework** (`pf-docs-framework`).

## Structure

This repo is a **Yarn workspaces** monorepo. The **shipped library** is **`@patternfly/react-user-feedback`** from **`packages/module`**. There is **no** repository-root `src/` or `tests/` folder by design: implementation and tests live under the package (see [`docs/adr/0001-monorepo-layout-packages-module.md`](docs/adr/0001-monorepo-layout-packages-module.md)).

- `/packages/module/src/` — TypeScript/React source (e.g. `Feedback/`)
- `/packages/module/patternfly-docs/content/examples/` — MD files and live code examples for API documentation
- `/packages/module/patternfly-docs/content/design-guidelines/` — Design guidelines from PatternFly for this extension

**Jest** is configured at the monorepo root with `roots` under `packages/`; add or run tests from paths the package already uses (e.g. `packages/module/src/**/__tests__` or `*.test.*` per `jest.config.js`).

## Key Files

- Monorepo root: `/package.json`
- Library package: `/packages/module/package.json`
- Setup instructions: `/README.md`
- TypeScript: **`/tsconfig.json`** at the repo root **extends** **`/packages/module/tsconfig.json`** (canonical options and build for the shipped library live in the package; the root file exists for IDEs, agents, and tools that only look at the repository root)
- Custom styling: `/packages/module/src/Feedback/Feedback.css`
- Usage entry point: `/packages/module/patternfly-docs/content/examples/URL.tsx`

## Commands

```bash
yarn build          # Build the library
yarn test           # Run Jest for packages/ (passes with no tests until you add *.test.* / __tests__; uses --passWithNoTests)
yarn lint           # Lint all of packages/ (like CI)
yarn lint-staged    # What Husky runs on commit: Prettier + ESLint + jest --findRelatedTests --passWithNoTests on staged files only
```

For accessibility testing:

```bash
yarn build:docs && yarn serve:docs  # Start docs server
yarn test:a11y                       # Run a11y tests (in separate terminal)
```

## Important Context

- **Use PatternFly 6 components** - no inline styles, minimal custom styles
- **Do NOT use TailwindCSS** - this uses PatternFly design system
- PatternFly MCP available for development rules and docs:

  ```json
  {
    "mcpServers": {
      "patternfly-docs": {
        "command": "npx",
        "args": ["-y", "@patternfly/patternfly-mcp"],
        "description": "PatternFly React development rules and documentation"
      }
    }
  }
  ```

## More Info

See [BOOKMARKS.md](BOOKMARKS.md) for PatternFly documentation, design guidelines, and contribution resources.
