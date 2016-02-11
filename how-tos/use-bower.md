# Intro to Bower

##Bower can make our life easier

jQuery, Underscore, Bootstrap, are examples of third-party libraries we frequently use in projects. It can be a hassle to find the CDN for each library. Using CDNs also requires us to have an internet connection while we're doing development work. As our code-base grows, keeping track of all our dependencies will be a headache! Bower allows us to download and manage all our dependencies locally.

###Installing Bower

You'll only need to do this once: install bower with...

```bash
npm install -g bower
```

or

```bash
sudo npm install -g bower
```

*Note: as we installed it globally with `-g` we can now run `bower` from anywhere in our computer.*

Let's make a directory, `funWithBower` and inside create an `index.html`. Here's some starter code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Title</title>
  <meta charset="utf-8" />
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" type="text/css" href="#">
</head>
<body>
  
</body>
</html>
```

###Using Bower

Now let's include a few libraries in our HTML file: jQuery, Underscore, and Bootstrap. Inside of `funWithBootstrap`, run:

```bash
bower install jquery
```

Note: we can install multiple files at once by separating their names with spaces, nifty!

```bash
bower install underscore bootstrap
```


####What just happened?

You'll notice you have a new directory in your project folder called `bower_compents`. Inside, you'll find folders for everything you just installed: jQuery, Underscore, and Bootstrap.

Inside of each of these folders you'll see a bunch of files. Don't worry. The file with the name of the library is probably the main one. For example, `bower_components/underscore/underscore.js` is the only file you'll use for Underscore. For the other libraries, you may need to look inside a `dist` (for distribution) directory to find `jquery.js`.

Here's what it will look like (note `bower_components` in each **relative** path!):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Title</title>
  <meta charset="utf-8" />
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- underscore -->
  <script type="text/javascript" src="/bower_components/underscore/underscore.js"></script>
  <!-- jquery -->
  <script type="text/javascript" src="/bower_components/jquery/dist/jquery.js"></script>
  <!-- boostrap js -->
  <script type="text/javascript" src="/bower_components/bootstrap/dist/js/bootstrap.js"></script>
  <!-- boostrap css -->
  <link rel="stylesheet" type="text/css" href="/bower_components/bootstrap/dist/css/bootstrap.css">
  <!-- boostrap css theme (optional) -->
  <link rel="stylesheet" type="text/css" href="/bower_components/bootstrap/dist/css/bootstrap-theme.css">
</head>
<body>

</body>
</html>
```

* In your Chrome Developer Console, check the "Network" tab as you reload. If you see red, you've probably mistyped your link.
* Take care to use *relative links*. You should see a relative link like: `/bower_components/bootstrap/dist/css/bootstrap-theme.css`. You should **never** see anything resembling: "file:///Users/name/my_code/wdi21/modules/bootstrap_mockups/bower_components/bootstrap/dist/css/bootstrap-theme.css"!!!

## Using bower.json to simplify
Bower isn't just a handly way to install files locally, it also gives us a new way to share our project code with other developers *without* needing to send along tons of third-party libraries.

Here's an example of a `bower.json` file for a project called "bootstrap_mockups". Take a look at this project's dependencies:

``` javascript
{
  "name": "bootstrap_mockups",
  "version": "0.0.0",
  "homepage": "https://github.com/sf-wdi-21/bootstrap_mockups",
  "authors": [
    "myname <myname@email.com>"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "bootstrap": "~3.3.5",
    "jquery": "~2.1.4",
    "underscore": "~1.8.3"
  }
}
```

Now, when another developer comes along and wants to work on my project. All they have to do is clone my repo (and just *my* code!) and run `bower install`. Bower will then know to look in the `bower.json` file for project dependencies, and will download them to a local project folder called `bower_components`.

### Updating bower.json
You can manually make changes to `bower.json`, but to create your own you can do the following:

* If it doesn't exist yet, run `bower init` and walk through the prompts.
* If it already exists, run `bower install` to download dependencies. To add new dependency simply run `bower install --save name_of_library` (make sure not to skip "--save" that's telling bower to add a new entry to `bower.json`).

####Test it out
Try deleting the entire `bower_components` folder, then run `bower install`. If you did things correctly, bower will read the local `bower.json` file and recreate/repopulate the `bower_components` folder with your project's dependencies and libraries.

###Learn More
To learn more about bower, check out: [bower.io](http://bower.io/). You can also always type `bower --help` in your terminal to see bower commands and options.

