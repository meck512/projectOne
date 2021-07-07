var userInput = $("#userInput");
var feedHList = $("#feedList");

// Hotels API
function getHotels() {




    return fetch("https://hotels4.p.rapidapi.com/locations/search?query=Cleveland&locale=en_US", {
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

}

function artistCards() {
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=Luke%20Combs&locale=*&size=5")
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            for (i = 0; i < data._embedded.events.length; i++) {
                var concert = data._embedded.events[i]
                console.log(concert)
                // var ticketPrice = concert.priceRanges[0].min
                var artistImg = concert.images[0].url
                var date = concert.dates.start.localDate
                var venue = concert._embedded.venues[0].name
                var city = concert._embedded.venues[0].city.name
                getHotels().then(function (hotels) {
                console.log (hotels)
                    console.log(venue, city, artistImg, date)
                    var card = document.createElement("div")
                    card.innerHTML = `<div class="card-content white-text">
    <span class="card-title">Concerts Coming Up</span>
    <p>Date:</p>
    <p>Show Time:</p>
    <p>Venue:</p>
    <p>City:</p>
    <p>Hotel:</p>
    </div>
    <div class="card-action">
    <a href="#">Get Tickets</a>
    <a href="#">Book Flight</a>
    </div>`

                })

                // ADD REST INFO



            }

        });
};
artistCards()

