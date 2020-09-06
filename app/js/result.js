// initialize error page
const main = document.querySelector('.main');
const errorInfo = document.createElement('div');
main.append(errorInfo);

const showResult = () => {
  // set header
  const header = document.querySelector('.header');
  header.classList.add('header2');
  header.style.borderBottom = '2px solid #011b33';

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

  // create and append wrapper to main
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  main.append(wrapper);

  // create card for current temp
  const currentTemp = document.createElement('div');
  currentTemp.classList.add('current_temp');
  wrapper.append(currentTemp);
  currentTemp.innerHTML = `
    <div>
      <p>Tue Jun 09 2020</p>
      <p><i class="fas fa-map-marker-alt"></i><span>Chicago, IL</span></p>
      <p>24C</p>
    </div>
    <div>
      <p>Cloudy</p>
      <p>weather icon</p>
    </div>
  `;

  // create card for current weather
  const current = document.createElement('div');
  current.classList.add('current_data');
  wrapper.append(current);
  current.innerHTML = `
    <div>
      <div>
        <h3>Current Weather in Chicago</h3>
        <p>22C</p>
        <span>Feels like</span>
      </div>
      <div>
        <ul>
          <li><span>het</span><span>wind</span><span>28C</span></li>
          <li><span>het</span><span>wind</span><span>28C</span></li>
          <li><span>het</span><span>wind</span><span>28C</span></li>
          <li><span>het</span><span>wind</span><span>28C</span></li>
          <li><span>het</span><span>wind</span><span>28C</span></li>
          <li><span>het</span><span>wind</span><span>28C</span></li>
          <li><span>het</span><span>wind</span><span>28C</span></li>
        </ul>
      </div>
    </div>
  `;

  // create card for air quality
  const air = document.createElement('div');
  air.classList.add('air');
  wrapper.append(air);
  air.innerHTML = `
    <h3>Air Quality Index</h3>
    <div>
      <div><p>34</p></div>
      <div>
        <h4>Good</h4>
        <p>Air quality is considered satiisfactory and air pollution poses little or no risk</p>
      </div>
      <button>See Details</button>
    </div>
  `;

  // create card for hourly weather
  const hourly = document.createElement('div');
  hourly.classList.add('hourly');
  wrapper.append(hourly);
  hourly.innerHTML = `
    <div>
      <div>
        <span>100</span>
        <span>100</span>
        <span>100</span>
        <span>100</span>
      </div>
      <div>
        <span>100</span>
        <span>100</span>
        <span>100</span>
        <span>100</span>
      </div>
      <div>
        <span>100</span>
        <span>100</span>
        <span>100</span>
        <span>100</span>
      </div>
    </div>
  `;

  // create card for daily weather
  const daily = document.createElement('div');
  daily.classList.add('daily');
  wrapper.append(daily);
  daily.innerHTML = `
  <div>
    <div>
      <span>100</span>
      <span>100</span>
      <span>100</span>
      <span>100</span>
    </div>
    <div>
      <span>100</span>
      <span>100</span>
      <span>100</span>
      <span>100</span>
    </div>
    <div>
      <span>100</span>
      <span>100</span>
      <span>100</span>
      <span>100</span>
    </div>
  </div>
`;
};

const render = () => {
  const label = document.querySelector('.search_label');
  const feature = document.querySelector('.feature');
  const button = document.querySelector('.btn');
  button.remove();
  feature.remove();
  label.remove();
  showResult();
};

export { render, errorInfo };
