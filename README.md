# User feedback

[![PR checks](https://github.com/patternfly/react-user-feedback/actions/workflows/check-pr.yml/badge.svg)](https://github.com/patternfly/react-user-feedback/actions/workflows/check-pr.yml)

[PatternFly](https://github.com/patternfly/patternfly-react) React extension for collecting product feedback (modal, forms, optional mailing-list and bug flows). Live docs and examples: [PatternFly — User feedback extension](https://www.patternfly.org/v4/extensions/user-feedback).

The shipped package is **`@patternfly/react-user-feedback`**, built from **`packages/module/`** (not a root-level `src/`). See [ADR 0001](docs/adr/0001-monorepo-layout-packages-module.md). Contributor and agent context: [`CLAUDE.md`](CLAUDE.md), [`BOOKMARKS.md`](BOOKMARKS.md).

**Install and build:**

```bash
yarn install
yarn build
```

**Docs development:** **`yarn start`** — builds the library, then runs the PatternFly docs dev server (examples + hot reload). **`yarn build:docs`** — production docs build. **`yarn serve:docs`** — serves the built docs (port from the docs framework).

**Lint:** **`yarn lint`** — ESLint for JS/TS and Markdown under `packages/` (see `package.json` for `lint:js` / `lint:md` / `lint:markdownlint`).

**Unit tests:** Jest uses `jest.setup.js` at the repo root; add tests under `packages/` (e.g. `*.test.*` or `__tests__/`). Run **`yarn test`** — it uses **`--passWithNoTests`** so CI stays green until tests exist. **Husky** runs **`lint-staged`** on commit; on staged `packages/**/*.{js,jsx,ts,tsx}` it runs Prettier, ESLint, and **`jest --findRelatedTests`** (with **`--passWithNoTests`**).

**Accessibility:** use two terminals — (1) `yarn build:docs && yarn serve:docs` (2) `yarn test:a11y`. **`yarn serve:a11y`** opens the generated a11y report after tests.

**Contributing:** follow [semantic-release / conventional commits](https://github.com/semantic-release/semantic-release). For AI-assisted changes, use [PatternFly AI-assisted development guidelines](https://github.com/patternfly/.github/blob/main/CONTRIBUTING.md).
