import { clearCards } from "../index.js";
import { Task, pushTask, displayTasks } from "./taskControls.js";

const createBtn = document.querySelector('#create');

const optionsModal = document.querySelector('#modal-options');
const createTaskBtn = document.querySelector('#create-task');
const createProjBtn = document.querySelector('#create-project');

const formsModal = document.querySelector('#modal-forms');
const taskForm = document.querySelector('#task-form');
const addTask = document.querySelector('#add-task');
const projForm = document.querySelector('#project-form');
const addProj = document.querySelector('#add-project');

function modals(){
    addTask.addEventListener('click', function(event) {
        event.preventDefault();
    });

    addProj.addEventListener('click', function(event) {
        event.preventDefault();
    });
    
    createBtn.addEventListener('click', () => {
        optionsModal.style.visibility = 'visible';
        closeModalBheavior(optionsModal);
    });
    
    createTaskBtn.addEventListener('click', () => {
        optionsModal.style.visibility = 'hidden';
        formsModal.style.visibility = 'visible';
        taskForm.reset();
        taskForm.style.display = 'block';
        closeModalBheavior(formsModal);
    });
    
    createProjBtn.addEventListener('click', () => {
        optionsModal.style.visibility = 'hidden';
        formsModal.style.visibility = 'visible';
        projForm.reset();
        projForm.style.display = 'block';
        closeModalBheavior(formsModal);
    });
};

function closeModalBheavior(modal) {
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.visibility = 'hidden';
            taskForm.style.display = 'none';
            projForm.style.display = 'none';
        };
    };
};

// function submitTask() {
//     const title = document.querySelector('#task-title').value;
//     const project = document.querySelector('#projects-dropdown').value;
//     const priority = document.querySelector('#task-priority').value;
//     const dueDate = document.querySelector('#due-date').value;
//     const description = document.querySelector('#project-desrcription').value;

//     let task = new Task(title, project)
// };


export default modals;