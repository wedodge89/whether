//NOT FUNCTIONAL YET

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://gamedatabasestefan-skliarovv1.p.rapidapi.com/getCharacters",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "GameDatabasestefan-skliarovV1.p.rapidapi.com",
		"x-rapidapi-key": "30ab1af769mshe40bd3d34b7ff97p1d14e9jsnae7b9b819ced",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {
        "requestUrl": "https://api-v3.igdb.com/games/halo",
		"userKey": "da3fd3855b299996e7b79878553d706e"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});