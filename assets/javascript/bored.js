var queryURL = "http://www.boredapi.com/api/activity/";

$.ajax({
  url: queryURL,
  method: "GET"
}) // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
    console.log(response.activity);
  });
