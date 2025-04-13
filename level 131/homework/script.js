const apiKey = "შეიყვანე_აქ_შენი_API_კოდი";
const lat = 41.7151;
const lon = 44.8271;

async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current,alerts&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayForecast(data.daily.slice(0, 7));
  } catch (err) {
    console.error("შეცდომა ამინდის მიღებისას:", err);
  }
}

function displayForecast(days) {
  const forecastDiv = document.getElementById("weather-forecast");
  forecastDiv.innerHTML = "";

  days.forEach((dayData, index) => {
    const date = new Date(dayData.dt * 1000);
    const dayName = date.toLocaleDateString("ka-GE", { weekday: "long" });

    const temp = Math.round(dayData.temp.day);
    const humidity = dayData.humidity;

    const dayCard = document.createElement("div");
    dayCard.className = "forecast-day";
    dayCard.innerHTML = `
      <h3>${dayName}</h3>
      <p>ტემპერატურა: ${temp}°C</p>
      <p>ტენიანობა: ${humidity}%</p>
    `;

    forecastDiv.appendChild(dayCard);
  });
}

fetchWeather();
