

// My initial Pokemons

  let pokemonList = [
  {name: 'Snorlax', height: 2.1, types: ['normal', 'water'] },
  {name:'Mewtwo', height: 1.9, types: ['psychic', 'flying'] },
  {name:'Shiftry', height: 1.3, types: ['dark', 'grass'] }
];

// For loop that will run through the Pokemon names, and throw a message related to a Pokemon being bigger than 2 meters.

for (let i = 0; i < pokemonList.length; i++) {
   document.write('<br>' + pokemonList[i].name + (' , height: ') + pokemonList[i].height);
   if (pokemonList[i].height >= 2) {
     document.write(' - Wow, that\'s big!');
   }
 }
