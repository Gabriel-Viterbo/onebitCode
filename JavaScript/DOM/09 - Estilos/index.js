const useLightTheme = () => {
  document.body.className = 'is-dark';
};

const userDarkTheme = () => {
  document.body.className = 'is-light';
};

const switchTheme = () => {
  document.body.classList.toggle('is-light');
  document.body.classList.toggle('is-dark');
};

document.getElementById('lightBtn').addEventListener('click', useLightTheme);
document.getElementById('darkBtn').addEventListener('click', userDarkTheme);
document.getElementById('switchBtn').addEventListener('click', switchTheme);
