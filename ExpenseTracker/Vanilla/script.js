balance = document.getElementById('balance');
income = document.getElementById('money-plus');
expense = document.getElementById('money-minus');
list = document.getElementById('list');
form = document.getElementById('form');
text = document.getElementById('text');
amount = document.getElementById('amount');

// dummy transactions
let transactions = [
  {id: 1, text: 'makan', amount: '-2000'},
  {id: 2, text: 'gaji', amount: '10000'}
];

// create li, append to ul
const listHistory = (transItem) => {
  const item = document.createElement('li');
  item.classList.add(transItem.amount < 0 ? 'minus' : "plus");
  item.innerHTML = `
    <button id="${transItem.id}" class="delete-btn">x</button>
    ${transItem.text}
    <span>${transItem.amount < 0 ? "-" : "+"}$${Math.abs(transItem.amount)}</span>
  `;
  list.appendChild(item);
}

// map existing data to DOM
transactions.map(eachItem => listHistory(eachItem));

// get text & amount value, store in history list
const addTransaction = (e) => {
  if (text.value.trim() !== ''  && amount.value !== '') {
    e.preventDefault();
    const generateID = () => Math.floor(Math.random() * 1000000 + 1);
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: amount.value
    };
    transactions.push(transaction);
    // add new data to DOM
    listHistory(transaction);
    // refresh
    text.value = '';
    amount.value = '';
    console.log(transactions);
  } else (
    alert('Please fill the data')
  )
};

form.addEventListener('submit', addTransaction);
