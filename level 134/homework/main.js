import { add } from './Plus.js';
import { subtract } from './Minus.js';
import { multiply } from './Multiply.js';
import { divide } from './Divide.js';

document.getElementById('calc-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const num1 = parseFloat(document.getElementById('number1').value);
  const num2 = parseFloat(document.getElementById('number2').value);
  const operator = document.getElementById('operator').value;
  const resultDisplay = document.getElementById('result');

  let result;

  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      result = 'არასწორი ოპერატორი';
  }

  resultDisplay.textContent = `შედეგი: ${result}`;
});
