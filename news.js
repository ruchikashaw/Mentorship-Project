$.ajax({
    url: "http://api.mediastack.com/v1/news?access_key=c1d743069e18b5a83d22b64c96cbb6ef&countries=us&categories=technology",
    success: function (data) {

        for (let i = 0; i < 3; i++) {
            let contain2El = document.querySelector("#contain3");
            contain2El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 12rem;">
                                            <div class="card-body">
                                                <h5 class="card-title" id="technology-title1">
                                                    ${data.articles[i].title.slice(0, 50) + "...."}
                                                </h5>
                                                <p class="card-text" id="technology-text1">
                                                    ${data.articles[i].description.slice(0, 80) + "...."}
                                                </p>
                                                <a href="${data.articles[i].url}" class="more-detail"
                                                 id="technology-more-detail1">More Details</a>
                                            </div>
                                        </div>
                                    </div>`
        }
    },

    error: function (error) {
        alert(error.responseJSON.message);
    }

});

$.ajax({
    url: "http://api.mediastack.com/v1/news?access_key=c1d743069e18b5a83d22b64c96cbb6ef&countries=us&categories=business",
    success: function (data) {

        for (let i = 0; i < 3; i++) {
            let contain3El = document.querySelector("#contain4");
            contain3El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 12rem;">
                                           
                                            <div class="card-body">
                                                <h5 class="card-title" id="entertainment-title1">
                                                    ${data.articles[i].title.slice(0, 30) + "...."}
                                                </h5>
                                                <p class="card-text" id="entertainment-text1">
                                                    ${data.articles[i].description.slice(0, 40) + "...."}
                                                </p>
                                                <a href="${data.articles[i].url}" class="more-detail"
                                                 id="entertainment-more-detail1">More Details</a>
                                            </div>
                                        </div>
                                    </div>`
        }

    },

    error: function (error) {
        alert(error.responseJSON.message);
    }
});

$.ajax({
    url: "http://api.mediastack.com/v1/news?access_key=c1d743069e18b5a83d22b64c96cbb6ef&countries=us&categories=sports",
    success: function (data) {

        for (let i = 0; i < 3; i++) {
            let contain4El = document.querySelector("#contain5");
            contain4El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 12rem;">
                                            
                                            <div class="card-body">
                                                <h5 class="card-title" id="nature-title1">
                                                    ${data.articles[i].title.slice(0, 30) + "...."}
                                                </h5>
                                                <p class="card-text" id="nature-text1">
                                                    ${data.articles[i].description.slice(0, 40) + "...."}
                                                </p>
                                                <a href="${data.articles[i].url}" class="more-detail"
                                                 id="nature-more-detail1">More Details</a>
                                            </div>
                                        </div>
                                    </div>`
        }

    },

    error: function (error) {
        alert(error.responseJSON.message);
    }
});

$.ajax({
    url: "http://api.mediastack.com/v1/news?access_key=c1d743069e18b5a83d22b64c96cbb6ef&countries=us&categories=science",
    success: function (data) {

        for (let i = 0; i < 3; i++) {
            let contain5El = document.querySelector("#contain5");
            contain5El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 12rem;">
                                            <div class="card-body">
                                                <h5 class="card-title" id="sport-title1">
                                                    ${data.articles[i].title.slice(0, 30) + "...."}
                                                </h5>
                                                <p class="card-text" id="sport-text1">
                                                    ${data.articles[i].description.slice(0, 40) + "...."}
                                                </p>
                                                <a href="${data.articles[i].url}" class="more-detail"
                                                 id="sport-more-detail1">More Details</a>
                                            </div>
                                        </div>
                                    </div>`
        }

    },

    error: function (error) {
        alert(error.responseJSON.message);
    }
});
