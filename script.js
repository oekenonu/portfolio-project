let weather = {
    "apikey": "57775d4ad759bdf290656611ff75e543",
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city + "&units=metric&appid="
        + "57775d4ad759bdf290656611ff75e543"
        )

        .then ((response) => response.json())
        .then((data) => this.displayweather(data));
    
    },

    displayweather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp,humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
        
    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value);
    },
};

document
    .querySelector(".search button")
    .addEventListener("click", function () {
    weather.search();
  });
