// create and append wrapper to main
const main = document.querySelector('.main');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
main.append(wrapper);

const setHeader = () => {
  const header = document.querySelector('.header');
  header.classList.add('header2');

  // set title
  const headerTitle = document.querySelector('.header_title');
  headerTitle.classList.remove('header_title');
  headerTitle.classList.add('page_title');
  headerTitle.innerHTML = `
  <a href="index.html" class="header_link">WF</a>`;

  // set search container
  const search = document.querySelector('.search');
  search.classList.remove('search');
  search.classList.add('query');

  // set input box
  const searchInput = document.querySelector('.search_input');
  searchInput.classList.remove('search_input');
  searchInput.classList.add('query_input');

  // modifying button
  const button2 = document.createElement('button');
  search.append(button2);
  button2.classList.add('btn2');
  button2.innerHTML = `
  <i class="fas fa-search-location"></i>`;
};

const setCurrentTemp = (currentData, location) => {
  // create card for current temp
  const currentTemp = document.createElement('div');
  currentTemp.classList.add('currenttemp');
  wrapper.append(currentTemp);

  // set date
  const date = new Date(currentData.observation_time.value);
  const options = {
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
  };
  const showDate = date.toLocaleDateString([], options);

  // set content
  currentTemp.innerHTML = `
    <div class="currenttemp_detail">
      <p class="date">${showDate}</p>
      <p class="location"><i class="fas fa-map-marker-alt"></i><span class="value">${location.county}, ${location.state}</span></p>
      <p class="temp"><span class="temp_value">${currentData.temp.value}</span><sup class="temp_unit">°C</sup></p>
    </div>
    <div class="currenttemp_description">
      <p class="descp">${currentData.weather_code.value}</p>
      <p class="icon">weather icon</p>
    </div>
  `;
};

const setCurrentWeather = (currentData, location) => {
  // create card for current weather
  const current = document.createElement('div');
  current.classList.add('currentweather');
  wrapper.append(current);
  current.innerHTML = `
    <div class="currentweather_detail">
      <h3 class="title">Current Weather in ${location.state}</h3>
      <p class="feel"><span class="feel_value">${currentData.feels_like.value}</span><sup class="feel_unit">°C</sup></p>
      <span class="feel_text">Feels like</span>
    </div>
    <div class="currentweather_data">
      <ul class="currentdata">
        <li class="currentdata_list"><i class="fas fa-tint"></i><span class="prop">Dew Point</span><span class="value">${currentData.dewpoint.value}</span><span>°C</span></li>
        <li class="currentdata_list"><i class="fas fa-tint"></i><span class="prop">Humidity</span><span class="value">${currentData.humidity.value}%</span></li>
        <li class="currentdata_list"><i class="fas fa-compress-arrows-alt"></i><span class="prop">Pressure</span><span class="value">${currentData.baro_pressure.value}</span><span>hPa</span></li>
        <li class="currentdata_list"><i class="fas fa-eye"></i><span class="prop">Visibility</span><span class="value">${currentData.visibility.value}</span><span>km</span></li>
        <li class="currentdata_list"><i class="fas fa-wind"></i><span class="prop">Wind</span><span class="value">${currentData.wind_speed.value}</span><span>m/s</span></li>
        <li class="currentdata_list"><i class="fas fa-cloud"></i><span class="prop">Cloud Cover</span><span class="value">${currentData.cloud_cover.value}%</span></li>
        <li class="currentdata_list"><span class="icon">het</span><span class="prop">Precipitation</span><span class="value">${currentData.precipitation.value}</span><span>mm/hr</span></li>
        <li class="currentdata_list"><i class="fas fa-moon"></i><span class="prop">Moon Phase</span><span class="value">${currentData.moon_phase.value}</span></li>
      </ul>
    </div>
  `;
};

const setAir = () => {
  // create card for air quality
  const air = document.createElement('div');
  air.classList.add('air');
  wrapper.append(air);
  air.innerHTML = `
    <h3 class="air_title">Air Quality Index</h3>
    <div class="air_detail">
      <div class="airvalue">34</div>
      <div class="airtext">
        <h4 class="airtext_verdict">Good</h4>
        <p class="airtext_expand">Air quality is considered satiisfactory and air pollution poses little or no risk</p>
      </div>
    </div>
    <button>See Details</button>
  `;
};

const setHourly = (hourlyData) => {
  // create card for hourly weather
  const hourly = document.createElement('div');
  hourly.classList.add('hourly');
  wrapper.append(hourly);

  // set time
  const showTime = (hourlyTime) => {
    const time = new Date(hourlyTime);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
    };
    return time.toLocaleTimeString([], options);
  };

  // set content
  hourly.innerHTML = `
    <div class="hourly_data">
      <span class="time">${showTime(hourlyData[0].observation_time.value)}</span>
      <span class="temp">${hourlyData[0].temp.value}</span>
      <span class="icon">icon</span>
      <span class="time">${hourlyData[0].precipitation_probability.value}</span>
    </div>
    <div class="hourly_data">
      <span class="time">${showTime(hourlyData[1].observation_time.value)}</span>
      <span class="temp">${hourlyData[1].temp.value}</span>
      <span class="icon">100</span>
      <span class="time">${hourlyData[1].precipitation_probability.value}</span>
    </div>
    <div class="hourly_data">
      <span class="time">${showTime(hourlyData[2].observation_time.value)}</span>
      <span class="temp">${hourlyData[2].temp.value}</span>
      <span class="icon">100</span>
      <span class="time">${hourlyData[2].precipitation_probability.value}</span>
    </div>
    <div class="hourly_data">
      <span class="time">${showTime(hourlyData[3].observation_time.value)}</span>
      <span class="temp">${hourlyData[3].temp.value}</span>
      <span class="icon">100</span>
      <span class="time">${hourlyData[3].precipitation_probability.value}</span>
    </div>
    <div class="hourly_data">
      <span class="time">${showTime(hourlyData[4].observation_time.value)}</span>
      <span class="temp">${hourlyData[4].temp.value}</span>
      <span class="icon">100</span>
      <span class="time">${hourlyData[4].precipitation_probability.value}</span>
    </div>
    <div class="hourly_data">
      <span class="time">${showTime(hourlyData[5].observation_time.value)}</span>
      <span class="temp">${hourlyData[5].temp.value}</span>
      <span class="icon">100</span>
      <span class="time">${hourlyData[5].precipitation_probability.value}</span>
    </div>
    <div class="hourly_data">
      <span class="time">${showTime(hourlyData[6].observation_time.value)}</span>
      <span class="temp">${hourlyData[6].temp.value}</span>
      <span class="icon">100</span>
      <span class="time">${hourlyData[6].precipitation_probability.value}</span>
    </div>
    <button>See More</button>
  `;
};

const setDaily = () => {
  // create card for daily weather
  const daily = document.createElement('div');
  daily.classList.add('daily');
  wrapper.append(daily);
  daily.innerHTML = `
  <div class="daily_data">
    <span class="day">Today</span>
    <span class="icon">100</span>
    <span class="temp">10°C</span>
    <span class="time">100</span>
  </div>
  <div class="daily_data">
    <span class="day">Today</span>
    <span class="icon">100</span>
    <span class="temp">10°C</span>
    <span class="time">100</span>
  </div>
  <div class="daily_data">
    <span class="day">Today</span>
    <span class="icon">100</span>
    <span class="temp">10°C</span>
    <span class="time">100</span>
  </div>
  <div class="daily_data">
    <span class="day">Today</span>
    <span class="icon">100</span>
    <span class="temp">10°C</span>
    <span class="time">100</span>
  </div>
  <div class="daily_data">
    <span class="day">Today</span>
    <span class="icon">100</span>
    <span class="temp">10°C</span>
    <span class="time">100</span>
  </div>
  <div class="daily_data">
    <span class="day">Today</span>
    <span class="icon">100</span>
    <span class="temp">10°C</span>
    <span class="time">100</span>
  </div>
  <div class="daily_data">
    <span class="day">Today</span>
    <span class="icon">100</span>
    <span class="temp">10°C</span>
    <span class="time">100</span>
  </div>
  <button>See More</button>
`;
};

const render = () => {
  const label = document.querySelector('.search_label');
  const feature = document.querySelector('.feature');
  const button = document.querySelector('.btn');
  button.remove();
  feature.remove();
  label.remove();
  setHeader();
  setAir();
  setDaily();
};

export {
  render, setCurrentTemp, setCurrentWeather, setHourly,
};
