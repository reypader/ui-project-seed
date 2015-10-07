# UI Project Template #

Very basic project template for starting a UI project using RequireJS and AngularJS. The template also contains samples for modules and tests.

The project comes with Twitter Bootstrap and Font-Awesome for convenience.  
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
    * generate the `paths` field in `main.js`.
* `grunt test` - run all tests (*.spec.js)
* `grunt release` - prepares a distributable package of the application located in `dist` folder.
    * uglifies `main.js` and its dependencies into a `main.js` in `dist`.
    * uglifies all CSS files into one using **usemin** into `dist/styles`.
    * copy all html files, images, and fonts into their relative paths from `app` folder into `dist`.


