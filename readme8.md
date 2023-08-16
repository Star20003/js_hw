# # Typescript homework eighth session

This code includes a form for adding daily tasks and a section for displaying the task title and description. 

The form contains input fields for the task title and a textarea for the task description. It also includes a button for adding the task. The input and textarea elements have various classes applied to them for styling purposes.

The section below the form has two div elements with IDs "task-title" and "task-desc". These elements will be used to display the task title and description respectively.

At the end of the document, there is a script tag that includes a JavaScript file "ts_hw_08.js" located in the "./dist" directory. This script file is responsible for handling the functionality of adding tasks and displaying them in the section below the form.

There is a TypeScript script file that adds functionality to the HTML document described earlier. It uses event listeners to listen for a click event on the submitButton element.

When the submit button is clicked, the code checks if the titleName and inputText elements exist. If they do, it creates a new object called "note" with properties "title" and "description" set to the values of the titleName and inputText elements respectively.

Then, it appends a new span element containing the note's title to the taskTitle element using innerHTML. Similarly, it appends a new span element containing the note's description to the taskDescription element.

In summary, this code captures the values entered in the form fields, creates an object with those values, and displays them in the designated section of the HTML document.