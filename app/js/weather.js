import {
  setHeader, setCurrentTemp, setCurrentWeather, setAir, setHourly, setDaily,
} from './result.js';

const main = document.querySelector('.main');
const inputfield = document.querySelector('.search_input');
const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.btn');

// error
const errorInfo = document.createElement('div');
errorInfo.classList.add('error');

inputfield.addEventListener('input', () => {
  const input = inputfield.value;
  if (input.length > 50) {
    button.setAttribute('disabled', 'disabled');
    inputfield.classList.add('focus');
  } else {
    button.removeAttribute('disabled');
    inputfield.classList.remove('focus');
  }
});

const dialogBox = () => {
  const dialog = document.createElement('dialog');
  dialog.classList.add('dialog');
  main.append(dialog);
  dialog.innerHTML = `
    <h3>You've not provided any input</h3>
    <p>Please type in a location to get weather report</p>
    <button class="close">Close</button>
  `;

  const close = document.querySelector('.close');
  const dialoog = document.querySelector('.dialog');
  // activate
  dialoog.showModal();
  // close
  close.addEventListener('click', () => {
    dialoog.close();
    dialoog.remove();
    inputfield.focus();
  });
};

const getData = async (coord, output) => {
  // loader
  const load = document.querySelector('.load');
  const loader = document.querySelector('.loader');
  main.style.display = 'none';
  wrapper.innerHTML = '';
  load.style.display = 'block';
  loader.style.display = 'block';

  // current weather search params
  const key = 'vK6swCrrskXqnuZGn4NT7q7Aj1YuZINH';
  const base = 'https://api.climacell.co/v3/weather/realtime?';
  const fields = ['precipitation', 'precipitation_type', 'temp', 'feels_like', 'baro_pressure', 'humidity', 'dewpoint', 'visibility', 'moon_phase', 'cloud_cover', 'wind_direction', 'wind_speed', 'weather_code'];
  const currentUrl = `${base}lat=${coord.lat}&lon=${coord.lng}&fields=${fields}&apikey=${key}`;

  // air quality search params
  const airFields = ['pm25', 'pm10', 'o3', 'no2', 'co', 'so2', 'epa_aqi', 'epa_health_concern', 'epa_primary_pollutant'];
  const airUrl = `${base}lat=${coord.lat}&lon=${coord.lng}&fields=${airFields}&apikey=${key}`;

  // hourly weather search params
  const hourlyFields = ['precipitation_probability', 'temp', 'feels_like', 'baro_pressure', 'humidity', 'wind_speed', 'wind_direction', 'weather_code'];
  const startTime = new Date();
  const endTime = new Date(startTime);
  endTime.setHours(endTime.getHours() + 24);
  const hourlyUrl = `https://api.climacell.co/v3/weather/forecast/hourly?lat=${coord.lat}&lon=${coord.lng}&start_time=now&end_time=${endTime.toISOString()}&fields=${hourlyFields}&apikey=${key}`;

  // daily weather search params
  const dailyFields = [...hourlyFields, 'sunrise', 'sunset'];
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 10);
  const dailyUrl = `https://api.climacell.co/v3/weather/forecast/daily?lat=${coord.lat}&lon=${coord.lng}&start_time=now&end_time=${endDate.toISOString()}&fields=${dailyFields}&apikey=${key}`;

  try {
    // fetch data
    const [currentResponse, airResponse, hourlyResponse, dailyResponse] = await Promise.all([
      fetch(currentUrl), fetch(airUrl), fetch(hourlyUrl), fetch(dailyUrl),
    ]);

    const [currentData, airData, hourlyData, dailyData] = await Promise.all([
      currentResponse.json(), airResponse.json(), hourlyResponse.json(), dailyResponse.json(),
    ]);

    setCurrentTemp(currentData, output);
    setHourly(hourlyData);
    setCurrentWeather(currentData, output);
    setAir(airData);
    setDaily(dailyData);
    console.log(currentData);

    load.style.display = 'none';
    loader.style.display = 'none';
    main.style.display = 'block';
  } catch (error) {
    errorInfo.innerHTML = `<h3>Oops!</h3>
    <p>Fail to Fetch</p>
    <p>Please try again</p>`;
    wrapper.append(errorInfo);
  }
};

const getCoord = async () => {
  const input = inputfield.value.trim();

  // const input = inputfield.value.trim();
  const encodedInput = encodeURI(input);
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodedInput}&key=173f9f1a42c64005be22065050aa936e&pretty=1&limit=1`;

  try {
    if (!input) {
      dialogBox();
    } else {
      const fetchCoord = fetch(url);
      const response = await fetchCoord;
      const data = await response.json();

      // coordinates
      const coord = data.results[0].geometry;
      const output = data.results[0].components;

      setHeader(); // set header
      getData(coord, output);
    }
  } catch (err) {
    wrapper.innerHTML = '';
    errorInfo.innerHTML = `<h2>${input} Not Found!</h2>
    <p>Please Enter a valid city name</p>`;
    wrapper.append(errorInfo);
  }
};

button.addEventListener('click', getCoord);
