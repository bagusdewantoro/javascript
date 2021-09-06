balance = document.getElementById('balance');
income = document.getElementById('money-plus');
expense = document.getElementById('money-minus');
list = document.getElementById('list');
form = document.getElementById('form');
text = document.getElementById('text');
amount = document.getElementById('amount');

let transactions = [];

// get text & amount value, store in history list
const addTransaction = (e) => {
  e.preventDefault();
  const generateID = () => Math.floor(Math.random() * 1000000 + 1);
  const transaction = {
    id: generateID(),
    text: text.value,
    amount: amount.value
  };
  transactions.push(transaction);
  const item = document.createElement('li');
  item.innerHTML = `
    <button id="${transaction.id}" class="delete-btn">x</button>${transaction.text}
    <span>$${transaction.amount}</span>
  `;
  list.appendChild(item);
  text.value = '';
  amount.value = '';
};

form.addEventListener('submit', addTransaction);
