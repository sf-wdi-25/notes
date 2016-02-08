# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Intro Angular

| **Learning Objectives** |
| :---- |
| Grok Angular's philosophy |
| Initialize Angular in an HTML view |
| Experiment with templating & expressions |
| Organize your code with controllers |
| Pass data between the View & Controller with `this`|
| Implement 2-way data binding |


## Highlights of AngularJS

<a href="https://docs.angularjs.org/guide/introduction" target="_blank">Angular Guide Introduction</a>

* A "framework for dynamic web apps"
* "Lets you use HTML as your template language"
* Will "extend HTML's syntax"
* "Handles all of the DOM and AJAX glue code you once wrote by hand and puts it in a well-defined structure"
* Is "opinionated about how a CRUD application should be built"
* Comes with "Data-binding, basic templating directives, form validation, routing, deep-linking, reusable components and dependency injection"
* "Angular simplifies application development by presenting a higher level of abstraction to the developer"
* "Not every app is a good fit for Angular. Angular was built with the CRUD application in mind."
* "Angular is built around the belief that declarative code is better than imperative when it comes to building UIs and wiring software components together, while imperative code is excellent for expressing business logic."

## Refresher

#### HTML attributes
In `HTML` when you can add additional information to tags by using attributes like: `src`, `href`, `type`, `name`, `placeholder`, etc.

```html
<img src="/cute-cat-3.gif">
<input type="text" placeholder="Username">
```

Some attributes don't need to be assigned a value:

```html
<input type="checkbox" checked disabled>
```

This is like saying `checked=true` and `disabled=true`. [x]

**HTML `data-*` attributes**

Sometimes it's helpful to attach additional information to an element so that you can reference it in your javascript or stylesheet. We can do this using the `data-*` attribute

```html
<h1 data-wdi-number="25">Welcome to WDI!</h1>
```

We'll discover that Angular uses lots of new custom attributes or `directives`.
Literally ever single attribute we might want to use in plain-old html has an equivalent angular attribute. These are always prefixed with `ng-*` or `data-ng-*`. For instance, an angular-style href is called `ng-href` or `data-ng-href`, and in the docs it's called [ngHref](https://docs.angularjs.org/api/ng/directive/ngHref).

#### Event Binding
We learned about event-binding using jQuery. Here's how we might bind to a `button` tag being clicked (the "click event").

```html
<button>Pick Me!</button>
```

```js
$("button").on("click", function(event){
    alert("You clicked the button!")
});
// or, using the shorthand
$("button").click(function(event){
    alert("You clicked the button!")
});
```

It turns out you can do the same thing using inline click-listeners (long considered a Bad Thing TM).

```html
<button onclick="alert('Holy moly!')">Pick Me!</button>
```

Note that your javscript expression is literally a string here.
```js
"alert('Holy moly!')" // Definitely not an alert()!
```

What's happening is your string is being evaluated, using `eval`.

``` js
eval("alert('Holy moly!')")
eval("alert(1+1)")
```

We'll discover that Angular has come full circle, and is doing something quite similar in our views!

```html
<img data-ng-src="/cute-cat-{{cat.id}}.gif"
    data-ng-hover="$window.alert('{{cat.name}} says Meow!')">
```

> Pro-Tip: You should never use jQuery in Angular applications! You'll need to learn to do it the "angular" way.

##Exercises
The best way to learn is to dive right in!

1. [pokemonFun](exercises.md) - [solution](solution.md)
    * Build a simple, searchable index of pokemon characters
2. [3 Angular Challenges Lab](https://github.com/sf-wdi-25/intro_angular_challenges) - [solution](https://github.com/sf-wdi-25/intro_angular_challenges/tree/solution)
    * Play with rendering expressions, and using controllers & view-models
