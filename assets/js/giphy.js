//**   Array of search terms   **//

var searchTerms = ["cat", "dog", "Garfield", "Odie"];


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
            console.log(response);


        });
}

function renderButtons () {
    //  Get the stuff from the array and make the buttons
    var button = $("<button>");

}

function showResults () {
    // Show the search results
}




//**   Event Listeners   **//

$(document).ready(function() {

    $("#add-search").on("click", function() {
        event.preventDefault();
        var input = $("#search-input").val().trim();
        $("#search-input").val("");
        doSearch(input);
    });







});

console.log("test");