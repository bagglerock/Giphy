//**   Array of search terms   **//

var searchTerms = ["Futurama", "Rick & Morty", "Garfield", "Duck Tales"];


//**   Variables   **//

var apiKey = "brX9hakQgeVuceuukT4rEEa4B1xHod1Y";
var limit = 10;


//**   Functions   **//

function doSearch(search) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + search + "&limit=10";
    //  Ajax Call
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
            var data = response.data;
            showResults(data);

        });
}

function renderButtons () {
    //  Get the stuff from the array and make the buttons
    $("#buttons-view").empty();
    for ( var i = 0; i < searchTerms.length; i++ ){
        var button = $("<button>");
        button
        .text(searchTerms[i])
        .addClass("search-term")
        .attr("search-term", searchTerms[i]);
        $("#buttons-view").append(button);
    }

}

function showResults(dataObj) {
    // Show the search results
    for ( var i = 0; i < dataObj.length; i++ ){
        var img = $("<img>");
        img.attr("src", dataObj[i].images.fixed_width_small.url)
        var div = $("<div>");
        div.append(img);
        $("#search-view").append(div);
    }

}


renderButtons();

//**   Event Listeners   **//

$(document).ready(function() {

    $("#add-search").on("click", function() {
        event.preventDefault();
        var input = $("#search-input").val().trim();
        $("#search-input").val("");
        searchTerms.push(input);
        renderButtons();
    });

    $(document).on("click", ".search-term", function() {
        var searchTerm = $(this).attr("search-term");
        doSearch(searchTerm);

    });







});