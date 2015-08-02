# Component Pattern for Angular JS 1.X

* original blog post describing [Component Pattern](https://medium.com/@tomastrajan/component-paradigm-cf32e94ba78b)
* presentation describing history of Angular JS concepts and [Component Pattern](https://slides.com/tomastrajan/component-pattern-for-angular-js-1-x)

![Components](/src/asset/image/components.jpg?raw=true "Component Patternf for Angular JS 1.X")

## Features

* standard implementation of a state using `ui-router`
* component implementation used as inline template in `ui-router` state definition
* ES6, Webpack

## Installation

To use it, just clone this repo and install the npm dependencies:

```shell
$ git clone https://github.com/tomastrajan/component-pattern-for-angular-js-1-x component_pattern_example
$ cd component_pattern_example
$ npm install
```

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `build` - generate a minified build to dist folder
* `dev` - start development server, try it by opening `http://localhost:8080/`
* `test` - run all tests
* `test:live` - continuously run unit tests watching for changes

## Credits

This example uses build process from [angular-webpack-workflow](https://github.com/Foxandxss/angular-webpack-workflow),
so check it out for more information if needed.