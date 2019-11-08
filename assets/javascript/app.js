$("#submit").on("click", function() {
  event.preventDefault();
  var userZip = $("#userZipCode")
    .val()
    .trim();
  console.log(userZip);
  $("#userZipCode").val("");

  var APIKey = "3bfb74ac63b0d6cb8864df78fc2f93bc";

  // Here we are building the URL we need to query the database
  var queryURL1 =
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
    userZip +
    ",us&units=imperial&appid=" +
    APIKey;

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL1,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      var queryURL = "https://www.boredapi.com/api/activity/";

      $.ajax({
        url: queryURL,
        method: "GET"
      }) // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
          console.log(response.activity);
          var boredStuff = response.activity;
          $("#bored-text").text(boredStuff);
        });
      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response.weather[0].main);
      console.log(response.weather[0].description);
      console.log(response.main.temp);

      var main = response.weather[0].main;
      var description = response.weather[0].description;
      var temp = response.main.temp;

      var settings = {
        async: true,
        crossDomain: true,
        url: "https://thundercomb-poetry-db-v1.p.rapidapi.com/title/" + main,
        method: "GET",
        headers: {
          "x-rapidapi-host": "thundercomb-poetry-db-v1.p.rapidapi.com",
          "x-rapidapi-key": "47c5c7f1fdmsh7c24f8f0bce2756p1d7714jsn95969474903a"
        }
      };

      $.ajax(settings).done(function(response) {
        console.log(response);
        let poemBody = response[0].lines;
        let poemTitle = response[0].lines[0];
        console.log(poemBody);
        console.log(poemTitle);
        $("#book-title").text(poemTitle);
        $("#book-text").text(poemBody);
      });

      var spotifyWeatherPLaylist = "";
      var openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
      switch (description) {
        case "clear sky":
          console.log("It is a clear sky");
          spotifyWeatherPLaylist = "1xY6msLHX1W34EzB0UkkbU";
          openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/sunny.png"
          );

          break;
        case "few clouds":
          console.log("There are a few clouds");
          spotifyWeatherPLaylist = "3HJx0AGRXXydTy04lV2oQS";
          openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/cloudy.png"
          );

          break;
        case "scattered clouds":
          console.log("There are scattered clouds");
          spotifyWeatherPLaylist = "2cZIKLcAmzn0QdaFs3Aozz";
          openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/cloudy.png"
          );

          break;
        case "broken clouds":
          console.log("There are broken clouds");
          spotifyWeatherPLaylist = "2U56ab3wZp6jsItpItXgXJ";
          openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/cloudy.png"
          );

          break;
        case "shower rain":
          console.log("There is shower rain");
          spotifyWeatherPLaylist = "5ZSy5LuSo6UA5v8hrGZtk0";
          openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "rain":
          console.log("There is rain");
          spotifyWeatherPLaylist = "37i9dQZF1DWYxwmBaMqxsl";
          openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "thunderstorm":
          console.log("There is a thunderstorm");
          spotifyWeatherPLaylist = "4iCrYUIaPeRnIe60IpZNlt";
          openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/stormy.png"
          );
          break;
        case "snow":
          console.log("There is snow");
          spotifyWeatherPLaylist = "3lVR8JkKxpnGNHRFdmEveZ";
          openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "mist":
          console.log("There is mist");
          spotifyWeatherPLaylist = "6Em0xPIMIimYOrMxPDGGCc";
          openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/foggy.png"
          );

          break;
        default:
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/sunny.png"
          );
        // code block
      }

      $("#forecast-text").html(temp);

      $("#weather-condition").html(description.toUpperCase());

    });
});
