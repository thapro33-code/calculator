function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function appendNumber(number) {
    let display = document.getElementById('display').value;
    
    // Allow only one decimal point in a number
    if (number === '.') {
        if (display === '' || /[+\-×÷]$/.test(display)) {
            document.getElementById('display').value += '0.';
        } else if (!/\.\d*$/.test(display)) {
            document.getElementById('display').value += number;
        }
    } else {
        document.getElementById('display').value += number;
    }
}

function appendOperator(operator) {
    let display = document.getElementById('display').value;
    let lastChar = display.slice(-1);
    
    if (['+', '-', '×', '÷', '%'].includes(lastChar)) {
        document.getElementById('display').value = display.slice(0, -1) + operator;
    } else {
        document.getElementById('display').value += operator;
    }
}

function calculateResult() {
    let display = document.getElementById('display').value;
    
    // Replace operators for eval
    display = display.replace(/×/g, '*').replace(/÷/g, '/');
    
    try {
        let result = eval(display);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function applyPercentage() {
    let display = document.getElementById('display').value;
    
    if (display) {
        const regex = /(\d+\.?\d*)$/;
        const match = display.match(regex);
        
        if (match) {
            const lastNumber = match[0];
            const percentage = parseFloat(lastNumber) / 100;
            
            document.getElementById('display').value = display.replace(regex, percentage);
        }
    }
}

function toggleBackground() {
    const body = document.body;
    const currentColor = window.getComputedStyle(body).backgroundColor;
    
    if (currentColor === 'rgb(255, 255, 255)') { // White
        body.style.backgroundColor = '#1e1e1e'; // Dark background
    } else {
        body.style.backgroundColor = '#ffffff'; // White background
    }
}