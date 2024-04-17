function calculate(operation) {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;
    const resultElement = document.getElementById('result');
    let result;

    if (!inputA || !inputB || isNaN(inputA) || isNaN(inputB)) {
        resultElement.textContent = 'Please enter valid numbers for A and B.';
        return;
    }

    switch (operation) {
        case 'SUM':
            result = parseFloat(inputA) + parseFloat(inputB);
            break;
        case 'SUBTRACT':
            result = parseFloat(inputA) - parseFloat(inputB);
            break;
        case 'MULTIPLY':
            result = parseFloat(inputA) * parseFloat(inputB);
            break;
        case 'DIVIDE':
            if (parseFloat(inputB) === 0) {
                resultElement.textContent = 'Cannot divide by zero.';
                return;
            }
            result = parseFloat(inputA) / parseFloat(inputB);
            break;
        default:
            result = 'Invalid operation';
    }

    resultElement.textContent = `Result: ${result}`;
}

function resetInputs() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').textContent = '';
}