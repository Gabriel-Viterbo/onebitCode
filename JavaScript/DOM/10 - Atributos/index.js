const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', () => {
  input.value = input.value === '' ? 'Value alterado!' : '';
});

document.getElementById('type').addEventListener('click', () => {
  input.type = input.type === 'text' ? 'date' : 'text';
});

document.getElementById('placeholder').addEventListener('click', () => {
  input.placeholder = input.placeholder === '' ? 'Placeholder Mudado!' : '';
});

document.getElementById('disable').addEventListener('click', () => {
  input.disabled = !input.disabled;
});

document.getElementById('data').addEventListener('click', () => {
  const data = input.dataset.somethingElse;
  console.log(data);
});
