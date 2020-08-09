let currentSpeed
let currentTemp
let currentHumidity
let currentName
let weatherInfo

document.getElementById('searchBtn').addEventListener('click', (event) => {
  event.preventDefault()
  let city = document.getElementById('cityInput').value
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=93174ff9c44d9901c3d587f4f99a19fc`

  searchByCity(city, urlWeather)

})

const searchByCity = (city, urlWeather) => {
  fetch(urlWeather)
    .then(r => r.json())
    .then(response => {
      let { coord, main, wind, name } = response
      let { temp, humidity } = main
      let { speed } = wind
      currentSpeed = speed
      currentTemp = temp
      currentHumidity = humidity
      currentName = name

      weatherByCity(coord.lat, coord.lon)

    }
    )}

const weatherByCity = (lat, long) => {
  let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=93174ff9c44d9901c3d587f4f99a19fc`
  fetch(forecastURL)
    .then(r => r.json())
    .then(response => {

      if (response !== undefined || response != null) {
        weatherInfo = response
        renderForecast()

      }
    })

}

const renderForecast (){
  
};
