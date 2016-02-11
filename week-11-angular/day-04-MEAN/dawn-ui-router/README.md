# ui-router

## Objectives

* understand what a state machine is
* load templates & handle URL changes using ui-router



## Angular UI

Angular UI is a collection of additional modules for Angular.  There are tools for working with google maps, dynamic scrolling, etc.  Check out all the tools at [https://angular-ui.github.io/](https://angular-ui.github.io/)

We'll be using one of the most popular tools available, [ui-router](https://github.com/angular-ui/ui-router).


## Finite State Machines

Ui-router employs a [state-machine](https://en.wikipedia.org/wiki/Finite-state_machine) to organize the app and its various dynamic pages into **states**.  In a state-machine the machine can exist in only one state at a time.  The transitions from each state to another state are defined and triggered by a specific condition.

![By 1st Macguy314, reworked by Perhelion  German translation by Babakus [Public domain], via Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/c/cf/Finite_state_machine_example_with_comments.svg)

Much of what happens in computer hardware is controlled by state machines.  

A traffic light is another example of a state-machine that you've likely seen.
![](https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartlord.com%2Fwp-content%2Fuploads%2F2013%2F09%2Ftraffic-light.png&f=1)

## ui-router vs. ngRoute

AngularUI Router is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine. Unlike the $route service in the Angular ngRoute module, which is organized around URL routes, UI-Router is organized around states, which may optionally have routes, as well as other behavior, attached. [source](https://github.com/angular-ui/ui-router#angularui-router-)

Ui-router also allows for nested views and multiple named views. This is very useful with larger app where you may have pages that inherit from other sections.  [source and more info](http://stackoverflow.com/questions/21023763/angularjs-difference-between-angular-route-and-angular-ui-router)


> Note: Angular 1.5 has added some new features to ngRoute that make it more like ui-router.

## ui-router

Ui-router ties your site to states. The URL simply becomes a property of the current state.

| state          | view                 | URL                      | controllers |
|----------------|----------------------|--------------------------|------------|
| contacts-index | contacts-index.html  | `mysite.com/#contacts` |  ContactsIndexController |
| contacts-show  | contacts-show.html   | `mysite.com/#contacts/33` |  ContactsIndexController, ContactsShowController |

* We can use multiple controllers on the same page.
* Controllers can focus on handling just _one_ piece of app data.

Let's look at some code:

```js

config.$inject = ['$stateProvider', '$urlRouterProvider']; // minification protection
function config($stateProvider, $urlRouterProvider) {
  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

   $stateProvider
    .state('home', {
      url: "/",
      template: "Home!"  // inline template as string
    })
    .state('shoes-index', {
      url: "/shoes",
      templateUrl: "public/templates/shoes-index.html",
      controller: "ShoesIndexController",
      controllerAs: 'shoes'  // note use of controllerAs syntax
    })
    .state('shoes-show', {
      url: '/wines/:id', // the "id" parameter
      templateUrl: 'public/templates/shoes-show.html',
      controller: 'ShoesShowController as shoe' // alternate controller as syntax
    });

```

### Changing State

We could just use a regular `a` tag with interpolation:
``` html
    /* Normal string interpolation */
    <a href="#/wines/{{shoe.id}}">{{shoe.name}}</a>
```

Since we have ui-router, a **better way** is to use `ui-sref`:
```html
    /* state-based routing with ui-router */
    <a data-ui-sref="shoes-show({id: shoe.id})">See more</a>
```


### Multiple Views per State

Many apps show more than one thing at a time.  They may have a list of products, content about a few products, a shopping cart, and a menu that changes depending on where the user is at.  All of these can be on the screen simultaneously.

![http://www.funnyant.com/angularjs-ui-router/](http://www.funnyant.com/wp-content/uploads/2014/12/multiple-views-sketch-1024x768.jpg)  - [image credit](http://www.funnyant.com/wp-content/uploads/2014/12/multiple-views-sketch-1024x768.jpg)

ui-router gives us a way to handle & update more than one view for each state.

```js
angular.app(MySite, [$stateProvider, $urlRouterProvider])
      .config(router);

router.$inject = ['$stateProvider', '$urlRouterProvider']
function router($stateProvider, $urlRouterProvider){

    // catchall for routes that don't match
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
        url: '/',
        views: {
            'header': {
                templateUrl: '/templates/partials/header.html',
                controller: 'HeaderController as header'
            },
            'content': {
                templateUrl: '/templates/partials/content.html',
                controller: 'RecentPostsController as posts'
            },
            'footer': {
                templateUrl: '/templates/partials/footer.html',
            }
        }
    })
});
```


# Lab

Let's do this [ui-router lab!](https://github.com/sf-wdi-25/angular-ui-router-lab)



# More resources

* ui-router site [http://angular-ui.github.io/ui-router/site/#/api/ui.router](http://angular-ui.github.io/ui-router/site/#/api/ui.router)
* ui-router [sample app](http://angular-ui.github.io/ui-router/sample/#/)
* [SO: difference between ngRoute and ui-router](http://stackoverflow.com/questions/21023763/angularjs-difference-between-angular-route-and-angular-ui-router)
* [article with more visual explanations](http://www.funnyant.com/angularjs-ui-router/)
* [cool demo](http://ui-router.github.io/sample-app/#/contacts/mkinney/edit)
* [ES6 source code for above cool demo](https://github.com/ui-router/sample-app)
