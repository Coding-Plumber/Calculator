function attachClickHandlers(buttons, userInput) {
    for (let button of buttons) {
      button.addEventListener("click", (event) => {
        const buttonElement = event.target;
        const buttonText = buttonElement.textContent;
        if (userInput.textContent === "0") {
          userInput.textContent = "";
        }
        if (userInput.textContent.length < 9) {
          userInput.textContent += buttonText;
        }
      });
    }
  }
  
const buttons = document.querySelectorAll(".digits");
const userInput = document.getElementById("user-input");
  
attachClickHandlers(buttons, userInput);



const clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", () => {
    const input = userInput.textContent;
    if(input.length > 1) {
        userInput.textContent = input.slice(0, -1);
    } else {
        userInput.textContent = "0";
    }
   
});



const resetValue = userInput.textContent = "0";
const allClear = document.getElementById("all-clear");
allClear.addEventListener("click", () => {
    userInput.textContent ="0";
})




