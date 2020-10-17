function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    if( b == 0 ){
        return NaN
    } else {
        return a / b
    }
}

function operate(operator,a, b) {
    switch(operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break;
        case '*':
            return multiply(a, b)
            break;
        case '/':
            return divide(a, b)
            break;
        default:
            return undefined
    }

}

let operator = ""
let firstValue = null
let secondValue = null

function updateScreenValue(value){
    switch(value){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(operator == ""){
                // Working on first value
                if(firstValue == null){
                    firstValue = value
                } else{
                    firstValue += value
                }
            } else {
                // Working on second value
                if(secondValue == null){
                    secondValue = value
                } else {
                    secondValue += value
                }
            }
            break;
        case '+':
            operator = '+'
            break;
        case '-':
            operator = '-'
            break;
        case '/':
            operator = '/'
            break;
        case '*':
            operator = '*'
            break;
        case '=':
            document.getElementById('screen-value').innerHTML = operate(operator, Number(firstValue), Number(secondValue))
            operator = ""
            firstValue = null
            secondValue = null
            break;
    }
    if(value == '='){

    } else if(secondValue == null){
        document.getElementById('screen-value').innerHTML = firstValue
    } else {
        document.getElementById('screen-value').innerHTML = secondValue
    }
}

