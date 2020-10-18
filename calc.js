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
            return add(Number(a), Number(b))
            break;
        case '-':
            return subtract(Number(a), Number(b))
            break;
        case '*':
            return multiply(Number(a), Number(b))
            break;
        case '/':
            return divide(Number(a), Number(b))
            break;
        default:
            return undefined
    }

}
let lastValue = ""
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
            lastValue = value
            break;
        case '.':
            if(secondValue == null){
                if(firstValue.includes('.')){
                    //Already has a '.' don't do anything
                } else {
                    firstValue += '.'
                }
            } else {
                if(secondValue.includes('.')){
                    //Already has a '.' don't do anything
                } else {
                    secondValue += '.'
                }
            }
            break;
        case '+':
            if(operator == ""){
                operator = '+'
            } else {
                if(firstValue != null && secondValue != null){
                    firstValue = operate(operator, firstValue, secondValue)
                    secondValue = null
                } 
                if(operator != '+'){
                    operator = '+'
                }
             }
            lastValue = value
            break;
        case '-':
            if(operator == ""){
                operator = '-'
            } else {
                if(firstValue != null && secondValue != null){
                    firstValue = operate(operator, firstValue, secondValue)
                    secondValue = null
                }
                if(operator != '-'){
                    operator = '-'
                }   
             }
            lastValue = value
            break;
        case '/':
            if(operator == ""){
                operator = '/'
            } else {
                if(firstValue != null && secondValue != null){
                    firstValue = operate(operator, firstValue, secondValue)
                    secondValue = null
                } 
                if(operator != '/'){
                    operator = '/'
                }  
             }
            lastValue = value
            break;
        case '*':
            if(operator == ""){
                operator = '*'
            } else {
                if(firstValue != null && secondValue != null){
                    firstValue = operate(operator, firstValue, secondValue)
                    secondValue = null
                }   
                if(operator != '*'){
                    operator = '*'
                }
             }
            lastValue = value
            break;
        case '=':
            if(firstValue != null && secondValue != null && operator != null){
                document.getElementById('screen-value').innerHTML = operate(operator, Number(firstValue), Number(secondValue)).toFixed(4)
                operator = ""
                firstValue = null
                secondValue = null
            }
            lastValue = value
            break;
        case 'clear':
            operator = ""
            firstValue = null
            secondValue = null
            document.getElementById('screen-value').innerHTML = '0'
            break;

    }
    if(value == '='){
        // We already changed element's value
    } else if(value == 'clear') {
        // Also don't do anything
    } else if(secondValue == null){
        document.getElementById('screen-value').innerHTML = firstValue
    } else {
        document.getElementById('screen-value').innerHTML = secondValue
    }
}

