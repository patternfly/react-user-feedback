# Bookmarks

Progressive disclosure for task-specific documentation and references.

## Table of Contents

- [PatternFly Documentation](#patternfly-documentation)
- [Design & Guidelines](#design--guidelines)
- [Architecture decisions](#architecture-decisions)
- [Development Resources](#development-resources)

---

## PatternFly Documentation

### [PatternFly 6 React Docs](https://www.patternfly.org/)

Official PatternFly 6 React component documentation and API reference.

**Added by**: Initial setup | **Date**: 2026-03-18

### [PatternFly MCP Server](https://www.npmjs.com/package/@patternfly/patternfly-mcp)

MCP server for PatternFly development rules and documentation - use with Ambient/Claude for inline guidance.

**Added by**: Initial setup | **Date**: 2026-03-18

---

## Design & Guidelines

### [Design Guidelines (Local)](./packages/module/patternfly-docs/content/design-guidelines/)

Local design guidelines provided by PatternFly team for this extension.

**Added by**: Initial setup | **Date**: 2026-03-18 | **Note**: Authoritative source for UX patterns

---

## Architecture decisions

### [ADR 0001 — Monorepo layout (local)](./docs/adr/0001-monorepo-layout-packages-module.md)

Why the library lives under `packages/module/` instead of a root `src/` / `tests/` layout.

**Added by**: AgentReady remediation | **Date**: 2026-04-09

### [ADR 0002 — Jest at the workspace root](./docs/adr/0002-unit-testing-with-jest.md)

Jest config at the repo root, `yarn test` / `--passWithNoTests`, and lint-staged related tests.

**Added by**: AgentReady remediation | **Date**: 2026-04-10

### [ADR 0003 — CI PR checks (reusable workflow)](./docs/adr/0003-ci-pr-checks-via-reusable-workflow.md)

PR checks via `check-pr` calling the reusable `build-lint-test` workflow.

**Added by**: AgentReady remediation | **Date**: 2026-04-10

---

## Development Resources

### [Component Examples (Local)](./packages/module/patternfly-docs/content/examples/)

Live code examples and markdown documentation for all components in this extension.

**Added by**: Initial setup | **Date**: 2026-03-18 | **Note**: Start with URL.tsx for basic usage

---

**Tip**: Use `/bookmark <url> <description>` in Ambient to add to this list collaboratively with your team.
