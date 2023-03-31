
function updateInput(symbol) {
    let userInput = document.getElementById('user-input').value;
    userInput = userInput + symbol;
    document.getElementById('user-input').value = userInput;    
}

function clearInput() {
    let userInput = document.getElementById('user-input').value;
    userInput = '';
    document.getElementById('user-input').value = userInput;    
}

function deleteInput() {
    let userInput = document.getElementById('user-input').value;
    userInput = userInput.slice(0, -1)
    document.getElementById('user-input').value = userInput;
}

function calculateInput() {
    let userInput = document.getElementById('user-input').value;
    result = eval(userInput);
    document.getElementById('user-input').value = result;
}

function calculateSquareInput() {
    let userInput = document.getElementById('user-input').value;
    result = eval(userInput + '**(1/2)');
    document.getElementById('user-input').value = result;
}

document.getElementById('button-7').addEventListener('click', function() {
    updateInput('7');
});

document.getElementById('button-8').addEventListener('click', function() {
    updateInput('8');
});

document.getElementById('button-9').addEventListener('click', function() {
    updateInput('9');
});

document.getElementById('button-div').addEventListener('click', function() {
    updateInput('/');
});

document.getElementById('button-4').addEventListener('click', function() {
    updateInput('4');
});

document.getElementById('button-5').addEventListener('click', function() {
    updateInput('5');
});

document.getElementById('button-6').addEventListener('click', function() {
    updateInput('6');
});

document.getElementById('button-mul').addEventListener('click', function() {
    updateInput('*');
});

document.getElementById('button-1').addEventListener('click', function() {
    updateInput('1');
});

document.getElementById('button-2').addEventListener('click', function() {
    updateInput('2');
});

document.getElementById('button-3').addEventListener('click', function() {
    updateInput('3');
});

document.getElementById('button-add').addEventListener('click', function() {
    updateInput('+');
});

document.getElementById('button-0').addEventListener('click', function() {
    updateInput('0');
});

document.getElementById('button-sq').addEventListener('click', function() {
    calculateSquareInput();
});

document.getElementById('button-pow').addEventListener('click', function() {
    updateInput('**');
});

document.getElementById('button-sub').addEventListener('click', function() {
    updateInput('-');
});

document.getElementById('button-clear').addEventListener('click', function() {
    clearInput();
});

document.getElementById('button-decimal').addEventListener('click', function() {
    updateInput('.');
});

document.getElementById('button-open-bracket').addEventListener('click', function() {
    updateInput('(');
});

document.getElementById('button-close-bracket').addEventListener('click', function() {
    updateInput(')');
});

document.getElementById('button-delete').addEventListener('click', function() {
    deleteInput();
});

document.getElementById('button-calculate').addEventListener('click', function() {
    calculateInput();
});

document.addEventListener('keypress', (event) => {
    switch(event.code) {
        case 'Digit1':
            updateInput('1');
            break;
        case 'Digit2':
            updateInput('2');
            break;
        case 'Digit3':
            updateInput('3');
            break;
        case 'Digit4':
            updateInput('4');
            break;
        case 'Digit5':
            updateInput('5');
            break;
        case 'Digit6':
            updateInput('6');
            break;
        case 'Digit7':
            updateInput('7');
            break;
        case 'Digit8':
            if (event.key == '*') {
                updateInput('*');
                break;
            }
            updateInput('8');
            break;
        case 'Digit9':
            if (event.key == '(') {
                updateInput('(');
                break;
            }
            updateInput('9');
            break;
        case 'Digit0':
            if(event.key == ')') {
                updateInput(')');
                break;
            }
            updateInput('0');
            break;
        case 'Equal':
            if(event.key == '+') {
                updateInput('+');
            }
            calculateInput();
            break;
        case 'Minus':
            updateInput('-');
            break;
        case 'Slash':
            updateInput('/');
            break;
        case 'Period':
            updateInput('.');
            break;
        case 'KeyC':
            clearInput();
            break;
        case 'Backspace':
            deleteInput();
            break;
        case 'Enter':
            calculateInput();
            break;
    }
}, false);

document.addEventListener('keydown', (event) => {
    if(event.code == 'Backspace') {
        deleteInput();
    }
}, false);