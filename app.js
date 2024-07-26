//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let inpBox = document.querySelector("input");


const apiKey = "3b87b72209d531003aaa0fd6a7986c1d";

function checkWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
        console.log(data.weather[0].main);
        document.querySelector("#name").innerText = data.name;
        document.querySelector("#temp").innerText = Math.round(data.main.temp) + " °C";
        document.querySelector("#humidity").innerText = data.main.humidity + "%";
        document.querySelector("#speed").innerText = data.wind.speed + " km/h";
        if(data.weather[0].main == "Clear"){
            document.querySelector(".weather-img").src = "clears.png"
        }else if(data.weather[0].main == "Haze"){
            document.querySelector(".weather-img").src = "haze.png"
        }else if(data.weather[0].main == "Rain"){
            document.querySelector(".weather-img").src = "rain.png"
        }else if(data.weather[0].main == "Clouds"){
            document.querySelector(".weather-img").src = "clouds.png"
        }else if(data.weather[0].main == "Strom"){
            document.querySelector(".weather-img").src = "strom.png"
        }


    })


    
}

