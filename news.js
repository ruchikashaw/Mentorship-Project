$.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fa9936e8bc8748b986863899178bcb16",
    success: function (data) {

        for (let i = 0; i < 3; i++) {
            let contain2El = document.querySelector("#contain2");
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
    url: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fa9936e8bc8748b986863899178bcb16",
    success: function (data) {

        for (let i = 0; i < 3; i++) {
            let contain3El = document.querySelector("#contain3");
            contain3El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 12rem;">
                                           
                                            <div class="card-body">
                                                <h5 class="card-title" id="entertainment-title1">
                                                    ${data.articles[i].title.slice(0, 50) + "...."}
                                                </h5>
                                                <p class="card-text" id="entertainment-text1">
                                                    ${data.articles[i].description.slice(0, 80) + "...."}
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
    url: "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=fa9936e8bc8748b986863899178bcb16",
    success: function (data) {

        for (let i = 0; i < 3; i++) {
            let contain4El = document.querySelector("#contain4");
            contain4El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 12rem;">
                                            
                                            <div class="card-body">
                                                <h5 class="card-title" id="nature-title1">
                                                    ${data.articles[i].title.slice(0, 50) + "...."}
                                                </h5>
                                                <p class="card-text" id="nature-text1">
                                                    ${data.articles[i].description.slice(0, 80) + "...."}
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
    url: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=fa9936e8bc8748b986863899178bcb16",
    success: function (data) {

        for (let i = 0; i < 3; i++) {
            let contain5El = document.querySelector("#contain5");
            contain5El.innerHTML += `<div>
                                        <div class="card" id="card1" style="width: 12rem;">
                                            <div class="card-body">
                                                <h5 class="card-title" id="sport-title1">
                                                    ${data.articles[i].title.slice(0, 50) + "...."}
                                                </h5>
                                                <p class="card-text" id="sport-text1">
                                                    ${data.articles[i].description.slice(0, 80) + "...."}
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
