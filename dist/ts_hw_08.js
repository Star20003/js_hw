"use strict";
const titleName = document.querySelector('#title');
const inputText = document.querySelector('#description');
const submitButton = document.querySelector('#button');
const taskTitle = document.querySelector('#task-title');
const taskDescription = document.querySelector('#task-desc');
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', () => {
    if (titleName && inputText) {
        const note = {
            title: titleName === null || titleName === void 0 ? void 0 : titleName.value,
            description: inputText === null || inputText === void 0 ? void 0 : inputText.value
        };
        taskTitle.innerHTML += `<span> ${note.title} </span>`;
        taskDescription.innerHTML += `<span> ${note.description} </span>`;
    }
});
//# sourceMappingURL=ts_hw_08.js.map