// JS session 2

const firstNumber = +prompt('Enter your first number:')
const operator = prompt('Enter the operator of your choice:')
const secondNumber = +prompt('Enter your second number:')

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log('You have entered an invalid amount for your first or second number')
} else {
    if (operator === '+') {
        const result1 = firstNumber + secondNumber
        console.log(firstNumber + ' + ' + secondNumber + ' = ' + result1)
    }
    else if (operator === '-') {
        const result2 = firstNumber - secondNumber
        console.log(firstNumber + ' - ' + secondNumber + ' = ' + result2)
    }
    else if (operator === '*') {
        const result3 = firstNumber * secondNumber
        console.log(firstNumber + ' * ' + secondNumber + ' = ' + result3)
    }
    else if (operator === '/') {
        const result4 = firstNumber / secondNumber
        console.log(firstNumber + ' / ' + secondNumber + ' = ' + result4)
    }
    else {
        console.log('Invalid Operator')
    }
}
