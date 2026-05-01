# 3. CI: PR checks via a reusable build / lint / test workflow

Date: 2026-04-10

## Status

Accepted

## Context

We need reliable **lint**, **unit**, and **accessibility** checks on pull requests without duplicating workflow steps across repositories or branches. GitHub Actions **reusable workflows** let one definition drive **`check-pr`** (and similar callers) while keeping caching and checkout behavior consistent.

## Decision

- **`.github/workflows/check-pr.yml`** runs on pull requests to protected branches and **calls** **`.github/workflows/build-lint-test.yml`** via **`workflow_call`**.
- The reusable workflow performs **install**, **build**, **lint**, **Jest**, and **docs + a11y** steps appropriate to this repo (including caches where configured).
- **Workflow hygiene** (e.g. validating Action YAML) is treated as part of CI maintenance alongside ESLint and tests.

## Consequences

- **Positive:** One place to adjust CI steps; PR contributors see a single “pipeline” for the repo.
- **Positive:** Callers can pass **environment** (e.g. PR number) for checkout behavior without copying job YAML.
- **Neutral:** Changes to the reusable workflow affect every workflow that references it; review those edits carefully.
