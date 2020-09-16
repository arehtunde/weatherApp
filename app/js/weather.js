import {
  render, setCurrentTemp, setCurrentWeather, setHourly, setDaily, setAir,
} from './result.js';

const main = document.querySelector('.main');
const errorInfo = document.createElement('div');
main.append(errorInfo);

const getCoord = async () => {
  // geocode query parameters
  const inputfield = document.querySelector('.search_input');
  const input = inputfield.value.trim();
  const encodedInput = encodeURI(input);
  const coordApi = 'https://api.opencagedata.com/geocode/v1/json?';
  const coordKey = '173f9f1a42c64005be22065050aa936e';
  const coordParam = 'pretty=1&limit=1';
  const coordUrl = `${coordApi}q=${encodedInput}&key=${coordKey}&${coordParam}`;

  try {
    // loader
    const loader = document.querySelector('.loader');
    const load = document.querySelector('.load');
    render();
    main.style.display = 'none';
    load.style.display = 'block';
    loader.style.display = 'block';

    const fetchCoord = fetch(coordUrl);
    const response = await fetchCoord;
    const data = await response.json();

    // coordinates
    const coord = data.results[0].geometry;
    const output = data.results[0].components;

    // current weather query parameters
    const key = 'vK6swCrrskXqnuZGn4NT7q7Aj1YuZINH';
    const currentWeather = 'https://api.climacell.co/v3/weather/realtime?';
    const fields = ['precipitation', 'precipitation_type', 'temp', 'feels_like', 'baro_pressure', 'humidity', 'dewpoint', 'visibility', 'moon_phase', 'cloud_cover', 'wind_direction', 'wind_speed', 'weather_code'];
    const currentWeatherUrl = `${currentWeather}lat=${coord.lat}&lon=${coord.lng}&fields=${fields}&apikey=${key}`;

    // air quality query parameters
    const airFields = ['pm25', 'pm10', 'o3', 'no2', 'co', 'so2', 'epa_aqi', 'epa_health_concern', 'epa_primary_pollutant'];
    const airUrl = `${currentWeather}lat=${coord.lat}&lon=${coord.lng}&fields=${airFields}&apikey=${key}`;

    // hourly weather query parameter
    const hourlyWeather = 'https://api.climacell.co/v3/weather/forecast/hourly?';
    const hourlyFields = ['precipitation_probability', 'temp', 'feels_like', 'baro_pressure', 'humidity', 'wind_speed', 'wind_direction', 'weather_code'];
    const startTime = new Date();
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 24);
    const hourlyWeatherUrl = `${hourlyWeather}lat=${coord.lat}&lon=${coord.lng}&start_time=now&end_time=${endTime.toISOString()}&fields=${hourlyFields}&apikey=${key}`;

    // daily weather query parameters
    const dailyWeather = 'https://api.climacell.co/v3/weather/forecast/daily?';
    const dailyFields = ['precipitation_probability', 'temp', 'feels_like', 'baro_pressure', 'humidity', 'wind_speed', 'wind_direction', 'sunrise', 'sunset', 'weather_code'];
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 10);
    const dailyWeatherUrl = `${dailyWeather}lat=${coord.lat}&lon=${coord.lng}&start_time=now&end_time=${endDate.toISOString()}&fields=${dailyFields}&apikey=${key}`;

    const [currentResponse, airResponse, hourlyResponse, dailyResponse] = await Promise.all([
      fetch(currentWeatherUrl),
      fetch(airUrl),
      fetch(hourlyWeatherUrl),
      fetch(dailyWeatherUrl),
    ]);

    const [currentData, airData, hourlyData, dailyData] = await Promise.all([
      currentResponse.json(), airResponse.json(), hourlyResponse.json(), dailyResponse.json(),
    ]);
    // setup
    load.style.display = 'none';
    loader.style.display = 'none';
    main.style.display = 'block';
    // render();
    setCurrentTemp(currentData, output);
    setCurrentWeather(currentData, output);
    setAir(airData);
    setHourly(hourlyData);
    setDaily(dailyData);
  } catch (error) {
    errorInfo.innerHTML = `<h2>${input} Not Found!</h2>
    <p>Please Enter a valid city name</p>`;
  }
};

const button = document.querySelector('.btn');
button.addEventListener('click', getCoord);
