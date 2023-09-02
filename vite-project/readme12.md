# Typescript homework twelfth session

At first I define a function called "Box" that takes in props (short for properties) as input. The props object has three properties: "element", "attribute", and "children". 

The function creates an HTML element based on the "element" property provided in the props object, adds any attributes specified in the "attribute" property, and appends any child elements specified in the "children" property. 

The function then returns the newly created HTML element. 

This function is actually used to dynamically create HTML elements with specific attributes and child elements.

After that I create a form by calling Box function each time. The form includes a header with a title and two buttons for adding and showing contacts. The buttons have different styles defined using tailwind CSS classes.

The form also includes elements for adding a new contact, including input fields for full name and phone number, and radio buttons for selecting storage options (SIM or Device).

The following codes are defining a user interface using the Box library to create HTML elements. The UI consists of a fixed drawer element contains a header with a title "Contacts" and a close button. It also contains two unordered list elements, one for the header and one for the content.


At the end I create an empty array to store contacts and uses query selectors to get input fields, buttons, and list elements from the HTML document. When the "addContactButton" is clicked, the code creates a new contact object with the input field values and adds it to the contacts array. The code then creates a new list item element with the contact information and appends it to the unordered list element. The "showContactsButton" and "closeContactsButton" toggle the visibility of the drawer element containing the contact list.

Overall, these codes are creating a simple UI component for displaying a list of contacts in a drawer that can be opened and closed.

ps. this project is being built by Vite development tool
