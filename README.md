# Project Files specifications

1. package.json
Contains all runtime packages and development time packages, that includes
standard angular packages foer runtime and packages for testing at development time
1a. Angular Depedencies at runtime
tslib.js, used for transpilation of TypeScript code into JavaScript and manage the 'polyfills' for browser compatibility
Polyfills, will make sure that the transpiled code is executed across all browsers
1b. zone.js, log the stacktrace and error handling in the browser while the Angular app executes in browser.
1c. rxjs, React Extension for JavaScript, used when the Angular app makes external AJAX calls and want to perform state management.


2. tsconfig.json, its variations tsconfig.app.json, tsconfig.spec.json
tsconfig.json, the TypeScript Configurations for Transpilations, VAriable Declaration Strict Mode and the Module Resolutions using Node.js.
tsconfig.app.json, use the tsconfig.js and load the polyfills to execute code across all browsers and set the entry point for Application's source code tp transpile
tsconfig.spec.json, used to load the Testing Script to test Angular Application.

3. karma.config.js, contains the Testing-Engine Automation to run testscripts

4. angular.json, the file for Build, Production and Testing
