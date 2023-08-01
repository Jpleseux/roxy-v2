function addToInput(x) {
    document.getElementById('input').value += x;
}

function clearInput() {
    document.getElementById('input').value = '';
}

function backspace() {
    var input = document.getElementById('input').value;
    document.getElementById('input').value = input.substring(0, input.length - 1);
}

function calculate() {
    var input = document.getElementById('input').value;
    var result = eval(input);
    document.getElementById('input').value = result;
}
