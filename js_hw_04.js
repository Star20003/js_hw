// JS session 3

// HW_1

function F_convertor (Celsius) {
    const Fahrenheit = (9* Celsius) / 5 + 32 
    return Fahrenheit
}
const C = +prompt('Enter degree in Celsius:')
console.log('degree in Fahrenheit: ' + F_convertor(C) + ' °F')

// HW_2

function search (text,word) {
    if (text.includes(word)) {
        return true
    }
    return false
}
const text = prompt('Enter a sentence of your choice:')
const word = prompt('Enter your search term:')

if (search(text,word) == true) {
    console.log('word (', word, ') exists in the given sentence')
} else {
    throw Error('Given word doesnt exist')
}

// HW_3

const product = {
    'modelName': 'ASUS VivoBook' ,
    'screenSize': 15.6 ,
    'Color': 'Slate gray' ,
    'hardDiskSize': 1 ,
    'CPU': 'corei7' ,
    'Ram': 8 ,
    'OperatingSystem': 10 ,
    'batteriesIncluded': false ,

    addToCard : function() {
        
    } ,

    removeFromCard : function() {
        
    }
}
console.log(product)