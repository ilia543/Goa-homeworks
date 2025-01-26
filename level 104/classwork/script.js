function multiplyNumbers() {
  while (true) {
    const firstNumber = prompt("Enter the first number (or 'exit' to quit):");
    if (firstNumber.toLowerCase() === 'exit') {
      console.log("Exiting the program. Goodbye!");
      break;
    }

    const secondNumber = prompt("Enter the second number (or 'exit' to quit):");
    if (secondNumber.toLowerCase() === 'exit') {
      console.log("Exiting the program. Goodbye!");
      break;
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Invalid input. Please enter valid numbers.");
      continue;
    }

    const product = num1 * num2;
    console.log(`The product of ${num1} and ${num2} is: ${product}`);
  }
}

multiplyNumbers();
