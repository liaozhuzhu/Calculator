let buttons = document.querySelectorAll(".buttons");
let topScreen = document.getElementById("top-screen");
let botScreen = document.getElementById("bot-screen");
let result = "";
let func = "";
let finished = false;

function display(input) {
    if  (input == "+" || input == "-" || input == "*" || input == "/") {
        if (botScreen.innerHTML == "") {
            if (result != "") {
                botScreen.innerHTML = result + botScreen.innerHTML;
            }
        }
    }
    // Special Cases
    if (input == "=") {
        calculate();
    }
    if (input == "C") {
        clear();
    }
    if (input == "back") {
        backspace();
    }
    if (input == "ans") {
        useAnswer();
    }
    // Number Buttons
    if (input != "C" && input != "=" && input != "back" && input != "ans") {
        if (finished) {
            if  (input == "+" || input == "-" || input == "*" || input == "/") {
                finished = false;
            }
            else {
                botScreen.innerHTML = "";
                finished = false;
            }
        }
        botScreen.style.fontSize = "30px";
        botScreen.innerHTML += input;
        topScreen.innerHTML = botScreen.innerHTML;
    }
}

function clear() {
    topScreen.innerHTML = "";
    botScreen.innerHTML = "";
    finished = false;
}

function calculate() {
    if (finished) {
        return;
    }
    if (botScreen.innerHTML == "") {
        return;
    }
    else {
        try {
            result = Math.round(eval(botScreen.innerHTML)*1000)/1000;
            botScreen.innerHTML = result;
            topScreen.innerHTML += "=" + result;
            finished = true; 
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert("ERROR");
            }
        }
    }   
}

function useAnswer() {
    if (finished) {
        topScreen.innerHTML = botScreen.innerHTML;
        finished = false;
    }
    topScreen.innerHTML += result;
    botScreen.innerHTML += result;
}

function backspace() {
    let str = botScreen.innerHTML.slice(0, -1);
    botScreen.innerHTML = str;
    topScreen.innerHTML = str;
}

// Buttons / Key Press
buttons.forEach(function(buttonClick) {
    buttonClick.addEventListener("click", () => {
        display(buttonClick.value);
    });
});

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.keyCode == 13 || key.keyCode == 187) {
        key.preventDefault();
        calculate();
    }
    if (key.keyCode == 67) {
        clear();
    }
    if (key.keyCode == 65) {
        useAnswer();
    }
    // Operands
    if (key.keyCode == 189) {
        display(String.fromCharCode(45));
    }
    if (key.keyCode == 191) {
        display(String.fromCharCode(47));
    }
    if (key.keyCode >= 48 && key.keyCode <= 57) {
        display(String.fromCharCode(key.keyCode));
    }
}