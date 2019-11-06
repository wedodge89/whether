


$("#submit").on("click", function(){
    event.preventDefault();
   var userZip = $("#userZipCode").val().trim();
   console.log(userZip);
   $("#userZipCode").val("");

 var APIKey = "3bfb74ac63b0d6cb8864df78fc2f93bc";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip="+ userZip + ",us&units=imperial&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
url: queryURL,
method: "GET"
})
// We store all of the retrieved data inside of an object called "response"
.then(function(response) {

// Log the queryURL
console.log(queryURL);

// Log the resulting object
// console.log(response.weather[0].main);
// console.log(response.weather[0].description);
// console.log(response.main.temp);


var main = response.weather[0].main;
var description= response.weather[0].description;
var temp = response.main.temp;

$("#weatherinfo").html("<h3> Temp " + temp + description + main + "<h3> ");



   
});




});





