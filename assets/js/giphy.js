//**   Array of search terms   **//

var searchTerms = ["Futurama", "Rick & Morty", "Garfield", "Duck Tales"];


//**   Variables   **//

var apiKey = "brX9hakQgeVuceuukT4rEEa4B1xHod1Y";




//**   Functions   **//

function doSearch(search) {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey + "&tag=" + search;
    //  Ajax Call
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            showResults(response);

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

function showResults(responseObject) {
    // Show the search results
    var resObj = JSON.stringify(responseObject);
    console.log(resObj);
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