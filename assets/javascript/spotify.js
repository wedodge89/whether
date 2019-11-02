let weatherDescription = "broken clouds";

let spotifyWeatherPLaylist = "";
var openPlaylist = `https://open.spotify.com/embed/playlist/${spotifyWeatherPLaylist}`;
switch (weatherDescription) {
  case "clear sky":
    console.log("It is a clear sky");
    spotifyWeatherPLaylist = "1xY6msLHX1W34EzB0UkkbU";

    break;
  case "few clouds":
    console.log("There are a few clouds");
    spotifyWeatherPLaylist = "3HJx0AGRXXydTy04lV2oQS";

    break;
  case "scattered clouds":
    console.log("There are scattered clouds");
    spotifyWeatherPLaylist = "2cZIKLcAmzn0QdaFs3Aozz";

    break;
  case "broken clouds":
    console.log("There are broken clouds");
    spotifyWeatherPLaylist = "2U56ab3wZp6jsItpItXgXJ";

    break;
  case "shower rain":
    console.log("There is shower rain");
    spotifyWeatherPLaylist = "5ZSy5LuSo6UA5v8hrGZtk0";

    break;
  case "rain":
    console.log("There is rain");
    spotifyWeatherPLaylist = "37i9dQZF1DWYxwmBaMqxsl";

    break;
  case "thunderstorm":
    console.log("There is a thunderstorm");
    spotifyWeatherPLaylist = "4iCrYUIaPeRnIe60IpZNlt";

    break;
  case "snow":
    console.log("There is snow");
    spotifyWeatherPLaylist = "3lVR8JkKxpnGNHRFdmEveZ";

    break;
  case "mist":
    console.log("There is mist");
    spotifyWeatherPLaylist = "6Em0xPIMIimYOrMxPDGGCc";

    break;
  default:
  // code block
}
//clear sky
//few clouds
//scattered clouds
//broken clouds
//shower rain
//rain
//thunder storm
//snow
//mist
