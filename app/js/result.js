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
      <p class="location"><i class="fas fa-map-marker-alt"></i><span class="value">${location.state}</span></p>
      <p class="temp"><span class="temp_value">${Math.round(currentData.temp.value)}</span><sup class="temp_unit">°C</sup></p>
    </div>
    <div class="currenttemp_description">
      <p class="descp">${currentData.weather_code.value}</p>
      <img src="app/icons/${currentData.weather_code.value}.svg" width="50px" height="50px">
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
      <p class="feel"><span class="feel_value">${Math.round(currentData.feels_like.value)}</span><sup class="feel_unit">°C</sup></p>
      <span class="feel_text">Feels like</span>
    </div>
    <div class="currentweather_data">
      <ul class="currentdata">
        <li class="currentdata_list"><i class="fas fa-tint"></i><span class="prop">Dew Point</span><span class="value">${Math.round(currentData.dewpoint.value)}</span><span>°C</span></li>
        <li class="currentdata_list"><i class="fas fa-tint"></i><span class="prop">Humidity</span><span class="value">${Math.round(currentData.humidity.value)}%</span></li>
        <li class="currentdata_list"><i class="fas fa-compress-arrows-alt"></i><span class="prop">Pressure</span><span class="value">${Math.round(currentData.baro_pressure.value)}</span><span>hPa</span></li>
        <li class="currentdata_list"><i class="fas fa-eye"></i><span class="prop">Visibility</span><span class="value">${Math.round(currentData.visibility.value)}</span><span>km</span></li>
        <li class="currentdata_list"><i class="fas fa-wind"></i><span class="prop">Wind</span><span class="value">${Math.round(currentData.wind_speed.value)}</span><span>m/s</span></li>
        <li class="currentdata_list"><i class="fas fa-cloud"></i><span class="prop">Cloud Cover</span><span class="value">${Math.round(currentData.cloud_cover.value)}%</span></li>
        <li class="currentdata_list"><span class="icon">het</span><span class="prop">Precipitation</span><span class="value">${Math.round(currentData.precipitation.value)}</span><span>mm/hr</span></li>
        <li class="currentdata_list"><i class="fas fa-moon"></i><span class="prop">Moon Phase</span><span class="value">${currentData.moon_phase.value}</span></li>
      </ul>
    </div>
  `;
};

const setAir = (airData) => {
  // create card for air quality
  const air = document.createElement('div');
  air.classList.add('air');
  wrapper.append(air);
  air.innerHTML = `
    <h3 class="air_title">Air Quality Index</h3>
    <div class="air_detail">
      <div class="airvalue">${Math.round(airData.epa_aqi.value)}</div>
      <div class="airtext">
        <h4 class="airtext_verdict">Good</h4>
        <p class="airtext_expand">${airData.epa_health_concern.value}</p>
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
    <h3>Hourly Forecast</h3>
    <div class="hourly_holder">
      <div class="hourly_data">
        <span class="time">${showTime(hourlyData[0].observation_time.value)}</span>
        <span class="temp">${Math.round(hourlyData[0].temp.value)}</span>
        <span class="icon">icon</span>
        <span class="precp">${Math.round(hourlyData[0].precipitation_probability.value)}</span>
      </div>
      <div class="hourly_data">
        <span class="time">${showTime(hourlyData[1].observation_time.value)}</span>
        <span class="temp">${Math.round(hourlyData[1].temp.value)}</span>
        <span class="icon">100</span>
        <span class="precp">${Math.round(hourlyData[1].precipitation_probability.value)}</span>
      </div>
      <div class="hourly_data">
        <span class="time">${showTime(hourlyData[2].observation_time.value)}</span>
        <span class="temp">${Math.round(hourlyData[2].temp.value)}</span>
        <span class="icon">100</span>
        <span class="precp">${Math.round(hourlyData[2].precipitation_probability.value)}</span>
      </div>
      <div class="hourly_data">
        <span class="time">${showTime(hourlyData[3].observation_time.value)}</span>
        <span class="temp">${Math.round(hourlyData[3].temp.value)}</span>
        <span class="icon">100</span>
        <span class="precp">${Math.round(hourlyData[3].precipitation_probability.value)}</span>
      </div>
      <div class="hourly_data">
        <span class="time">${showTime(hourlyData[4].observation_time.value)}</span>
        <span class="temp">${Math.round(hourlyData[4].temp.value)}</span>
        <span class="icon">100</span>
        <span class="precp">${Math.round(hourlyData[4].precipitation_probability.value)}</span>
      </div>
    </div>
    <button>Next 24 Hours</button>
  `;
};

const setDaily = (dailyData) => {
  // create card for daily weather
  const daily = document.createElement('div');
  daily.classList.add('daily');
  wrapper.append(daily);

  // set date
  const showDate = (dailyDate) => {
    const date = new Date(dailyDate);
    const options = {
      weekday: 'short',
      day: '2-digit',
    };
    return date.toLocaleDateString([], options);
  };

  // set content
  daily.innerHTML = `
    <h3>Daily Forecast</h3>
    <div class="daily_holder">
      <div class="daily_data">
        <span class="day">${showDate(dailyData[0].observation_time.value)}</span>
        <span class="temp-max">${Math.round(dailyData[0].temp[1].max.value)}</span>
        <span class="temp-min">${Math.round(dailyData[0].temp[0].min.value)}</span>
        <span class="icon">100</span>
        <span class="precp">${Math.round(dailyData[0].precipitation_probability.value)}</span>
      </div>
      <div class="daily_data">
        <span class="day">${showDate(dailyData[1].observation_time.value)}</span>
        <span class="temp-max">${Math.round(dailyData[1].temp[1].max.value)}</span>
        <span class="temp-min">${Math.round(dailyData[1].temp[0].min.value)}</span>
        <span class="icon">100</span>
        <span class="precp">${Math.round(dailyData[1].precipitation_probability.value)}</span>
      </div>
      <div class="daily_data">
        <span class="day">${showDate(dailyData[2].observation_time.value)}</span>
        <span class="temp-max">${Math.round(dailyData[2].temp[1].max.value)}</span>
        <span class="temp-min">${Math.round(dailyData[2].temp[0].min.value)}</span>
        <span class="icon">100</span>
        <span class="precp">${Math.round(dailyData[2].precipitation_probability.value)}</span>
      </div>
      <div class="daily_data">
        <span class="day">${showDate(dailyData[3].observation_time.value)}</span>
        <span class="temp-max">${Math.round(dailyData[3].temp[1].max.value)}</span>
        <span class="temp-min">${Math.round(dailyData[3].temp[0].min.value)}</span>
        <span class="icon">100</span>
        <span class="precp">${Math.round(dailyData[3].precipitation_probability.value)}</span>
      </div>
      <div class="daily_data">
        <span class="day">${showDate(dailyData[4].observation_time.value)}</span>
        <span class="temp-max">${Math.round(dailyData[4].temp[1].max.value)}</span>
        <span class="temp-min">${Math.round(dailyData[4].temp[0].min.value)}</span>
        <span class="icon">100</span>
        <span class="precp">${Math.round(dailyData[4].precipitation_probability.value)}</span>
      </div>
    </div>
    <button>Next 10 Days</button>
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
};

export {
  render, setCurrentTemp, setCurrentWeather, setHourly, setDaily, setAir,
};
