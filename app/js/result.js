import { airPage, airVerdict } from './air.js';

const wrapper = document.querySelector('.wrapper');

const setHeader = () => {
  const header = document.querySelector('.header');
  header.classList.add('header2');

  // set title
  const headerTitle = document.querySelector('#header_title');
  headerTitle.setAttribute('class', 'page_title');
  headerTitle.innerHTML = `
  <a href="index.html" class="header_link">WF</a>`;

  // set search container
  const search = document.querySelector('#search');
  search.setAttribute('class', 'query');

  // set input box
  const searchInput = document.querySelector('.search_input');
  searchInput.style.width = '90%';
  searchInput.style.borderRadius = '5px 0 0 5px';

  // modifying button
  const button = document.querySelector('.btn');
  button.classList.remove('btn1');
  button.classList.add('btn2');
  button.innerHTML = `
  <i class="fas fa-search-location"></i>`;

  // set footer
  const footer = document.querySelector('.foot');
  footer.style.borderTop = '2px solid #011b33';
};

const setCurrentTemp = (currentData, location) => {
  const inputfield = document.querySelector('.search_input');
  const input = inputfield.value.trim();

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

  const time = {
    hour: '2-digit',
    minute: '2-digit',
  };

  const showDate = date.toLocaleDateString([], options);
  const showTime = date.toLocaleTimeString([], time);

  // set content
  currentTemp.innerHTML = `
    <div class="holder">
      <div class="currenttemp_detail">
        <p class="date">${showDate}</p>
        <p>as of ${showTime}</p>
        <p class="temp">${Math.round(currentData.temp.value)}°</p>
      </div>
      <div class="currenttemp_description">
        <p class="descp">${currentData.weather_code.value}</p>
        <img src="app/icons/${currentData.weather_code.value}.svg" alt="${currentData.weather_code.value}">
      </div>
    </div>
    <p class="location"><i class="fas fa-map-marker-alt"></i><span class="value">${input}, ${location.state}, ${location.country} Weather</span></p>
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
      <p class="feel"><span class="feel_value">${Math.round(currentData.feels_like.value)}°</span></p>
      <span class="feel_text">Feels like</span>
    </div>
    <div class="currentweather_data">
      <ul class="currentdata">
        <li class="currentdata_list">
          <i class="fas fa-tint"></i>
          <span class="prop">Dew Point</span>
          <span class="value">${Math.round(currentData.dewpoint.value)}°</span>
        </li>
        <li class="currentdata_list">
          <i class="fas fa-tint"></i>
          <span class="prop">Humidity</span>
          <span class="value">${Math.round(currentData.humidity.value)}%</span>
        </li>
        <li class="currentdata_list">
          <i class="fas fa-compress-arrows-alt"></i>
          <span class="prop">Pressure</span>
          <span class="value">${Math.round(currentData.baro_pressure.value)}</span>
          <span>hPa</span>
        </li>
        <li class="currentdata_list">
          <i class="fas fa-eye"></i>
          <span class="prop">Visibility</span>
          <span class="value">${Math.round(currentData.visibility.value)}</span>
          <span>km</span>
        </li>
        <li class="currentdata_list">
          <i class="fas fa-wind"></i>
          <span class="prop">Wind</span>
          <span class="value">${Math.round(currentData.wind_speed.value)}</span>
          <span>m/s</span>
        </li>
        <li class="currentdata_list">
          <i class="fas fa-cloud"></i>
          <span class="prop">Cloud Cover</span>
          <span class="value">${Math.round(currentData.cloud_cover.value)}%</span>
        </li>
        <li class="currentdata_list">
          <i class="fas fa-bolt"></i>
          <span class="prop">Precipitation</span>
          <span class="value">${Math.round(currentData.precipitation.value)}</span>
          <span>mm/hr</span>
        </li>
        <li class="currentdata_list">
          <i class="fas fa-moon"></i>
          <span class="prop">Moon Phase</span>
          <span class="value">${currentData.moon_phase.value}</span>
        </li>
      </ul>
    </div>
  `;
};

const setAir = (currentData) => {
  // create card for air quality
  const air = document.createElement('div');
  air.classList.add('air');
  wrapper.append(air);
  air.innerHTML = `
    <h3 class="air_title">Air Quality Index</h3>
    <div class="air_detail">
      <div class="airvalue">${Math.round(currentData.epa_aqi.value)}</div>
      <div class="airtext">
        <h4 class="airtext_verdict">${currentData.epa_health_concern.value}</h4>
        <p class="airtext_expand">${airVerdict(currentData.epa_health_concern.value)}</p>
      </div>
    </div>
    <button class="btn3 nextSee">See Details</button>
  `;

  // airPage
  const airButton = document.querySelector('.nextSee');
  airButton.addEventListener('click', () => {
    airPage(currentData);
  });
};

const setHourly = (hourlyData) => {
  // create card for hourly weather
  const hourly = document.createElement('div');
  hourly.classList.add('common');
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
    <div class="common_holder">
      <div class="common-data">
        <span class="now">Now</span>
        <span class="temp">${Math.round(hourlyData[0].temp.value)}°</span>
        <img src="app/icons/${hourlyData[0].weather_code.value}.svg" alt="${hourlyData[0].weather_code.value}">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(hourlyData[0].precipitation_probability.value)}%</span>
      </div>
      <div class="common-data">
        <span class="time">${showTime(hourlyData[1].observation_time.value)}</span>
        <span class="temp">${Math.round(hourlyData[1].temp.value)}°</span>
        <img src="app/icons/${hourlyData[1].weather_code.value}.svg" alt="${hourlyData[1].weather_code.value}">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(hourlyData[1].precipitation_probability.value)}%</span>
      </div>
      <div class="common-data">
        <span class="time">${showTime(hourlyData[2].observation_time.value)}</span>
        <span class="temp">${Math.round(hourlyData[2].temp.value)}°</span>
        <img src="app/icons/${hourlyData[2].weather_code.value}.svg" alt="">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(hourlyData[2].precipitation_probability.value)}%</span>
      </div>
      <div class="common-data">
        <span class="time">${showTime(hourlyData[3].observation_time.value)}</span>
        <span class="temp">${Math.round(hourlyData[3].temp.value)}°</span>
        <img src="app/icons/${hourlyData[3].weather_code.value}.svg" alt="">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(hourlyData[3].precipitation_probability.value)}%</span>
      </div>
      <div class="common-data">
        <span class="time">${showTime(hourlyData[4].observation_time.value)}</span>
        <span class="temp">${Math.round(hourlyData[4].temp.value)}°</span>
        <img src="app/icons/${hourlyData[4].weather_code.value}.svg" alt="">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(hourlyData[4].precipitation_probability.value)}%</span>
      </div>
    </div>
    <button class="btn3 next24">Next 24 Hours</button>
  `;
};

const setDaily = (dailyData) => {
  // create card for daily weather
  const daily = document.createElement('div');
  daily.classList.add('common');
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
    <div class="common_holder">
      <div class="common-data">
        <span class="now">Today</span>
        <span class="temp">${Math.round(dailyData[0].temp[1].max.value)}°</span>
        <span class="temp-min">${Math.round(dailyData[0].temp[0].min.value)}°</span>
        <img src="app/icons/${dailyData[0].weather_code.value}.svg" alt="">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(dailyData[0].precipitation_probability.value)}%</span>
      </div>
      <div class="common-data">
        <span class="day">${showDate(dailyData[1].observation_time.value)}</span>
        <span class="temp">${Math.round(dailyData[1].temp[1].max.value)}°</span>
        <span class="temp-min">${Math.round(dailyData[1].temp[0].min.value)}°</span>
        <img src="app/icons/${dailyData[1].weather_code.value}.svg" alt="">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(dailyData[1].precipitation_probability.value)}%</span>
      </div>
      <div class="common-data">
        <span class="day">${showDate(dailyData[2].observation_time.value)}</span>
        <span class="temp">${Math.round(dailyData[2].temp[1].max.value)}°</span>
        <span class="temp-min">${Math.round(dailyData[2].temp[0].min.value)}°</span>
        <img src="app/icons/${dailyData[2].weather_code.value}.svg" alt="">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(dailyData[2].precipitation_probability.value)}%</span>
      </div>
      <div class="common-data">
        <span class="day">${showDate(dailyData[3].observation_time.value)}</span>
        <span class="temp">${Math.round(dailyData[3].temp[1].max.value)}°</span>
        <span class="temp-min">${Math.round(dailyData[3].temp[0].min.value)}°</span>
        <img src="app/icons/${dailyData[3].weather_code.value}.svg" alt="">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(dailyData[3].precipitation_probability.value)}%</span>
      </div>
      <div class="common-data">
        <span class="day">${showDate(dailyData[4].observation_time.value)}</span>
        <span class="temp">${Math.round(dailyData[4].temp[1].max.value)}°</span>
        <span class="temp-min">${Math.round(dailyData[4].temp[0].min.value)}°</span>
        <img src="app/icons/${dailyData[4].weather_code.value}.svg" alt="">
        <span class="precp"><i class="fas fa-bolt"></i>${Math.round(dailyData[4].precipitation_probability.value)}%</span>
      </div>
    </div>
    <button class="btn3 next10">Next 10 Days</button>
`;
};

export {
  setHeader, setCurrentTemp, setCurrentWeather, setAir, setHourly, setDaily,
};
