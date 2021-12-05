// IIFE Implementation
let pokemonRepository = (function (){

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log();
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}


  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  };

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  return response.json();
}).then(function (pokemonList) {
  console.log(pokemonList);
}).catch(function () {
});

  return {
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    getAll: getAll,
    loadDetails:loadDetails,
    showDetails: showDetails,
  };
})();

// IIFE ends here.

// For Each loop that will run through the Pokemon names, and throw a message related to a Pokemon being bigger than 2 meters.
pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
});
});
