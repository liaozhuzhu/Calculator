let buttons = document.querySelectorAll(".buttons");
let botScreen = document.getElementById("bot-screen");

function display(input) {
    if (input != ("C")) {
        botScreen.style.fontSize = "30px";
        botScreen.innerHTML = input;
    }
    else {
        botScreen.innerHTML = "";
    }
}

buttons.forEach(function(buttonClick) {
    buttonClick.addEventListener("click", () => {
        display(buttonClick.value);
    });
});