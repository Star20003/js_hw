let persons =  [
    {
        name: 'Stateira Mehtari',
        age: 20,
        ID: Math.floor(Math.random() * 10000 ),
        field: 'Computer Engineering'
    },
    {
        name: 'Roya Ghanei',
        age: 20,
        ID: Math.floor(Math.random() * 10000 ),
        field: 'Pharmacy'
    },
    {
        name: 'Negin Arjmand',
        age: 22,
        ID: Math.floor(Math.random() * 10000 ),
        field: 'Microbiology'
    },
    {
        name: 'Sohail Barvar',
        age: 19,
        ID: Math.floor(Math.random() * 10000 ),
        field: 'Computer Engineering'
    }
]

const addPerson = (newPerson,persons) => {

    if (persons.length < 9) {
        persons.push(newPerson)
    }
    else{
        console.log('You have reached the limit(8)')
    }
} 

const removePerson = (persons) => {
    const indexPerson = +prompt('which person you wanna remove? (enter index)')
    switch (indexPerson) {
        case 0:
            persons.splice(0,1)
            break;
        case 1:
            persons.splice(1,2)
            break;
        case 2:
            persons.splice(2,3)
            break;
        case 3:
            persons.splice(3,4)
            break;
        case 4:
            persons.splice(4,5)
            break;
        case 5:
            persons.splice(5,6)
            break;
        case 6:
            persons.splice(6,7)
            break;
        
    
        default:
            break;
    }
}

const editPerson = (persons) => {
    const indexPerson = +prompt('which person you wanna edit? (enter index)')
    const key = prompt('which item you wanna chane?')
    const newValue = prompt('enter new value:')
    switch (indexPerson) {
        case 0:
            if (key === 'name') {
                persons[0].name = newValue
            } else if (key === 'age') {
                persons[0].age = newValue
            } else if (key === 'field') {
                persons[0].field = newValue
            } else {
                throw Error ('Invalid key name, Try Again!')
            }
            break;
        case 1:
            if (key === 'name') {
                persons[1].name = newValue
            } else if (key === 'age') {
                persons[1].age = newValue
            } else if (key === 'field') {
                persons[1].field = newValue
            } else {
                throw Error ('Invalid key name, Try Again!')
            }
            break;
        case 2:
            if (key === 'name') {
                persons[2].name = newValue
            } else if (key === 'age') {
                persons[2].age = newValue
            } else if (key === 'field') {
                persons[2].field = newValue
            } else {
                throw Error ('Invalid key name, Try Again!')
            }
            break;
        case 3:
            if (key === 'name') {
                persons[3].name = newValue
            } else if (key === 'age') {
                persons[3].age = newValue
            } else if (key === 'field') {
                persons[3].field = newValue
            } else {
                throw Error ('Invalid key name, Try Again!')
            }
            break;
        case 4:
            if (key === 'name') {
                persons[4].name = newValue
            } else if (key === 'age') {
                persons[4].age = newValue
            } else if (key === 'field') {
                persons[4].field = newValue
            } else {
                throw Error ('Invalid key name, Try Again!')
            }
            break;
        case 5:
            if (key === 'name') {
                persons[5].name = newValue
            } else if (key === 'age') {
                persons[5].age = newValue
            } else if (key === 'field') {
                persons[5].field = newValue
            } else {
                throw Error ('Invalid key name, Try Again!')
            }
            break;
        case 6:
            if (key === 'name') {
                persons[6].name = newValue
            } else if (key === 'age') {
                persons[6].age = newValue
            } else if (key === 'field') {
                persons[6].field = newValue
            } else {
                throw Error ('Invalid key name, Try Again!')
            }
            break;
        case 7:
            if (key === 'name') {
                persons[7].name = newValue
            } else if (key === 'age') {
                persons[7].age = newValue
            } else if (key === 'field') {
                persons[7].field = newValue
            } else {
                throw Error ('Invalid key name, Try Again!')
            }
            break;
        default:
            console.log('Out Of Range Index')
            break;
    }
}  

const action = +prompt('Hi, what do you wanna do? 1.add 2.remove 3.edit')
if (action === 1){
    const newPerson = {
        name : prompt('Enter the persons name:'),
        age : prompt('Enter the persons age:'),
        ID : Math.floor(Math.random() * 10000 ),
        field : prompt('Enter the persons field of study:')
    }
    addPerson(newPerson,persons)
    console.log('Your new array', persons)
} 
else if (action === 2){
    removePerson(persons)
    console.log('Your new array', persons)
}
else if (action === 3){
    editPerson(persons)
    console.log('Your new array', persons)
}
else{
    throw Error ('Select an action!')
}
