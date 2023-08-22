# Typescript homework tenth session

This code includes a simple contact list application that allows the user to input a contact's name and phone number. The form also has two radio buttons for storing the contact wether in SIM or device storage. The code defines two buttons - one for adding the contact to the list and another for showing the list of contacts.

The HTML code uses various CSS classes from Tailwind CSS library to style the form and buttons. The "Add Contact" button stores the input values in a ContactsList array and adds the contact to the list displayed in the "Show Contacts" drawer. The "Show Contacts" button toggles the drawer to display the list of contacts.

The drawer contains a header with a close button and a table-like structure to display the contacts' information. The table has three columns for displaying the name, phone number, and avatar of each contact. The contacts are displayed as a list using an unordered list element with each contact displayed as a list item.

This file also includes a script tag linking to a TypeScript file called "ts_hw_10.ts" compiled into JavaScript and saved in the "dist" folder.

The src folder contains several typescript modules in addition to html and input css file.

The types file defines the types used in the application. The contactsType type represents an individual contact with properties like ID, avatar, name, phone number, and stored location. The contactsListType type is an array of contactsType objects.

The states file initializes an empty array called contactsList to store the contacts.

The importer file imports various elements from the HTML document using querySelector. These elements include input fields for name and number, a checkbox for storage location, a button to add a new contact, a button to show the contacts list, a button to close the contacts list drawer, and a ul element to display the contacts.

And finally the events file defines several event handlers for adding a contact, showing the contacts list, and hiding the contacts list.

The addContactEvent function creates a new contact object using the values entered in the input fields. It generates a unique ID using crypto.randomUUID(). It then pushes the new contact object into the contactsList array. It also creates HTML elements to display the contact information and appends them to the ul element.

The showContactsEvent function removes a CSS class to slide in the contacts list drawer from the right side.

The hideContactsEvent function adds a CSS class to slide out the contacts list drawer to the right side.

Finally, the code attaches event listeners to the add contact button, show contacts button, and close contacts button. When these buttons are clicked, they will trigger the respective event handlers.

Overall, this code provides a simple and user-friendly interface for adding and displaying contacts in a web application.
