// app.js

angular
  .module('pokemonApp', [])
  .controller('pokemonController', pokemonController);

  function pokemonController () {

    var vm = this;

    vm.trainer = {
      name: "Ash"
    };

    vm.pokemonList = [
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
    console.log(vm);
  };
