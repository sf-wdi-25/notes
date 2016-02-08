# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Intro Angular - Solutions

## Challenges
```html
<div ng-controller="pokemonController as pc">
  <pre>{{ catchphrase | uppercase }}</pre>
  <pre>{{ pokemon | json : spacing }}</pre>
</div>
```

`index.html`
```html

<!DOCTYPE html>
<html ng-app="pokemonFun">
<head>
    <meta charset="UTF-8">
    <title>First Angular App</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
</head>
    <body>

        <div ng-controller="pokemonController as pc">
            <h1>Trainer: {{ pc.trainer.name || "Ash" }}</h1>

        <span>Enter your name:</span>
        <input ng-model="pc.trainer.name"/>

        <table class="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="(key, value) in pc.pokemon | orderBy: reverse | filter:searchText">
            <td>{{value.id}}</td>
            <td>{{value.name}}</td>
            <td>{{value.type}}</td>
          </tr>
        </tbody>
        </div>

        <span>Search Pokemon:</span>
        <input ng-model="searchText"/>

        <script type="text/javascript" src="app.js"></script>
    </body>
</html>
```

`app.js`
```js
var app = angular.module("ngFun", [])
    .controller("pokemonController", pokemonController)
    .filter('reverse', reverse);

function pokemonController() {
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
  this.catchphrase = "Gotta catch 'em all!";
};

function reverse() {
  return function(items) {
    return items.slice().reverse();
  };
}
```
