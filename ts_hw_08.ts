type notetype = {
    title : string;
    description : string;
}
    
const titleName = document.querySelector<HTMLInputElement> ('#title')
const inputText = document.querySelector<HTMLTextAreaElement> ('#description')
const submitButton = document.querySelector<HTMLButtonElement> ('#button')
const taskTitle = document.querySelector<HTMLDivElement> ('#task-title')
const taskDescription = document.querySelector<HTMLDivElement> ('#task-desc')

submitButton?.addEventListener('click', () => {

    if (titleName && inputText){
        const note : notetype = {
        title : titleName?.value ,
        description : inputText?.value
    }
        taskTitle!.innerHTML += `<span> ${note.title} </span>`
        taskDescription!.innerHTML += `<span> ${note.description} </span>`
    }
})




