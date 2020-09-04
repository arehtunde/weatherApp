// initialize error page
const main = document.querySelector('.main');
const errorInfo = document.createElement('div');
main.append(errorInfo);

const render = () => {
  const label = document.querySelector('.search_label');
  const feature = document.querySelector('.feature');
  feature.style.display = 'none';
  label.style.display = 'none';
};

cosnt showResult = () => {
  
};

export { render, errorInfo };
