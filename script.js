async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "26bd7349511348de02a9c4b9aee06478";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    console.log(data);

    if (data.cod != 200) {
      document.getElementById("weatherResult").innerHTML =
        "City not found!";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "Something went wrong!";
  }
}