      $("button").on("click", function() {
      // Grabbing and storing the data-animal property value from the button
      var aName = $(this).attr("actor-name");



      // // Initial array of actors
      // var topics = ["Jared Leto", "Ryan Gosling", "Jason Statham", "Bradley Cooper", "The Rock"];

      // // // displayActors function re-renders the HTML to display the appropriate content
      // function displayActors() {

      //   var actor = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + aName + "&api_key=dc6zaTOxFJmzC&limit=10";

        // Creating an AJAX call for the specific actor button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        })

        .done(function(response) {

      var aResults = response.data;

          for (var i = 0; i < aResults.length; i++) {

            var actorDiv = $("<div>");

          // Creating an element to have the rating displayed
          var r = $("<p>").text("Rating: " + aResults[i].rating);

          // Creating an element to hold the image
          var actorImage = $("<img>");

          actorImage.attr("src", aResults[i].images.fixed_height.url);

          // Appending paragraph and image tag to actorDiv
          actorDiv.append(r);
          actorDiv.append(actorImage);

          $("#actors-view").prepend(actorDiv);
        }
           });
      });


          