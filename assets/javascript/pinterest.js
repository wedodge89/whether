
subject = "cloudy"

// subject = "weather"+ main
var queryURL="https://openlibrary.org/subjects/" + subject +".json?details=true"
$.ajax({
    url:queryURL,
    method: "GET"
})

.then(function(response)
{
    console.log(queryURL)
    console.log(response.works[1].title);
})

console.log(subject)
console.log(response.works[1]);
