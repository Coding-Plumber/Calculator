class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;  
    this.currentOperandTextElement = currentOperandTextElement;  
    this.clear();
    }


  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString(); // converted to string so that it can be appended and not added.
    
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if(this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'x':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      case '÷':
        computation = prev % current;
        break; 
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }


  updateDisplay() {
    if (this.currentOperand.length > 15) {
      return;
    }
    this.currentOperandTextElement.innerText = 
      this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = 
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
    
    
    
        
  }
  
};




const currentOperandTextElement = document.querySelector(".current-operand");    // input screen display
const previousOperandTextElement = document.querySelector(".previous-operand");    // output display
const allOperators = document.querySelectorAll(".operators");  // All operators "+", "-", "÷", "x", "%"


const add = document.getElementById("add");                 // add operator
const equalsButton = document.getElementById("equals");     // equals button
const allClearButton = document.getElementById("all-clear");// clear all  
const clearButton = document.getElementById("clear");       // delete
const numberButtons = document.querySelectorAll(".digits");        // buttons

console.log(currentOperandTextElement);
console.log(previousOperandTextElement);
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);




numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})


allOperators.forEach(operator => {
  operator.addEventListener("click", () => {
    calculator.chooseOperation(operator.innerText);
    calculator.updateDisplay();
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

clearButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
});