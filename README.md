# PatternFly React User Feedback

This project is a [PatternFly](https://github.com/patternfly/patternfly-react) React based component used to collect user feedback.  Examples of how to use this extension are documented on
the PatternFly website under [Extensions](https://www.patternfly.org/v4/extensions/user-feedback)

## Installing dependencies
This extension uses [yarn](https://yarnpkg.com/) for building and development.  You can install the dependencies for this project using the yarn install.
```
yarn install 
```
## Building the extension
To build the user-feedback extension locally first follow the instructions to install the dependencies.  Once that has completed type the following in a terminal:
```
yarn build
```

## Development instructions


### Using the development server
The development server will show you the documentation for this product along with working examples.  This is what is used for running and developing the feedback extension. 

You can start the development server by typing:
```
yarn start 
```

### Running Unit Tests
[Jest](https://jestjs.io) along with [React testing library](https://testing-library.com/docs/react-testing-library/intro/) are used to test the components that make up this extension.

To run unit tests first you can type:
```
yarn test
```

### Linting
[ESLint](https://eslint.org/) is used to ensure everyone that contributes to this project is following the same best practices, and to statically analyze the code.

To run the linter:
```
yarn lint
```

### Accessability
Accessability (a11y) tests are used to make sure the extension is meeting the same a11y guidelines as PatternFly. Running the a11y tests require that the documentation is built and served.  

To build the documentation type the following in a terminal:
```
yarn build:docs
yarn serve:docs
```

In a new terminal window to run the accessibility tests type:
```
yarn test:a11y
```

Once the accessibility tests have finished running you can run yarn **serve:a11y** to locally view the generated report.