//**   Array of search terms   **//

var searchTerms = ["Futurama", "Rick and Morty", "Garfield", "Duck Tales"];


//**   Variables   **//

var apiKey = "brX9hakQgeVuceuukT4rEEa4B1xHod1Y";
var limit = 10;


//**   Functions   **//

function doSearch(search) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + search + "&limit=" + limit;
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
        .addClass("search-term btn btn-danger")
        .attr("search-term", searchTerms[i]);
        $("#buttons-view").append(button);
    }

}

function showResults(dataObj) {
    // Show the search results
    $("#search-view").empty();
    for ( var i = 0; i < dataObj.length; i++ ){
        var img = $("<img>");
        img
        .attr("src", dataObj[i].images.fixed_width_still.url)
        .attr("alt", dataObj[i].title)
        .attr("data-still" , dataObj[i].images.fixed_width_still.url)
        .attr("data-animate" , dataObj[i].images.fixed_width.url)
        .attr("data-state" , "still")
        .addClass("gif");
        var rating = $("<p>");
        rating.text(dataObj[i].rating);
        var div = $("<div>");
        div
        .append(img)
        .append(rating)
        .addClass("gif-div");
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

    $(document).on("click", ".gif", function() {
        if ( $(this).attr("data-state") === "still"){
            $(this)
            .attr("src", ($(this).attr("data-animate")))
            .attr("data-state", "animate");
        } else {
            $(this)
            .attr("src", ($(this).attr("data-still")))
            .attr("data-state", "still");
        }

    });







});

/**

Ideas to put out there:

Maybe make a side div that stores all the previous searches.  
Make it a general search since there isnt a restriction on search terms
add some colors and stuff


*/