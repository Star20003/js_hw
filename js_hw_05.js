const randomStuffs = []

const count = +prompt('How many random items you want?')

for (let i = 0; i < count; i++) {
    
    const addArray = () => {

        const items = {
            ranNum : Math.random() ,
            ranDate : new Date(+new Date() - Math.floor(Math.random() * 10000000000)) ,
            ranWord : ['python','php','css','javascript','html','c++','perl','java','ruby','swift','sql'][Math.floor(Math.random() * ['python','php','css','javascript','html','c++','perl','java','ruby','swift','sql'].length)]
        }
        randomStuffs.push(items)
    }
    addArray()
}

console.log('random stuffs:', randomStuffs)
