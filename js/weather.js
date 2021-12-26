const API_KEY = "d9eb6b2cee1316e5bbbd22fd77702adb";

function onGeosuccess(event) {
  const lat = event.coords.latitude;
  const lon = event.coords.longitude;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(weatherURL);
  fetch(weatherURL)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather div span:first-child");
      const city = document.querySelector("#weather div span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  console.log("error");
}

navigator.geolocation.getCurrentPosition(onGeosuccess, onGeoError);
