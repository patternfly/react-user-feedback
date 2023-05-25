# User feedback

This project is a [PatternFly](https://github.com/patternfly/patternfly-react) React extension that products can use to collect feedback from users. To view examples of this extension’s use, [view its documentation on PatternFly](https://www.patternfly.org/v4/extensions/user-feedback).

## Installing dependencies

[Yarn](https://yarnpkg.com/) is used to develop and build user feedback. To install dependencies for this project, use the `yarn install` terminal command:

```
yarn install 
```

## Building the extension

Once dependencies are installed, you can build user feedback locally using the `yard build` terminal command:

```
yarn build
```

## Development instructions

### Using the development server

The development server runs and develops user feedback, and also contains documentation and working examples. To start the development server, use the `yarn start` terminal command:


```
yarn start 
```

### Running unit tests

User feedback is tested with [Jest](https://jestjs.io) and the [React testing library](https://testing-library.com/docs/react-testing-library/intro/). To run unit tests, use the `yarn test` terminal command: 


```
yarn test
```

### Linting

[ESLint](https://eslint.org/) is used to analyze user feedback’s source code to flag potential quality errors. This also ensures that all contributors follow the same best practices. To run the linter, use the `yarn lint` terminal command:


```
yarn lint
```

### Accessibility
Accessibility (a11y) tests are used to ensure that user feedback meets the same a11y guidelines as PatternFly. To run a11y tests, you must build and serve its documentation by using the `yarn build:docs` and `yarn serve:docs` terminal commands:


```
yarn build:docs
yarn serve:docs
```

In a new terminal window, use the `yarn test:a11y` to run accessibility tests:

```
yarn test:a11y
```

Once the accessibility tests have finished running, you can locally view the generated report using the the `yarn serve:a11y` terminal command:

```
yarn serve:a11y
```

### Committing changes

When commiting changes to this repo follow the [semantic release guidelines](https://github.com/semantic-release/semantic-release).