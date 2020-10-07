const main = document.querySelector('.main');
const wrapper = document.querySelector('.wrapper');

const airHolder = document.createElement('div');
airHolder.classList.add('airHolder');

const airVerdict = (verdict) => {
  const verdicts = {
    Good: 'No health implications',
    Moderate: 'Some pollutants may slightly affect very few hypersensitive individuals',
    'Unhealthy for sensitive groups': 'Healthy people may experience slight irritations and sensitive individuals will be slightly affected to a larger extent',
    Unhealthy: 'Sensitive individuals will experience more serious conditions. The hearts and respiratory systems of healthy people may be affected',
    'Very Unhealthy': 'Healthy people will commonly show symptoms. People with respiratory or heart diseases will be significantly affected and will experience reduced endurance in activities',
    Hazardous: 'Healthy people will experience reduced endurance in activities and may also show noticeably strong symptoms. Other illnesses may be triggered in healthy people. Elders and the sick should remain indoors and avoid exercise. Healthy individuals should avoid outdoor activities',
  };
  return verdicts[verdict];
};

const renderAirCircle = (currentData) => {
  const airCircle = document.createElement('div');
  airCircle.classList.add('circle');
  airHolder.append(airCircle);
  airCircle.innerHTML = `
    <h3 class="circle_title">Air Quality</h3>
    <div class="circle_round">${Math.round(currentData.epa_aqi.value)}</div>
    <p>${currentData.epa_health_concern.value}</p>
  `;
};

const renderAirData = (currentData) => {
  const airDataContent = document.createElement('div');
  airDataContent.classList.add('aircontent');
  airHolder.append(airDataContent);
  airDataContent.innerHTML = `
    <div class="aircontent_explained">
      <h4>Air Quality Explained</h4>
      <P>${airVerdict(currentData.epa_health_concern.value)}</P>
    </div>
    <div class="aircontent_pollutant">
      <h4>PRIMARY POLLUTANT</h4>
      <ul class="poll">
        <li class="poll_list">
          <span class="prop">PM2.5<span class="prop_unit">μg/m3</span></span>
          <span class="value">Good</span>
          <span class="value_circle">${currentData.pm25.value}</span>
        </li>
      </ul>
    </div>
    <div class="aircontent_pollutant">
      <h4>ADDITIONAL POLLUTANTS</h4>
      <ul class="poll">
        <li class="poll_list">
          <span class="prop">NO2<span class="prop_unit">μg/m3</span></span>
          <span class="value">Good</span>
          <span class="value_circle">${currentData.no2.value}</span>
        </li>
        <li class="poll_list">
          <span class="prop">O3<span class="prop_unit">μg/m3</span></span>
          <span class="value">Good</span>
          <span class="value_circle">${currentData.o3.value}</span>
        </li>
        <li class="poll_list">
          <span class="prop">SO2<span class="prop_unit">μg/m3</span></span>
          <span class="value">Good</span>
          <span class="value_circle">${currentData.so2.value}</span>
        </li>        
        <li class="poll_list">
          <span class="prop">PM10<span class="prop_unit">μg/m3</span></span>
          <span class="value">Good</span>
          <span class="value_circle">${currentData.pm10.value}</span>
        </li>
        <li class="poll_list">
          <span class="prop">CO<span class="prop_unit">μg/m3</span></span>
          <span class="value">Good</span>
          <span class="value_circle">${currentData.co.value}</span>
        </li>
      </ul>
    </div>
  `;
};

const scaleRange = () => {
  const scale = document.createElement('div');
  scale.classList.add('scale');
  airHolder.append(scale);
  scale.innerHTML = `
    <div>
      <span class="line"></span>
      <span class="range">Good</span>
    </div>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <div>
      <span class="line"></span>
      <span class="range">Hazardous</span>
    </div>
  `;
};

const abbreviations = () => {
  const abbrv = document.createElement('div');
  abbrv.classList.add('abbrv');
  airHolder.append(abbrv);
  abbrv.innerHTML = `
    <h4>ABBREVIATIONS</h4>
    <ul>
      <li class="prop_list">
        <span class="prop">NO2</span>
        <span class="full">Nitrogen Dioxide<span class="unit">μg/m3</span></span>
      </li>
      <li class="prop_list">
        <span class="prop">O3</span>
        <span class="full">Ozone<span class="unit">μg/m3</span></span>
      </li>
      <li class="prop_list">
        <span class="prop">SO2</span>
        <span class="full">Sulphur Dioxide<span class="unit">μg/m3</span></span>
      </li>
      <li class="prop_list">
        <span class="prop">PM2.5</span>
        <span class="full">Particulate matter less than 2.5 microns<span class="unit">μg/m3</span></span>
      </li>
      <li class="prop_list">
        <span class="prop">PM10</span>
        <span class="full">Particulate matter less than 10 microns<span class="unit">μg/m3</span></span>
      </li>
      <li class="prop_list">
        <span class="prop">CO</span>
        <span class="full">Carbon Monoxide<span class="unit">μg/m3</span></span>
      </li>
    </ul>
  `;
};

const airPage = (currentData) => {
  // loader
  const load = document.querySelector('.load');
  const loader = document.querySelector('.loader');
  main.style.display = 'none';
  wrapper.innerHTML = '';
  load.style.display = 'block';
  loader.style.display = 'block';

  renderAirCircle(currentData);
  renderAirData(currentData);
  scaleRange(currentData);
  abbreviations();

  wrapper.append(airHolder);
  load.style.display = 'none';
  loader.style.display = 'none';
  main.style.display = 'block';
};

export {
  airPage, airVerdict,
};
