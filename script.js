const display = document.getElementById('display');

let operator = null;
let firstNumber = null;
let secondNumber = null;
let cont = true;



const clearButton = document.querySelector('.reset');
clearButton.addEventListener('click', clear);


function clear() {
    display.value = null;
    currentInput = null;
    firstNumber = null;
    operator = null;
}

function num(number) {
    if(firstNumber == null){
        firstNumber = number;
        display.value = firstNumber;
    } 
    else if(operator == null){
        firstNumber = (firstNumber*10)+number;
        display.value = firstNumber;
    } 
    else if(secondNumber == null){
        secondNumber = number;
        display.value = firstNumber + " " + operator + " " + secondNumber;        
    }
    else{
        secondNumber = (secondNumber*10) + number;
        display.value = firstNumber + " " + operator + " " + secondNumber;
    }
}
function op(oper) {
    secondNumber = null;
    display.value = operator;
    if(firstNumber == null) {
        display.value = "First number needed";
        return;
    }
    if(oper == '+'){  
        operator = '+';
        display.value = firstNumber + " +";

    } else if(oper == '-'){
        operator = '-';
        display.value = firstNumber + " -";
    
    } else if(oper == 'x'){
        operator = 'x';
        display.value = firstNumber + " x";
    
    } else if(oper == '/'){
        operator = '/';
        display.value = firstNumber + " /";
    
    }

}

function calculate() {
    if (operator === '+') {
        currentInput = firstNumber + secondNumber;
    } 
    else if (operator === '-') {
        currentInput = firstNumber - secondNumber;
    } 
    else if (operator === 'x') {
        currentInput = firstNumber * secondNumber;   
    } 
    else if (operator === '/') {
        if (secondNumber === 0) {
            currentInput = 'Zero Error';
        } 
        else {
            currentInput = firstNumber / secondNumber;
        }
    } 
    else {
        currentInput = 'Invalid operation';
    } 
    firstNumber = currentInput;
    secondNumber = null;
    display.value = currentInput;
    cont = true;
}
