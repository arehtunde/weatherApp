import { render, errorInfo } from './result.js';

const getCoord = async () => {
  render();
  // geocode query parameters
  const inputfield = document.querySelector('.search_input');
  const input = inputfield.value.trim();
  const encodedInput = encodeURI(input);
  const coordApi = 'https://api.opencagedata.com/geocode/v1/json?';
  const coordKey = '173f9f1a42c64005be22065050aa936e';
  const coordParam = 'pretty=1&limit=1';
  const coordUrl = `${coordApi}q=${encodedInput}&key=${coordKey}&${coordParam}`;

  try {
    const fetchCoord = fetch(coordUrl);
    const response = await fetchCoord;
    const data = await response.json();

    // coordinates
    const coord = data.results[0].geometry;

    // current weather query parameters
    const key = 'vK6swCrrskXqnuZGn4NT7q7Aj1YuZINH';
    const currentWeather = 'https://api.climacell.co/v3/weather/realtime?';
    const fields = ['precipitation', 'precipitation_type', 'temp', 'feels_like', 'baro_pressure', 'humidity', 'dewpoint', 'visibility', 'wind_direction', 'wind_speed', 'weather_code'];
    const currentWeatherUrl = `${currentWeather}lat=${coord.lat}&lon=${coord.lng}&fields=${fields}&apikey=${key}`;

    // hourly weather query parameter
    const hourlyWeather = 'https://api.climacell.co/v3/weather/forecast/hourly?';
    const hourlyFields = [...fields, 'precipitation_probability'];
    const startTime = new Date();
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 6);
    const hourlyWeatherUrl = `${hourlyWeather}lat=${coord.lat}&lon=${coord.lng}&start_time=now&end_time=${endTime.toISOString()}&fields=${hourlyFields}&apikey=${key}`;

    // daily weather query parameters
    const dailyWeather = 'https://api.climacell.co/v3/weather/forecast/daily?';
    const removeItem = 'precipitation_type';
    const dailyFields = fields.filter((item) => item !== removeItem);
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
    const dailyWeatherUrl = `${dailyWeather}lat=${coord.lat}&lon=${coord.lng}&start_time=now&end_time=${endDate.toISOString()}&fields=${dailyFields}&apikey=${key}`;

    const [currentResponse, hourlyResponse, dailyResponse] = await Promise.all([
      fetch(currentWeatherUrl),
      fetch(hourlyWeatherUrl),
      fetch(dailyWeatherUrl),
    ]);

    const [currentData, hourlyData, dailyData] = await Promise.all([
      currentResponse.json(), hourlyResponse.json(), dailyResponse.json(),
    ]);
    console.log(currentData);
    console.log(hourlyData);
    console.log(dailyData);
  } catch (error) {
    errorInfo.innerHTML = `<h2>${input} Not Found!</h2>
    <p>Please Enter a valid city name</p>`;
  }
};

const button = document.querySelector('.btn');
button.addEventListener('click', render);
