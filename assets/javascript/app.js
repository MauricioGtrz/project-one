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


// Home theme music
window.onload=function(){
  document.getElementById("homeMusic").play();
}

//Zone theme music
window.onload=function(){
  document.getElementById("zoneMusic").play();
}

//Haunted theme music
window.onload=function(){
  document.getElementById("hauntedMusic").play();
}

window.onload=function(){
  document.getElementById("hauntedEffect").play();
}

//Snow theme music
window.onload=function(){
  document.getElementById("snowMusic").play();
}

window.onload=function(){
  document.getElementById("snowEffect").play();
}

//Fire theme music
window.onload=function(){
  document.getElementById("fireMusic").play();
}

//Water theme music
window.onload=function(){
  document.getElementById("waterMusic").play();
}