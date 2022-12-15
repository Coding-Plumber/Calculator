
const buttonOne = document.getElementById("digit-1");
console.log(buttonOne);
const userInput = document.getElementById("user-input");
console.log(userInput);

buttonOne.addEventListener("click", (event) => {

    const buttonElement = event.target;

    const buttonText = buttonElement.textContent;

    userInput.textContent += buttonText;
});



const two = document.getElementById("digit-2");
const three = document.getElementById("digit-3");
const four = document.getElementById("digit-4");
const five = document.getElementById("digit-5");
const six = document.getElementById("digit-6");
const seven = document.getElementById("digit-7");
const eight = document.getElementById("digit-8");
const nine = document.getElementById("digit-9");








