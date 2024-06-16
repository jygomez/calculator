"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const screen = document.querySelector('.calculator-screen');
    // Set initial screen value to zero
    screen.value = '0';
    // Function to validate input within the range
    function isValidInput(input) {
        return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '+/-', '-', '*', '/', '=', 'Enter', 'Backspace', '⌫', 'C', 'Escape'].includes(input);
    }
    function isValueinRange(input) {
        return input >= -9999.99 && input <= 9999.99;
    }
    // Function to handle calculator logic
    function handleInput(value) {
        if (screen.value.includes('Error')) {
            screen.value = ''; // Clear error message when new input is detected
        }
        let lastInput = screen.value.charAt(screen.value.length - 1);
        // Check if the value is an operator and the last input was also an operator
        if (['+', '-', '*', '/', '.'].includes(value) && lastInput && ['+', '-', '*', '/', '.'].includes(lastInput)) {
            // Ignore the input if it's an operator and the last input was also an operator
            return;
        }
        // Prevent multiple decimal points in a number
        if (value === '.') {
            // Split the expression by operators to get the current number being entered
            let parts = screen.value.split(/[\+\-\*\/]/);
            const currentNumber = parts[parts.length - 1];
            if (currentNumber.includes('.')) {
                return;
            }
        }
        if (value === '=' || value === 'Enter') {
            try {
                let result = eval(screen.value);
                result = Math.trunc(result * 100) / 100;
                if (!isValueinRange(result)) {
                    screen.value = 'Error: Out of range';
                }
                else {
                    screen.value = result.toString();
                }
            }
            catch (error) {
                screen.value = 'Error: ' + error.message;
            }
        }
        else if (value === 'C' || value === 'Escape') {
            screen.value = '0'; // Reset screen to zero when 'C' is pressed
        }
        else if (value === '⌫' || value === 'Backspace') {
            screen.value = screen.value.slice(0, -1) || '0'; // Prevent empty screen
        }
        else if (value === '+/-') {
            // Toggle the sign of the last number in the expression
            let expression = screen.value;
            const match = expression.match(/-?(\d+\.?\d*)$/);
            if (match) {
                const lastNumber = match[0];
                if (lastNumber.charAt(0) === '-') {
                    // Remove the negative sign from the last number
                    expression = expression.slice(0, -lastNumber.length) + lastNumber.slice(1);
                }
                else {
                    // Add a negative sign to the last number
                    expression = expression.slice(0, -lastNumber.length) + '-' + lastNumber;
                }
                if (!isValueinRange(parseFloat(expression))) {
                    screen.value = 'Error: Out of range';
                }
                else {
                    screen.value = expression;
                }
            }
        }
        else {
            if (screen.value === '0' && value !== '.') {
                screen.value = ''; // Remove leading zero if screen value is zero
            }
            const newValue = screen.value + value;
            if (isValueinRange(parseFloat(newValue))) {
                screen.value = newValue;
            }
            else {
                screen.value = 'Error: Out of range';
            }
        }
    }
    // Event listener for button clicks
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            var _a;
            const value = (_a = button.textContent) !== null && _a !== void 0 ? _a : '';
            if (isValidInput(value)) {
                handleInput(value);
            }
        });
    });
    // Event listener for keyboard input
    document.addEventListener('keydown', function (event) {
        const value = event.key;
        if (isValidInput(value)) {
            event.preventDefault();
            handleInput(value);
        }
    });
});
