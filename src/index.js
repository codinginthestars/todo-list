import '../src/styles.css';


// Button Event Listeners 
const newProjectBtn = document.getElementById("new-project");
const newTaskBtn = document.getElementById("new-task");

newProjectBtn.addEventListener("click", () => {
    const projectForm = document.getElementById("project-form");

    projectForm.showModal();
});

newTaskBtn.addEventListener("click", () => {
    const taskForm = document.getElementById("task-form");

    taskForm.showModal();
});

const addBtn = document.getElementById("add");
const addTwoBtn = document.getElementById("addTwo");
const cancelBtn = document.getElementById("cancel");
const cancelTwoBtn = document.getElementById("cancelTwo");

cancelBtn.addEventListener("click", () => {
    const taskForm = document.getElementById("task-form");

    taskForm.close();
})

cancelTwoBtn.addEventListener("click", () => {
    const projectForm = document.getElementById("project-form");

    projectForm.close();
})