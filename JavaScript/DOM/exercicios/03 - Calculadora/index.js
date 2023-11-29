const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeyds = '()/*-+=0123456789.% ';

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
  charKeyBtn.addEventListener('click', () => {
    const value = charKeyBtn.dataset.value;

    input.value += value;
  });
});

document.getElementById('clear').addEventListener('click', () => {
  input.value = '';
  input.focus();
  resultInput.value = '';
  resultInput.classList.remove('error');
});

document.getElementById('equal').addEventListener('click', calculate);

input.addEventListener('keydown', (ev) => {
  if (ev.key !== 'Backspace') {
    ev.preventDefault();
  }

  if (allowedKeyds.includes(ev.key)) {
    input.value += ev.key;
  }

  if (ev.key === 'Enter') {
    calculate();
  }
});

function calculate() {
  try {
    resultInput.classList.remove('error');
    resultInput.value = eval(input.value);
  } catch (e) {
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
  }
}

document.getElementById('themeSwitcher').addEventListener('click', () => {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#F1F5F9');
    root.style.setProperty('--border-color', '#AAA');
    root.style.setProperty('--font-color', '#212529');
    root.style.setProperty('--primary-color', '#01a13f');
    main.dataset.theme = 'light';
  } else {
    root.style.setProperty('--bg-color', '#212529');
    root.style.setProperty('--border-color', '#666');
    root.style.setProperty('--font-color', '#F1F5F9');
    root.style.setProperty('--primary-color', '#4DFF91');
    main.dataset.theme = 'dark';
  }
});

document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
  const button = ev.currentTarget;
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!';

    button.classList.add('success');
    navigator.clipboard.writeText(resultInput.value);

    setTimeout(() => {
      button.innerText = 'Copy';
      button.classList.remove('success');
    }, 1000);
  }
});
