// IIFE Implementation
let pokemonRepository = (function (){

  let pokemonList = [
    {name: 'Snorlax', height: 2.1, types: ['normal', 'water']},
    {name:'Mewtwo', height: 1.9, types: ['psychic', 'flying'] },
    {name:'Shiftry', height: 1.3, types: ['dark', 'grass'] },
    {name:'Charmeleon', height: 1.1, types: ['fire', 'normal'] }
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  };

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    // Button Actions
    button.classList.add('button');
    pokemonList.appendChild(pokemonItem);
    pokemonItem.appendChild(button);

    //Events
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function showDetails (pokemon) {
    console.log(pokemon.name);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// IIFE ends here.

// For Each loop that will run through the Pokemon names, and throw a message related to a Pokemon being bigger than 2 meters.
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
});
