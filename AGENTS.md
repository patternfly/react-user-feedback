# Agent and contributor context

This repository is a **Yarn v1 workspace** with a single published package.

## Layout

| Path | Package / role |
|------|----------------|
| Repo root | `@patternfly/react-user-feedback-root` — shared tooling (ESLint, Prettier, Jest, Babel), CI entrypoints, and workspace scripts. |
| `packages/module/` | `@patternfly/react-user-feedback` — the extension source, TypeScript build, PatternFly docs (examples + generated assets), and `semantic-release` config. |

Generated or framework-owned files under `packages/module/patternfly-docs/generated/` should be treated as build output unless you are intentionally updating the docs pipeline.

## Commands (run from repo root)

| Task | Command |
|------|---------|
| Install | `yarn install` |
| Build library (`dist/`) | `yarn build` (delegates to `yarn workspace @patternfly/react-user-feedback build`) |
| Dev server (docs + examples) | `yarn start` |
| Unit tests (Jest + RTL) | `yarn test` |
| Lint (JS/TS + Markdown) | `yarn lint` |
| Docs production build | `yarn build:docs` |
| Serve built docs | `yarn serve:docs` |
| A11y tests | `yarn build:docs && yarn serve:docs` (separate shell) then `yarn test:a11y` |

**Node:** CI uses Node 20. The root `package.json` includes a `packageManager` field for Yarn 1.22.x.

## CI scope (path filters)

`.github/workflows/check-pr.yml` limits `build-lint-test` to pull requests that touch **listed paths** (see that file for the exact set). Examples that **do** trigger CI include `packages/**`, root Jest/Babel/ESLint config, `package.json`, `yarn.lock`, `.gitignore`, `renovate.json`, `agentready-checklist-report-*.md`, `LICENSE`, workflows, `README.md`, and `AGENTS.md`.

**Not every root file is listed.** If your PR only changes paths outside the filter (for example a new root dotfile or doc not yet added to the list), the PR check may **not** run automatically. To get a green check: touch any listed path (e.g. add a trivial comment to `AGENTS.md`—prefer updating `check-pr.yml` if the omission was an oversight), or ask a maintainer to run the workflow. When extending the list, prefer explicit paths over broad `**` globs so unrelated edits do not spam CI.

When the workflow runs, jobs use a **full** `yarn build` (single publishable package—no Turborepo/Nx graph). Scoping is intentionally **path-based on the PR** rather than per-task “affected” builds.

## Release

`packages/module/release.config.js` configures **semantic-release** for npm publishing. Commit messages follow [Angular / semantic-release conventions](https://github.com/semantic-release/semantic-release).

## External guidelines

- [PatternFly AI-assisted development / contributing](https://github.com/patternfly/.github/blob/main/CONTRIBUTING.md)
