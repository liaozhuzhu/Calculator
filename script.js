let buttons = document.querySelectorAll(".buttons");
let topScreen = document.getElementById("top-screen");
let botScreen = document.getElementById("bot-screen");
let result = "";
let func = "";
let finished = false;

function display(input) {
    // Special Cases
    if (input == "=") {
        calculate();
    }
    if (input == "C") {
        clear();
    }
    if (input == "ans") {
        useAnswer();
    }
    // Number Buttons
    else if (input != "C" && input != "=") {
        if (finished) {
            botScreen.innerHTML = "";
            finished = false;
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
        result = Math.round(eval(botScreen.innerHTML)*1000)/1000;
        botScreen.innerHTML = result;
        topScreen.innerHTML += "=" + result;
        finished = true;
    }   
}

function useAnswer() {
    topScreen.innerHTML += result;
    botScreen.innerHTML += result;
}

// Buttons / Key Press
buttons.forEach(function(buttonClick) {
    buttonClick.addEventListener("click", () => {
        display(buttonClick.value);
    });
});

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.keyCode >= 106 || key.keyCode <= 111 && key.keyCode != 16) {
        if (key.shiftKey) {
            if (key.keyCode == 54) {
                display()
            }
        }
    }

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
    if (key.keyCode >= 48 && key.keyCode <= 57) {
        display(String.fromCharCode(key.keyCode));
  }
}