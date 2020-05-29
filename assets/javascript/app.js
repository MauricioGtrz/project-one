//javascript

var pokemonHauntedArray = ["misdreavus", "shuppet", "banette", "dusclops"];
var pokemonSnowArray = ["snorunt", "vanillite", "glaceon", "glalie"];
var pokemonFireArray = ["slugma", "rapidash", "torkoal", "Magmortar"];
var pokemonWaterArray = ["magikarp", "staryu", "poliwhirl", "wailord"];

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
        $("#pokeTabHt").html((response.height/10).toFixed(2) + "m");
        $("#pokeTabWt").html((response.weight * 0.1).toFixed(2) + "kg");
      });
}

$(document).on("click", ".pokemonimg", displayPokemonInfo);

// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//   if (!isChrome){
//       $('#iframeAudio').remove()
//   }
//   else {
//       $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
//   }

window.onload=function(){
  document.getElementById("hauntedMusic").play();
}

window.onload=function(){
  document.getElementById("homeMusic").play();
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