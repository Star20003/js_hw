# Typescript homework eleventh session

This homework is the same as tenth session homework with some minor changes:

First Adding a typescript file which exports three functions: "createListItem", "validateInputFields", and "validateCreateContact". 

The "createListItem" function takes in a "contactInfo" object and returns an HTML li element that displays the contact's name and phone number along with an avatar. It sets the class names and styling for the li element and its child elements.

The "validateInputFields" function takes in a variable number of input fields and uses the "every" array method to check if every field is truthy. It does this by using the double negation operator (!!field.toString()) to convert each field to a boolean value and then checking if it is true or false. It returns a boolean value indicating whether all fields are truthy or not.

The "validateCreateContact" function takes in a "contactInfo" object and uses the "validateInputFields" function to check if the contact name and phone number fields are truthy.

Second calling the "validateCreateContact" function in addContactEvent function in events file to check if the input fields for the contact name and phone number are truthy. If they are not, it displays an alert message and throws an error plus calling the "createListItem" function to create an HTML li element. It then appends this li element to an unordered list element (ulElement) on the web page.