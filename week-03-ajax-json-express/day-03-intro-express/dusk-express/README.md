# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60">  Intro to Express continued:

## Routes, Params, and Queries

| Objectives |
| :---- |
| Explain parsing URL params and using query string params. |
| Apply routing knowledge to build an Express application with dynamic routes. |
| Explain the usefulness of middleware (e.g., `body-parser`). |

## Pre-reading

* [HTTP Intro](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

## Terminology

* HTTP
* Resource path
* Query string
* HTTP verb
* Status code
* Middleware

## Outline

* Intro (continued) to Express
* Routing
  * HTTP GET
  * Request Params
* Query Params
  * Middleware
* Calculator App

## What Can We Do with Express?

* Server-side JS
  * Instead of DOM manipulation, we are interacting with the request / response cycle
* (B.Y.O.A.) Build your own API

### Setup

Let's start with a simple **Express** application.

* Make a directory and `server.js`

  ```bash
  mkdir quick_example
  cd quick_example/
  touch server.js
  ```

* Then create a `package.json`.

  ```bash
  npm init
  npm install --save express
  subl .
  ```
The folder structure will be as follows:

```
/quick_example
    /node_modules
        /express
            ...
    server.js
    package.json
```

Now we need to write some code for our simple application.

`server.js`
```js
// requirements
var express = require('express'),
    app = express();

// a "GET" request to "/" will run the function below
// NOTE anyone know how we can better comment this code? *cough* jsdoc *cough*
app.get("/", function (req, res) {
  // send back the response: 'Hello World'
  res.send("Hello World");
});

// start the server
app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});

```

Now you can start the server:

```bash
node server.js
```

## What is Routing?

Building an application will require us to have a firm grasp of something we call **routing**.  Each **route** is a combination of a **Request Type** and **Path**.

| Request Type | Request Path | Response
| :--- | :--- | :--- |
| `GET` | `/` | `Hello World` |
| `GET` | `/burgers` | `Hamburger`, `Cheese Burger`, `Dble Cheese Burger` |
| `GET` | `/tacos` | `Soft Taco`, `Crunchy Taco`, `Super Taco` |


Let's build these into our application:

`server.js`
```js
var express = require('express'),
  app = express();

var burgers = [
  "Hamburger",
  "Cheese Burger",
  "Dble Cheese Burger"
];

var tacos = [
  "Soft Taco",
  "Crunchy Taco",
  "Super Taco"
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/burgers", function (req, res) {
  //send all the burgers     
  res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {
  //send all the tacos       
  res.send(tacos.join(", "));
});

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});

```

## Request (Url) Parameters

What if we want to create an app that can dynamically say hello to anyone?

* Using **url parameters** add a dynamic route to the application, indicated by `:` and the variable name you want to use, we'll use `:name` for the example below.

```js
app.get("/greet/:name", function (req, res) {
  res.send( "Hello, " + req.params.name );
});
```

Here we are seeing the first introduction to parameters that the application can identify. In the following route `:name` is considered a route parameter. We can access it using `req.params.name`.

| Request Type | Request Path | Response
| :--- | :--- | :--- |
| `GET` | `/greet/:name` | `Hello, :name` |


## Query Params

Generally, you don't want to cram everything into a route. Just imagine when there are multiple parameters in route. Or maybe we don't care about getting the order of the parameters correct. Luckily, there are **query parameters** you can include with each request.

Let's see query params in action. Go to <a href="https://google.com/search?q=kittens&tbm=isch" target="_blank">https://google.com/search?q=kittens&tbm=isch</a>

* `?` denotes the beginning of the query parameters.
* `=` indicates an assignment; anything to the left is the key, while the right represents the value.
* `&` allows for the input of multiple parameters, separating each.

Let's add our first route to practice query params.

```js
app.get("/thank", function (req, res) {
  var name = req.query.name;
  res.send("Thank you, " + name);
});
```

Reset your server and go to <a href="localhost:3000/thank?name=jane" target="_blank">localhost:3000/thank?name=jane</a>. Note how we can now define parameters in the url after a `?`.

## Middleware

What is middleware? <a href="http://expressjs.com/guide/using-middleware.html" target="_blank">In terms of Express</a>, middleware is a function with access to the request object (req), the response object (res), and the next middleware in the application’s request-response cycle, commonly denoted by a variable named next.

Middleware can:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware in the stack.

You can create your own middleware, or use third-party modules. That's right, there are tons of useful middleware modules that are already out there which you can use to handle common challenges like authentication, validation, and parsing.

The <a href="https://github.com/expressjs/body-parser" target="_blank">`body-parser`</a> module is an example of some middleware that makes Express awesome. You can use it to parse out params from the POST'd form. This provides a different way to collect data instead of relying on URL or query params.

`server.js`
```js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// bodyParser.urlencoded() returns a function that will be called later in the app.post() route
var parseUrlencoded = bodyParser.urlencoded({extended: false});

// store for cities in memory (as long as server is running)
var cities = [];

app.get('/cities', function(req, res) {
  res.json({cities: cities});
})

// passing multiple middleware functions to this route; they are executed sequentially.
// NOTE does it matter what we call the request and response parameter for our callback?
app.post('/cities', parseUrlencoded, function (request, response) {
  //                ^- middleware -^
  var city;
  var name = request.body.name;
  var description = request.body.description;
  city = { name: name, description: description}
  cities.push(city);

  // sending json
  response.json({ cities: cities});
});
```

### including middleware on all routes

Another way to include middleware is via `app.use`.  This will include it on *all* routes.

```js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// store for cities in memory (as long as server is running)
var cities = [];

// body parser config for all routes
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/cities', function(req, res) {
  res.json({cities: cities});
})

app.post('/cities', function (request, response) {
  var city;
  var name = request.body.name;
  var description = request.body.description;
  city = { name: name, description: description}
  cities.push(city);

  // sending json
  response.json({ cities: cities});
});

```

*Is there something missing from this code?
  *We haven't installed the `body-parser` package.
*How can we post to this?
  * postman
  * html form


  ```html
  <html>
  <body>
    <form method="POST" action="http://localhost:3000/cities">
      <label for"cityName">city</label>
      <input id="cityName" name="name" type="text" />
      <label for"cityDesc">description</label>
      <input id="cityDesc" name="description" type="text" />
      <input type="submit" />
    </form>
  </body>
  </html>
  ```

## Summary

We learned about:

* Routing to different resources, i.e. `/burgers` and `/tacos`.
* Using dynamic parameters, i.e. `/burgers/:index` and `/tacos/:index` to request specific data.
* Using query parameters for dynamic requests to serve up dynamic responses.
* What middleware is and why it is helpful.


This will be essential knowledge for building and interacting with applications that contain multiple resources, such as users, posts, comments, etc.


## Resources

1. <a href="http://expressjs.com/starter/installing.html" target="_blank">Starting an Express Project</a>
2. <a href="http://expressjs.com/starter/hello-world.html" target="_blank">Express Hello World</a>
3. <a href="http://expressjs.com/starter/basic-routing.html" target="_blank">Express Basic Routing</a>
