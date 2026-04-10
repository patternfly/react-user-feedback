# 1. Monorepo layout: library source in `packages/module` (no root `src/` / `tests/`)

Date: 2026-04-09

## Status

Accepted

## Context

This repository is a **Yarn workspaces** monorepo. The shipped npm package **`@patternfly/react-user-feedback`** is built from **`packages/module`**. Some automated “agent readiness” or scaffolding tools expect a **repository-root** `src/` directory and a **repository-root** `tests/` directory. This project does **not** use that layout.

## Decision

- **Source code** for the extension lives under **`packages/module/src/`** (not `/src` at the repo root).
- **Unit tests** are colocated with the package (e.g. under `packages/module/src/**/__tests__` or `*.test.*` as configured) and **Jest** is configured with **`roots`** aimed at **`packages/`** (see root `jest.config.js`).
- We **do not** add a root-level `src/` or `tests/` directory solely to satisfy generic directory checks; agents and contributors should treat **`packages/module`** as the library root.

## Consequences

- **Positive:** One canonical path for the published package; matches `yarn build` and workspace layout.
- **Positive:** Agents reading `CLAUDE.md` or this ADR know where to edit and test without guessing.
- **Neutral:** Tools that only look for `/src` and `/tests` at the repo root may still report a “standard layout” finding until they understand workspaces—documented here as intentional.
