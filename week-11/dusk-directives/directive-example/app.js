// app.js

angular
  .module('pokemonApp', [])
  .controller('PokemonCtrl', PokemonCtrl);

  function PokemonCtrl () {

    var vm = this;

    vm.trainer = {
      name: "Ash"
    };

    vm.pokemonList = [
      {
        nDex: 25,
        name: 'Pikachu',
        type: 'Electric'
      },
      {
        nDex: 10,
        name: 'Caterpie',
        type: 'Bug'
      },
      {
        nDex: 39,
        name: 'Jigglypuff',
        type: 'Fairy'
      },
      {
        nDex: 94,
        name: 'Gengar',
        type: 'Ghost'
      },
      {
        nDex: 143,
        name: 'Snorlax',
        type: 'Normal'
      }
    ];
    console.log(vm);
  };
