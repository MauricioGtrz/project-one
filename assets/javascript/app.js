//javascript

var pokemonHauntedArray = ["Zubat", "gastly", "haunter", "gengar"];
var pokemonSnowArray = ["snorunt", "glalie", "swinub", "walrein"];
var pokemonFireArray = ["slugma", "torkoal", "magmar", "charizard"];
var pokemonWaterArray = ["wailmer", "staryu", "poliwhirl", "gyarados"];

function displayPokemonInfo() {
    var pokemon = $(this).attr("pokemon-name");
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        const pokemon = {
            name: response.name,
            id: response.id,
            image: response.sprites['front_default'],
            type: response.types.map( type => type.type.name).join(", "),
            abilities: response.abilities.map( ability => ability.ability.name).join(", "),
            height: response.height,
            weight: response.weight,
            stats: response.stats.map( stat => stat.stat.name + ' ' + stat.base_stat).join(", ")
        };
        console.log(pokemon);
        
        $("#pokeTabName").html((response.name).substr(0,1).toUpperCase()+(response.name).substr(1));
        $("#pokeTabNum").html(response.id);
        $("#pokeTabType").html(response.type);
        $("#pokeTabHt").html(response.height/10 + "m");
        $("#pokeTabWt").html(response.weight * 0.1 + "kg");
      });
}

$(document).on("click", ".pokemonimg", displayPokemonInfo);

window.onload=function(){
  document.getElementById("hauntedMusic").play();
}


// var queryURLmusic = "https://freesound.org/apiv2/search/text/?query=piano&token=PFapxdeGuM4lkfOpgYO76d94lZkeyT6Ae1mNnKBK"
// ;

// $.ajax({
//   url: queryURLmusic,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });

// window.onload=function(){
//   this.document.getElementById("#homePagemusic");
// }