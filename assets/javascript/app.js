//javascript

var pokemonArray = ["pikachu, charmander, abra"];

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
      });
}

function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < pokemonArray.length; i++) {

        var a = $("<button>");
        a.addClass("pokemon");
        a.attr("pokemon-name", pokemonArray[i]);
        a.text(pokemonArray[i]);
        $("#buttons-view").append(a);
    }
}

  $(document).on("click", ".pokemon", displayPokemonInfo);

  renderButtons();
