const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "+", "/", "*", "-", "=" ]
let output = "";


// const calculate = (btnValue) => {
//     console.log(btnValue); 
// };

//Define function to calculate based on clicked
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        //If output has '%' , replace with "/100" before evaluating.
        output = eval(output.replace("%", "/100"));
    }
    else if(btnValue === "AC"){
        output = " ";
    }
    else if(btnValue === "DEL") {
        //if the DEL is clicked, remove the last character from the output
        output = output.toString().slice(0, -1);
    }
    else {
        //If output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

//Add eventlistner to buttons, call calculate() on click
buttons.forEach((button) => {
    //Button click listner calls calculate() with Dataset value as arguments
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});