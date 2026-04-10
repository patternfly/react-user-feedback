# 2. Unit testing with Jest at the workspace root

Date: 2026-04-10

## Status

Accepted

## Context

The library ships from **`packages/module`**, but contributors expect a single **`yarn test`** entry point from the repository root. We need consistent time zones for snapshots, a minimal guard against an empty Jest configuration, and fast feedback on pre-commit for staged changes.

## Decision

- **Jest is configured at the repo root** (`jest.config.js`, `jest.setup.js`) with **`roots`** aimed at **`packages/`** so tests in the workspace are discovered without a root-level `tests/` directory.
- **Default timezone** for tests is set in **`jest.setup.js`** (and mirrored in the **`yarn test`** script where needed) so date-sensitive output is stable in CI and locally.
- A small **smoke test** under `packages/module` ensures the suite is non-empty and the wiring stays valid.
- **lint-staged** may run **`jest --findRelatedTests`** on staged source files to keep pre-commit fast.

## Consequences

- **Positive:** One obvious command for CI and local runs; aligns with Yarn workspaces.
- **Positive:** Related-tests mode keeps Husky commits quick for small edits.
- **Neutral:** Agents must look under **`packages/`** (and package-local `__tests__` / `*.test.*` patterns) rather than a single top-level `tests/` folder.
