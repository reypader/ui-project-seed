# UI Project Template #

Very basic project template for starting a UI project using RequireJS and AngularJS. The template also contains samples for modules and tests. There are two main files and HTML files. One is dedicated to serving the main application assets (main.js & index.html) and the other is for displaying a login page (signin-main.js & signin.html). The reason for the separation is to make sure that the entire application is loaded when asking the user to sign in.

## Requirements ##
* Grunt CLI
* NodeJS
* Bower

## How to initialize: ##

    $ npm install

## How to run: ##
    $ grunt serve

## Available Tasks ##
* `grunt serve` - serves the application in http://localhost:9000.
* `grunt clean` - deletes all generated files and directories created in `grunt init`.
* `grunt init` - generates files and directories needed to run the app.
    * copy the `require.js` file from the fetched RequireJS from Bower.
    * copy all font files from bootstrap and font-awesome dependencies.
    * generate the `paths` field in both `main.js` `and signin-main.js`.
* `grunt test` - run all tests (*.spec.js)
* `grunt release` - prepares a distributable package of the application located in `dist` folder.
    * uglifies `main.js` and `sign-in.js` and their respective dependencies into JS files of the same name in `dist`.
    * uglifies all CSS files into one using **usemin** into `dist/styles`.
    * copy all html files, images, and fonts into their relative paths from `app` folder into `dist`.


