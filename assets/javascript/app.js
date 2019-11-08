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
      var openPlaylist;

      switch (description) {
        case "clear sky":
          console.log("It is a clear sky");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/1xY6msLHX1W34EzB0UkkbU";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/sunny.png"
          );

          break;
        case "few clouds":
          console.log("There are a few clouds");
          openPlaylist =
            "https://open.spotify.com/embed/album/2U56ab3wZp6jsItpItXgXJ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/cloudy.png"
          );

          break;
        case "overcast clouds":
          console.log("There are a few clouds");
          openPlaylist =
            "https://open.spotify.com/embed/album/37i9dQZF1DWTEbYi1zYy0Z";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/cloudy.png"
          );

          break;
        case "scattered clouds":
          console.log("There are scattered clouds");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/2cZIKLcAmzn0QdaFs3Aozz";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/cloudy.png"
          );

          break;
        case "broken clouds":
          console.log("There are broken clouds");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3SdH16MN2CvucZeur3fkDN";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/cloudy.png"
          );

          break;
        case "shower rain":
          console.log("There is shower rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/5ZSy5LuSo6UA5v8hrGZtk0";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

        case "light rain":
          console.log("There is shower rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/37i9dQZF1DXbvABJXBIyiY";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "rain":
          console.log("There is rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;

        case "heavy intensity rain":
          console.log("There is rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "moderate rain":
          console.log("There is rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "very heavy rain":
          console.log("There is rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "extreme rain":
          console.log("There is rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "freezing rain":
          console.log("There is rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/5wfRF1bOQJF526Vs1MOApi";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "light intensity shower rain":
          console.log("There is rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "	heavy intensity shower rain":
          console.log("There is rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWZ4eoHSGpAXu";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "ragged shower rain":
          console.log("There is rain");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/rainy.png"
          );

          break;
        case "thunderstorm":
          console.log("There is a thunderstorm");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/4iCrYUIaPeRnIe60IpZNlt";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/stormy.png"
          );
          break;
        case "snow":
          console.log("There is snow");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3lVR8JkKxpnGNHRFdmEveZ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "light snow":
          console.log("There is snow");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3lVR8JkKxpnGNHRFdmEveZ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "sleet":
          console.log("There is snow");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3lVR8JkKxpnGNHRFdmEveZ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "shower sleet":
          console.log("There is snow");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3lVR8JkKxpnGNHRFdmEveZ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "light shower sleet":
          console.log("There is snow");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3lVR8JkKxpnGNHRFdmEveZ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "light rain and snow":
          console.log("There is snow");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3lVR8JkKxpnGNHRFdmEveZ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "rain and snow":
          console.log("There is snow");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3lVR8JkKxpnGNHRFdmEveZ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "ligth shower snow":
          console.log("There is snow");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3lVR8JkKxpnGNHRFdmEveZ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "heavy snow":
          console.log("There is snow");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/3lVR8JkKxpnGNHRFdmEveZ";
          $("#spotPlayer").attr("src", openPlaylist);
          $("#weather-icon").attr(
            "src",
            "assets/images/weather-icons/snowy.png"
          );

          break;
        case "mist":
          console.log("There is mist");
          openPlaylist =
            "https://open.spotify.com/embed/playlist/6Em0xPIMIimYOrMxPDGGCc";
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

      $("#weather-condition").html(description);
    });
});
