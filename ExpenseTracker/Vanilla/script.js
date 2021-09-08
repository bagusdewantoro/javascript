balance = document.getElementById('balance');
income = document.getElementById('money-plus');
expense = document.getElementById('money-minus');
list = document.getElementById('list');
form = document.getElementById('form');
text = document.getElementById('text');
amount = document.getElementById('amount');

// dummy transactions
let transactions = [
  {id: 1, text: 'kamera', amount: "-2000"},
  {id: 2, text: 'jual', amount: "10000"}
];

// function 1000 separator
const thousands = (num) => {
  /*
  // with cent decimal
  const num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
  */
  // withount cent decimal
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// function create li, append to ul
const listHistory = (transItem) => {
  const item = document.createElement('li');
  item.classList.add(transItem.amount < 0 ? 'minus' : "plus");
  item.innerHTML = `
    <button id="${transItem.id}" class="delete-btn">x</button>
    ${transItem.text}
    <span>${transItem.amount < 0 ? "-" : "+"} Rp ${thousands(Math.abs(transItem.amount))}</span>
  `;
  list.appendChild(item);
}

// function calculate
const calculateValue = () => {
  // balance
  const totalAmount = transactions.reduce((current, next) => current + Number(next.amount), 0);
  balance.textContent = `Rp ${thousands(totalAmount)}`;
  // income
  const plusAmount = transactions.reduce((current, next) => {
    if (next.amount < 0) return Number(current);
    return current + Number(next.amount);
  }, 0);
  income.textContent = `+ Rp ${thousands(plusAmount)}`;
  // expense
  const minusAmount = transactions.reduce((current, next) => {
    if (next.amount > 0) return Number(current);
    return current + Number(next.amount);
  }, 0);
  expense.textContent = `- Rp ${thousands(Math.abs(minusAmount))}`;
}

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

    listHistory(transaction);
    calculateValue();

    // refresh
    text.value = '';
    amount.value = '';
    console.log(transactions);
  } else (
    alert('Please fill the data')
  )
};

// map existing data to DOM
transactions.map(eachItem => listHistory(eachItem));

// calculate existing value
calculateValue();

form.addEventListener('submit', addTransaction);
