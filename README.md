# React.js Universal Todo App Example

**DISCLAIMER**

This example app contains no Universal JavaScript or React at this point. However, these are on the roadmap soon. I wanted to track changes from the initial version of the app, which uses only client-side JS without frameworks.

### Features

* ES2015
* Babel
* Webpack
* Express

### Getting Started

Install the project dependencies by running `npm install`.

### Webpack

Build the JavaScript for the browser by running `npm run build`.

Start a dev server and watch files for changes by running `npm run dev`.

### Server

Start the server by running `npm start`.

### Testing

Lint files with ESLint by running `npm run lint`.

Run unit tests by running `npm test`.

Functional tests are created with [WebdriverIO](http://webdriver.io).

Running the functional tests requires selenium server. Make sure you install the current [selenium standalone server](http://docs.seleniumhq.org/download/) version first.

Start the selenium server by running `npm run selenium`.

Then run the functional tests by running `npm run webdriver`.

Remember to start the server also before running the functional tests.
