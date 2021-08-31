const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

// Local Storage:
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// Generate List
const genLi = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

// Add Task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Local Storage:
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  genLi(input.value);
  input.value = '';
});

data.forEach((item) => {
  genLi(item);
});

// CLEAR BUTTON
button.addEventListener('click', () => {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
