let buttons = document.querySelectorAll(".buttons");
let topScreen = document.getElementById("top-screen");
let botScreen = document.getElementById("bot-screen");
let operand = "";
let result = "";

function display(input) {
    topScreen.innerHTML = botScreen.innerHTML;
    // Special Cases
    if (input == "C") {
        topScreen.innerHTML = "";
        botScreen.innerHTML = "";
    }
    if (input == "=") {
        calculate();
    }
    // Number Buttons
    else if (input != "C" && input != "=") {
        botScreen.style.fontSize = "30px";
        botScreen.innerHTML += input;
    }
}

function calculate() {
    result = eval(botScreen.innerHTML);
    botScreen.innerHTML = result;
    topScreen += " = " + result;
}

buttons.forEach(function(buttonClick) {
    buttonClick.addEventListener("click", () => {
        display(buttonClick.value);
    });
});