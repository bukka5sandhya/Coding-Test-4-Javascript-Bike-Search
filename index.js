let searchResultsEle = document.getElementById("searchResults");
let searchInputEle = document.getElementById("searchInput");
let breakEle = document.createElement("br");
let url = "https://apis.ccbp.in/city-bikes?bike_name=";

function createAppend(bikes) {
    for (let eachBike of bikes) {
        console.log(eachBike);
        let bikeNameEle = document.createElement("p");
        let cityNameEle = document.createElement("p");
        bikeNameEle.textContent = "BikeName: " + eachBike.name;
        cityNameEle.textContent = "City: " + eachBike.city;
        searchResultsEle.appendChild(bikeNameEle);
        searchResultsEle.appendChild(cityNameEle);
    }
}


searchInputEle.addEventListener("keydown", function(event) {
    let searchVal = event.target.value;
    if (event.key === "Enter") {
        url = "https://apis.ccbp.in/city-bikes?bike_name=" + searchVal;

        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let bikes = jsonData;
                console.log(bikes);
                createAppend(bikes);
            });
    }
});


function onPageLoad() {
    searchResultsEle.textContent = "";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let bikes = jsonData;
            createAppend(bikes);
        });

}
onPageLoad();