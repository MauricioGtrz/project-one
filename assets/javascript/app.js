//javascript

var pokemon = "pikachu"
var queryURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  });

  //sidebar toggle
  $(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});