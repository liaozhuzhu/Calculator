let buttons = document.querySelectorAll(".buttons");
let botScreen = document.getElementById("bot-screen");

function display(input) {
    if (input = "C") {
        botScreen.innerHTML = "";
    }
    if (input = "=") {
        calculate();
    }
    else {
        botScreen.style.fontSize = "30px";
        botScreen.innerHTML += input;
        formula(input);
    }
}

function formula(input) {
    
}

function calculate(answer) {

}

buttons.forEach(function(buttonClick) {
    buttonClick.addEventListener("click", () => {
        display(buttonClick.value);
    });
});