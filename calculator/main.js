const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingSecondOperand: false,
  operator: null,
};

const inputDigit = (digit) => {
  const { displayValue, waitingSecondOperand } = calculator;
  // this will be same with:
  // const displayValue = calculator.displayValue;
  // const waitingSecondOperand = calculator.waitingSecondOperand;
  if (waitingSecondOperand === true ) {
    calculator.displayValue = digit;
    calculator.waitingSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
  console.log(calculator);
};

const inputDecimal = (dot) => {
  if (calculator.waitingSecondOperand === true) {
    calculator.displayValue = '0.';
    calculator.waitingSecondOperand = false;
    return;
  }
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
};

const handleOperator = (nextOperator) => {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);
  if (operator && calculator.waitingSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }
  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }
  calculator.waitingSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
};

const calculate = (firstOperand, secondOperand, operator) => {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }
  return secondOperand;
};

const resetCalculator = () => {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
};

const updateDisplay = () => {
  const display = document.querySelector('.display');
  display.value = calculator.displayValue;
  // console.log(display.value);
};

updateDisplay();

const keypad = document.querySelector('.keypad');
keypad.addEventListener('click', (event) => {
  const { target } = event;
  // this will be same with:
  // const target = event.target;

  // console.log(target);

  if (!target.matches('button')) {
    console.log('not button');
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
  console.log('digit', target.value);
});
