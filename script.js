const apiKey = "Your OpenWeatherAPI"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const btn = document.querySelector("button");
const inputText = document.querySelector("input");
const weatherIcon = document.querySelector(".weather-icon");
btn.addEventListener("click", () => {
  checkWaether();
});

inputText.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});

async function checkWaether() {
  try {
    document.querySelector(".error").style.display = "none";
    const inputValue = inputText.value;
    const response = await fetch(
      apiUrl + `&q=${inputValue}` + `&appid=${apiKey}`
    );
    let data = await response.json();

    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°C";
    console.log(data.weather[0].main);
    pictureWeather(data.weather[0].main);
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".place").innerText = data.name;
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";

    document.querySelector(".weather").style.display = "block";
  } catch {
    document.querySelector(".error").style.display = "block";
  }
}

function pictureWeather(weatherType) {
  switch (weatherType) {
    case "Clouds": {
      weatherIcon.src = "images/clouds.png";
      break;
    }
    case "Clear": {
      weatherIcon.src = "images/clear.png";
      break;
    }
    case "Rain": {
      weatherIcon.src = "images/rain.png";
      break;
    }
    case "Drizzle": {
      weatherIcon.src = "images/drizzle.png";
      break;
    }
    case "Mist": {
      weatherIcon.src = "images/mist.png";
      break;
    }
  }
}
