# javascript homework sixth session

This code defines three functions: addPerson, removePerson, and editPerson. These functions take an array of objects called "persons" as an argument and perform different actions on it based on user input. 

Person array consists of 4 objects representing people with their name,age,ID, and field

The addPerson function adds a new person object to the array if there are less than 9 objects in the array. Otherwise, it logs a message saying that the limit has been reached.

The removePerson function prompts the user for an index and removes the person object at that index from the array using the splice method.

The editPerson function prompts the user for an index, a key (name, age, or field), and a new value. It then updates the value of that key for the person object at the specified index in the array.

The code also includes a prompt asking the user what action they want to perform (add, remove, or edit). Depending on their choice, it calls the corresponding function and logs the new array after the action has been performed. If the user does not select an action, it throws an error.