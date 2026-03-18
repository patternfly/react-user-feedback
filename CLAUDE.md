# react-user-feedback

A React component library for collecting user feedback via a form in a modal. Built with React, TypeScript, PatternFly, and Webpack.

## Structure

- `/packages/module/src/Feedback` - React components specific to this PatternFly extension
- `/packages/module/patternfly-docs/content/examples/` - MD files and live code examples for API documentation
- `/packages/module/patternfly-docs/content/design-guidelines/` - Design guidelines from PatternFly for this extension

## Key Files

- Monorepo root: `/package.json`
- Library package: `/packages/module/package.json`
- Setup instructions: `/README.md`
- Custom styling: `/packages/module/src/Feedback/Feedback.css`
- Usage entry point: `/packages/module/patternfly-docs/content/examples/URL.tsx`

## Commands

```bash
yarn build          # Build the library
yarn test           # Run tests (currently disabled)
yarn lint           # Lint the codebase
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
