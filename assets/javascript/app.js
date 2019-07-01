var gifButtons = [];
var gifIndex = 0;

function renderButtons() {
  //for (var i = 0; i < gifButtons.length; i++) {
  $("#gifs-view").append($("<button></button>").addClass("btn btn-secondary goBack").attr("gif-name", gifButtons[gifIndex]).text(gifButtons[gifIndex]));
  $("#gifs-view").append(" ");
  //}
}

$("#find-gif").on("click", function (event) {
  event.preventDefault();
  $("#gifDisplay").html('');
  //value of gif to search
  var gif = $("#gif-input").val();

  var apiKey = "NQXyMe49RtV5wDutnZ2mzVZCxB25vLTw";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      var results = response.data;
      console.log(results);
      console.log(results.length);
      for (var i = 0; i < 10/*results.length*/; i++) {
        var gifDiv = $("<div>");
        noResult();
        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var newGif = $("<img>");
        newGif.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(newGif);
        gifDiv.prepend(p);

        $("#gifDisplay").prepend(gifDiv);
      }

      if (results.length > 0) {
        $("#noResult").text('');
        gifButtons.push(gif);
        renderButtons();
        gifIndex++;
      }
    });
  console.log(gifButtons);
});

function noResult() {
  $("#noResult").text("Search Result Could Not Be Found. Try Again.");
}


$("#gifs-view").on("click", 'button',function (event) {
  $("#gifDisplay").html('');

  var name = $(this).attr("gif-name");
  var apiKey = "NQXyMe49RtV5wDutnZ2mzVZCxB25vLTw";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      var results = response.data;
      console.log(results);
      console.log(results.length);
      for (var i = 0; i < 10/*results.length*/; i++) {
        var gifDiv = $("<div>");
        noResult();
        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var newGif = $("<img>");
        newGif.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(newGif);
        gifDiv.prepend(p);

        $("#gifDisplay").prepend(gifDiv);
      }
    });
    
})




//$(document).on("click", ".goBack", savedGif);
//renderButtons();