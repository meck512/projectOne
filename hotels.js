fetch("https://hotels4.p.rapidapi.com/locations/search?query=Cleveland&locale=en_US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b398f1d234msh8b47f7a04d87ec2p1a9124jsn9fbb106a6581",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
})
.then(function(response) {
	return response.json();
}).then(function(data){
var hotels= data.suggestions[1].entities
// var concert = data._embedded.events[i]
//                 console.log(concert)
                // linking the api's and pulling the city name for the Hotel API
             
                // var city = concert._embedded.venues[0].city.name

})