![GitHub package.json version](https://img.shields.io/github/package-json/v/pedro-gomes-92/dots)
![GitHub repo size](https://img.shields.io/github/repo-size/pedro-gomes-92/dots)

[![Build Status](https://travis-ci.com/pedro-gomes-92/dots.svg?branch=master)](https://travis-ci.com/pedro-gomes-92/dots)

# Dots

Dots is a front end library, ready to be used in any front end web application. Includes all types of components (e.g. layouts, containers, actions, texts, charts), formats (e.g. date, currency, number), themes (e.g. colors, shapes, typography, iconography) and much more.

## Usage

Since Dots is a npm dependency, you can integrate Dots into your application, by running the command

```
npm install --save dots.js
```

### Customization

Dots lets you customize its SCSS variables and use its utilities (i.e. mixins and functions) to help you create the perfect application.
To be able to do this, create a `.scss` file, with the following content

```
$path-dots-fonts: '~dots.js/dist/fonts';

// Your SCSS variables customization

@import '~dots.js/src/material/_all';

// Your code
```

## Getting Started

Follow these instructions to run Dots locally.

### Prerequisites

Dots is a node project, which means you should have the latest version of [NodeJS](https://nodejs.org/en/download/) installed.

### Install Project

To install the project, just run the command

```
npm install
```

### Build Project

To build the project, just run the command

```
npm run build:dev
```

### Run Project

To start the project, just run the command

```
npm start
```

### Run Tests

To start the project unit tests, just run the command

```
npm test
```

You can also start the `jest` runner (bypasses the linter tests), by running the command

```
npm run test:watch
```

### Run Documentation

To start the project documentation, just run the command

```
npm run start:docs
```

## Deployment

Not available.

## Built With

- [Bulma](https://bulma.io/) - Provides the base styling for the library
- [Bulma Extensions](https://bulma.io/extensions/) - Extends the library with more Bulma solutions
- [Chartist.js](https://gionkunz.github.io/chartist-js/) - Provides chart components
- [Docsify](https://docsify.js.org/) - Creates the documentation for the library, by rendering `*.md` into `*.html`

## Contributing

Please read [CONTRIBUTING.md](https://github.com/pedro-gomes-92/dots/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

For the versions available, see the [tags](https://github.com/pedro-gomes-92/dots/tags) on this repository.

## Authors

- **[Pedro Gomes](https://github.com/pedro-gomes-92)** - _Owner_

See also the list of [contributors](https://github.com/pedro-gomes-92/dots/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/pedro-gomes-92/dots/blob/master/LICENSE) file for details.
