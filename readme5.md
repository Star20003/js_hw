# javascript homework fifth session

This codes prompts the user to enter a number and then creates an array called 'randomStuffs'. It then generates that many random objects with three properties: 
a random number using Math.random() method which generates a random decimal number between 0 and 1, 
a random date using Js built-in Date object that generates a date within last 10 billion seconds. The expression +new Date creates a new date object and converts it to a number representing the number of milliseconds since january1, 1970. The expression Math.floor(Math.random() * 10000000000) generates a random number between 0 and 10 billion and rounds it down to an integer. This random number is then subtracted from the current date , resulting in a new date that is somewhere within the last 10 billion milliseconds, 
and a random word from a predefined array (generating a random index number within the range of array length using Math.floor(Math.random()) method).
Each of these objects is then pushed into the 'randomStuffs' array. Finally, the contents of the 'randomStuffs' array are logged to the console.