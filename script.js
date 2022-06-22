let buttons = document.querySelectorAll(".buttons");
let topScreen = document.getElementById("top-screen");
let botScreen = document.getElementById("bot-screen");
let operand = "";
let result = "";
let rerun = false;
let func = "";

function display(input) {
    if (rerun == true) {
        botScreen.innerHTML = "";
        rerun = false;
    }
    // Special Cases
    if (input == "C") {
        topScreen.innerHTML = "";
        botScreen.innerHTML = "";
    }
    if (input == "=") {
        calculate();
    }
    if (input == "ans") {
        useAnswer();
    }
    // Number Buttons
    else if (input != "C" && input != "=") {
        botScreen.style.fontSize = "30px";
        botScreen.innerHTML += input;
        topScreen.innerHTML = botScreen.innerHTML;
    }
}

function calculate() {
    if (botScreen.innerHTML == "" || rerun == true) {
        return;
    }
    result = Math.round(eval(botScreen.innerHTML)*1000)/1000;
    botScreen.innerHTML = result;
    ;
    topScreen.innerHTML += "=" + result;
    rerun = true;
}

function useAnswer() {
    topScreen.innerHTML += result;
    botScreen.innerHTML += result;
}

buttons.forEach(function(buttonClick) {
    buttonClick.addEventListener("click", () => {
        display(buttonClick.value);
    });
});