var userInput = $("#userInput");
var feedHList = $("#feedList");


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

                // ADD REST INFO

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

            }

        });
};
artistCards()












// $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=Luke%20Combs&locale=*&size=5",
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });


//   $(document).ready(function(){
//     $('.carousel').carousel();
//   });
