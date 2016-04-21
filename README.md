*Use this if you need to write Express apps using ES6*

In order to have files written in ES6 that are then used directly in Node (this isn't just for Express!) you need to have an `index.js` exactly like the one in this repository that first calls in Babel-core/register and then calls in your apps entrypoint. You will need the packages from the package.json (excluding Express if you are not using it) as well as the .babelrc file.
