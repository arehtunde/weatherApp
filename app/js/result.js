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

const setCurrentTemp = () => {
  // create card for current temp
  const currentTemp = document.createElement('div');
  currentTemp.classList.add('currenttemp');
  wrapper.append(currentTemp);
  currentTemp.innerHTML = `
    <div class="currenttemp_detail">
      <p class="date">Tue Jun 09 2020</p>
      <p class="location"><i class="fas fa-map-marker-alt"></i><span class="value">Chicago, IL</span></p>
      <p class="temp"><span class="temp_value">24</span><sup class="temp_unit">°C</sup></p>
    </div>
    <div class="currenttemp_description">
      <p class="descp">Cloudy</p>
      <p class="icon">weather icon</p>
    </div>
  `;
};

const setCurrentWeather = () => {
  // create card for current weather
  const current = document.createElement('div');
  current.classList.add('currentweather');
  wrapper.append(current);
  current.innerHTML = `
    <div class="currentweather_detail">
      <h3 class="title">Current Weather in Chicago</h3>
      <p class="feel"><span class="feel_value">24</span><sup class="feel_unit">°C</sup></p>
      <span class="feel_text">Feels like</span>
    </div>
    <div class="currentweather_data">
      <ul class="currentdata">
        <li class="currentdata_list"><span class="icon">het</span><span class="prop">wind</span><span class="value">28C</span></li>
        <li class="currentdata_list"><span class="icon">het</span><span class="prop">wind</span><span class="value">28C</span></li>
        <li class="currentdata_list"><span class="icon">het</span><span class="prop">wind</span><span class="value">28C</span></li>
        <li class="currentdata_list"><span class="icon">het</span><span class="prop">wind</span><span class="value">28C</span></li>
        <li class="currentdata_list"><span class="icon">het</span><span class="prop">wind</span><span class="value">28C</span></li>
        <li class="currentdata_list"><span class="icon">het</span><span class="prop">wind</span><span class="value">28C</span></li>
        <li class="currentdata_list"><span class="icon">het</span><span class="prop">wind</span><span class="value">28C</span></li>
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

const setHourly = () => {
  // create card for hourly weather
  const hourly = document.createElement('div');
  hourly.classList.add('hourly');
  wrapper.append(hourly);
  hourly.innerHTML = `
    <div class="hourly_data">
      <span class="time">11pm</span>
      <span class="icon">100</span>
      <span class="temp">68°C</span>
      <span class="time">100</span>
    </div>
    <div class="hourly_data">
      <span class="time">11pm</span>
      <span class="icon">100</span>
      <span class="temp">68°C</span>
      <span class="time">100</span>
    </div>
    <div class="hourly_data">
      <span class="time">11pm</span>
      <span class="icon">100</span>
      <span class="temp">68°C</span>
      <span class="time">100</span>
    </div>
    <div class="hourly_data">
      <span class="time">11pm</span>
      <span class="icon">100</span>
      <span class="temp">68°C</span>
      <span class="time">100</span>
    </div>
    <div class="hourly_data">
      <span class="time">11pm</span>
      <span class="icon">100</span>
      <span class="temp">68°C</span>
      <span class="time">100</span>
    </div>
    <div class="hourly_data">
      <span class="time">11pm</span>
      <span class="icon">100</span>
      <span class="temp">68°C</span>
      <span class="time">100</span>
    </div>
    <div class="hourly_data">
      <span class="time">11pm</span>
      <span class="icon">100</span>
      <span class="temp">68°C</span>
      <span class="time">100</span>
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

export const render = () => {
  const label = document.querySelector('.search_label');
  const feature = document.querySelector('.feature');
  const button = document.querySelector('.btn');
  button.remove();
  feature.remove();
  label.remove();
  setHeader();
  setCurrentTemp();
  setCurrentWeather();
  setAir();
  setHourly();
  setDaily();
};

export default render;
