var userInput = document.getElementById("search")
var artistSearchBtn = document.getElementById("artistSearch")

// Carousel that's really a cool looking decoration
$(document).ready(function () {
    $('.carousel').carousel();
});

artistSearchBtn.addEventListener("click", function (event) {
    event.preventDefault()
    artistCards()
});

// Hotels API
function getHotels(cityName) {
    return fetch("https://hotels4.p.rapidapi.com/locations/search?query=" + cityName + "&locale=en_US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "Uof6kotOmQmshsiRYMl9nBEZRhwqp1XS6c3jsnLIb63ZJyELWK",
            "x-rapidapi-host": "hotels4.p.rapidapi.com"
        }
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            var hotels = data.suggestions[1].entities
            return hotels

        })

};
// Ticketmaster API and Artist Cards
function artistCards() {
    document.getElementById("cardBox").innerHTML = "";
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=" + userInput.value.trim() + "&locale=*&size=5")
        .then(function (response) {
            return response.json()
        }).then(function (data) {


            console.log(data)
            for (i = 0; i < data._embedded.events.length; i++) {
                var concert = data._embedded.events[i]
                console.log(concert)
                let artistImg = concert.images[0].url
                let date = concert.dates.start.localDate
                let venue = concert._embedded.venues[0].name
                let city = concert._embedded.venues[0].city.name
                let address = concert._embedded.venues[0].address.line1
                let state = concert._embedded.venues[0].state.name
                getHotels(city).then(function (hotels) {
                    console.log(hotels)
                    console.log(venue, city, artistImg, date)
                    var suggestion = hotels[0].name
                    var card = document.createElement("div")
                    let ticketUrl = concert.url
                    card.classList = "card black center-align"
                    card.innerHTML = `<div class="card-content white-text">
    <span class="card-title">`+ city + `, ` + state + `</span>
    <p>`+ date + `</p>
    <p>`+ venue + `</p>
    <p>`+ address + `</p>
    <p>Need a Hotel?  `+ suggestion + `</>
    </div>
    <div class="card-action">
    <a href="`+ ticketUrl + `">Get Tickets</a>
    </div>`
                    document.getElementById("cardBox").appendChild(card)
                })
            }
        });
};



