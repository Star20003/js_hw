// JS session 3

// HW_1

function calculator (firstNumber,operator,secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return ('You have entered an invalid amount for your first or second number')
    } else {
        if (operator === '+') {
            const result1 = firstNumber + secondNumber
            return (firstNumber + ' + ' + secondNumber + ' = ' + result1)
        }
        else if (operator === '-') {
            const result2 = firstNumber - secondNumber
            return (firstNumber + ' - ' + secondNumber + ' = ' + result2)
        }
        else if (operator === '*') {
            const result3 = firstNumber * secondNumber
            return (firstNumber + ' * ' + secondNumber + ' = ' + result3)
        }
        else if (operator === '/') {
            const result4 = firstNumber / secondNumber
            return (firstNumber + ' / ' + secondNumber + ' = ' + result4)
        }
        else {
            return ('Invalid Operator')
        }
    }
}

const firstNumber = +prompt('Enter your first number:')
const operator = prompt('Enter the operator of your choice:')
const secondNumber = +prompt('Enter your second number:')

console.log(calculator(firstNumber,operator,secondNumber))

// HW_2

function upper_case (sentence) {
    return sentence.toUpperCase()
}
 
const sentence = prompt('Enter a sentence in lower case letters: ')
console.log(upper_case(sentence))

// HW_3

function average (score1, score2, score3, score4, score5) {
    const sum = score1 + score2 + score3 + score4 + score5
    const avg = sum / 5
    if (avg < 12) {
        console.log('Academic Probation (' , avg , ')')
    }
    else {
        console.log('Passed (' , avg , ')')
    }
}

const score1 = +prompt('Enter your first score:')
const score2 = +prompt('Enter your second score:')
const score3 = +prompt('Enter your third score:')
const score4 = +prompt('Enter your fourth score:')
const score5 = +prompt('Enter your fifth score:')
average(score1, score2, score3, score4, score5)