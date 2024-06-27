import { clearCards } from "../index.js";
import { Project, displayProjects, pushProject } from "./projectControls.js";
import { Task, pushTask, displayTasks } from "./taskControls.js";
import { changeTabLabelTo } from "./tabs.js";

const createBtn = document.querySelector('#create');

const optionsModal = document.querySelector('#modal-options');
const createTaskBtn = document.querySelector('#create-task');
const createProjBtn = document.querySelector('#create-project');

const formsModal = document.querySelector('#modal-forms');
const taskForm = document.querySelector('#task-form');
const addTask = document.querySelector('#add-task');
const projForm = document.querySelector('#project-form');
const addProj = document.querySelector('#add-project');

export default function modals(){
    addTask.addEventListener('click', function(event) {
        event.preventDefault();
        submitTask();
    });

    addProj.addEventListener('click', function(event) {
        event.preventDefault();
        submitProject();
    });
    
    createBtn.addEventListener('click', () => {
        optionsModal.style.visibility = 'visible';
        taskForm.style.display = 'none';
        projForm.style.display = 'none';
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

function submitTask() {
    const title = document.querySelector('#task-title');
    const project = document.querySelector('#projects-dropdown');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#task-priority');
    const description = document.querySelector('#project-description');

    if(title.value !== '') {
        let task = new Task(title.value, project.value, dueDate.value, priority.value, description.value);
        pushTask(task);
        displayTasks();
        changeTabLabelTo('Home');
        
        formsModal.style.visibility = 'hidden';
        taskForm.style.display = 'none';
        title.style.border = '2px solid var(--borders-gray)';
    } else {
        title.style.border = '2px solid var(--red)';
    };
};

function submitProject() {
    const title = document.querySelector('#project-title');
    const link = document.querySelector('#project-link');
    const description = document.querySelector('#project-title');

    if(title.value !== '') {
        let proj = new Project(title.value, link.value, description.value)
        pushProject(proj);
        displayProjects();
        changeTabLabelTo('Projects');
        
        formsModal.style.visibility = 'hidden';
        projForm.style.display = 'none';
        title.style.border = '2px solid var(--borders-gray)';
    } else {
        title.style.border = '2px solid var(--red)';
    };

};