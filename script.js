function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
function backspace(){
    let display = document.getElementById("display");
            display.value = display.value.slice(0, -1);
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value); // Fixes calculation issue
    } catch (e) {
        display.value = "Error"; // Show "Error" if the expression is invalid
    }
}

