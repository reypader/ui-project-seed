# UI Project Template #

Very basic project template for starting a UI project using RequireJS and AngularJS. The template also contains samples for modules and tests.

Folder names `ui-src` and `ui-test` are named as such to avoid confusion when placing the project alongside other source codes. An example of this is when placing these files on the same level as the Java `src` folder. Ideally, when performing `grunt release`, the distribution files will be placed somewhere that the Java source code can immediately access.
The reason for this kind of placement is because Grunt cannot write files outside of the project root's folder (i.e. the ui project is separate from the Java project). Of course, this is not a problem if the developer opts to manually copy the contents of the `dist` folder. 

The template also includes Twitter Bootstrap and Font-Awesome for convenience. 
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

## Notes ##
The `dist` folder is the default location where the distribution files are placed. This can be changed in the `globalConfig` object of `Gruntfile.js`.


