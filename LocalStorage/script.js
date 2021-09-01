const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

let para = document.createElement('p');
para.textContent = "You don't have any task yet";

// Set local Storage:
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// Check whether there is a task or not
window.addEventListener('load', () => {
  if (ul.hasChildNodes()) {
    if (para.parentElement === ul) {
      ul.removeChild(para);
    }
  } else {
    ul.appendChild(para);
  }
});

// Generate List function
const genLi = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

// Add Task using form to local storage
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Local Storage:
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  // Remove 'You don't have any task yet' text
  if (para.parentElement === ul) {
    ul.removeChild(para);
    genLi(input.value);
    input.value = '';
  } else {
    genLi(input.value);
    input.value = '';
  }
});

data.forEach(item => {
  genLi(item);
});

// Clear Button
button.addEventListener('click', () => {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
  ul.appendChild(para);
});
