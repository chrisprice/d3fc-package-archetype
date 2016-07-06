# d3fc-package-archetype

An archetype for other d3fc projects, includes linter, bundling and test configuration

 - **Linting** - linting is performed by eslint, using the `eslint-config-standard` configuration, with a few customisations.
 - **Test** - Jasmine is used for testing, with `babel-register` used as a Jasmine helper so that tests can be run without bundling.
 - **Bundling** - Rollup is used for bundling. As it requires using babel with its own presets, `es2015-rollup`, with rollup the `.babelrc` file is ignored.
