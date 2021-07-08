var userInput = document.getElementById("search")
var artistSearchBtn = document.getElementById("artistSearch")



artistSearchBtn.addEventListener("click",function(event) {
    event.preventDefault()
    artistCards()
});


// Hotels API
function getHotels(cityName) {
    return fetch("https://hotels4.p.rapidapi.com/locations/search?query="+cityName+"&locale=en_US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b398f1d234msh8b47f7a04d87ec2p1a9124jsn9fbb106a6581",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            var hotels = data.suggestions[1].entities
            return hotels
            // var concert = data._embedded.events[i]
            //                 console.log(concert)
            // linking the api's and pulling the city name for the Hotel API
            // var city = concert._embedded.venues[0].city.name
        })

};


function artistCards() {
    document.getElementById("cardBox").innerHTML="";
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword="+userInput.value.trim()+"&locale=*&size=5")
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            for (i = 0; i < data._embedded.events.length; i++) {
                var concert = data._embedded.events[i]
                console.log(concert)
                // var ticketPrice = concert.priceRanges[0].min
                let artistImg = concert.images[0].url
                let date = concert.dates.start.localDate
                let venue = concert._embedded.venues[0].name
                let city = concert._embedded.venues[0].city.name
                getHotels(city).then(function (hotels) {
                    console.log(hotels)
                    console.log(venue, city, artistImg, date)
                    var suggestion = hotels[0].name
                    var card = document.createElement("div")
                    card.classList="card black center-align"
                    card.innerHTML = `<div class="card-content white-text">
    <span class="card-title">`+city+`</span>
    <p>Date: `+date+`</p>
    <p>Venue: `+venue+`</p>
    <p>City: `+city+`</p>
    <p>Hotel: `+suggestion+`</p>
    </div>
    <div class="card-action">
    <a href="#">Get Tickets</a>
    </div>`
                    document.getElementById("cardBox").appendChild(card)
                })
            }
        });
};
// Stringify/parse for local storage

$(document).ready(function(){
    $('.carousel').carousel();
  });

