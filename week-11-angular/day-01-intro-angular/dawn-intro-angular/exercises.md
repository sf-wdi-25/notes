## HTML Setup

1. Create a new directory `pokemonFun`.

2. Create a new file `index.html` and link your html file to angular. 

    ```html
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    ```

3. In your HTML try changing the `<html>` tag to `<html ng-app>`. This will tell your HTML page to use use angular.

4. Create an empty `app.js` file in your `pokemonFun` directory and require it in your `<head>` after angular.

5. Let's name our app `pokemonFun`. To do this we can create an empty angular module.

6. `app.js`

    ```js
    var app = angular.module("pokemonFun", []);
    ```

6. Now update your `html` tag to `<html ng-app="pokemonFun">`.

Sweet, we're up and running!

## Templates & Expressions

Angular creates it's views by templating directly into HTML with expressions. This is it's declarative way of building the UI.

Try writing any regular javascript expression inside double curly brackets, such as: `{{ <someExpression> }}` and see what your HTML evaluates to. What happens what you express:

* `4 * 4`
* `"hola!".toUpperCase()`
* `['s','w','e','e','t','n','e','s','s'].join("")`

## Controllers & Scope

Controllers contain all the business logic for our application.

We can seed our application with some data, but first we have to create a controller.

`app.js`

```js
app.controller("pokemonController", function() {
    //logic here
});
```

Most applications will have several controllers that map to a particular resource. In this case we're using Pokemon.

To use our controller in our View we have to declare it somewhere. Create a new `div` tag that will house our Pokemon Controller.

`index.html`

```html
<div ng-controller="pokemonController as pc">
    <!--placeholder for now-->
</div>
```

In order to pass data or behavior to our HTML view we need to use the object `this`. It is the interface to pass data and behavior into our views. Both the View and Controller share access to the `this` object.

![scope](http://devgirl.org/wp-content/uploads/2013/03/concepts-controller.png)

Let's attach some data to our controller class so we can use it in the view!

```js
app.controller("pokemonController", function(){
  this.pokemon = [
    {
      id: 25,
      name: 'Pikachu',
      type: 'Electric'
    },
    {
      id: 10,
      name: 'Caterpie',
      type: 'Bug'
    },
    {
      id: 39,
      name: 'Jigglypuff',
      type: 'Fairy'
    },
    {
      id: 94,
       name: 'Gengar',
      type: 'Ghost'
    },
    {
      id: 143,
      name: 'Snorlax',
      type: 'Normal'
    }
  ];
});
```

Great, now let's see if we can see them in our view by referencing the `pokemon` variable inside an expression and wrapping it in a `pre` tag.

```html
<div ng-controller="pokemonController as pc">
    <pre>{{ pc.pokemon }}</pre>
</div>
```

## Two Way Data Binding

Data-binding in Angular apps is the automatic synchronization of data between the model and view components. The way that Angular implements data-binding lets you treat the model as the single-source-of-truth in your application. The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa.

In previous templating systems that you've worked with the data will only bind in one direction.  For instance, if you've made a change in your model it is not immediately reflected in the view.  

An example of this would be if you had written blog title.  The title might exist in the view but you would need to trigger an event (hitting a submit button) in order to have that change reflected in the model.  This is not so in Angular.  There are continuous updates between the model and the view.

Let's take a look at this in action:  

We'll create an input form and a display for this input.
```html
<input type="text"
       ng-model="name"
       placeholder="Enter your name">

<h1>Hello <span ng-bind="pc.name"></span><h1>
<h1>Hello <span>{{ pc.name }}</span><h1>
```

What happens when you type in your name?


### Challenge

* Pass a new variable `catchphrase` from the Controller to the View. Set it's value as "gotta catch 'em all!" and use an angular filter to uppercase it in the View.

* How could we create a default value for the trainer's name so that when the page loads it is set to `Ash`?

Rendering the JSON Pokemon in a Bootstrap table, where each attribute is a column. The final result should look like this:

![pokemon-table](http://i.imgur.com/or1CwF7.png)

Hint: Bootstrap CDN
