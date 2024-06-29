import { tasksArr, projectsArr } from "../index.js";
import { Project, displayProjects, pushProject } from "./projectControls.js";
import { Task, pushTask, displayTasks } from "./taskControls.js";
import { changeTabLabelTo } from "./tabs.js";


export default function modals(){
    const createBtn = document.querySelector('#create');
    const formsModal = document.querySelector('#modal-forms');

    const optionsModal = document.querySelector('#modal-options');
    const createTaskBtn = document.querySelector('#create-task');
    const createProjBtn = document.querySelector('#create-project');
    const taskForm = document.querySelector('#task-form');
    const addTask = document.querySelector('#add-task');
    const projForm = document.querySelector('#project-form');
    const addProj = document.querySelector('#add-project');

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
        addProjectOptions();
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
    const taskForm = document.querySelector('#task-form');
    const projForm = document.querySelector('#project-form');


    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.visibility = 'hidden';
            taskForm.style.display = 'none';
            projForm.style.display = 'none';
        };
    };
};

function submitTask() {
    const formsModal = document.querySelector('#modal-forms');
    const taskForm = document.querySelector('#task-form');

    const title = document.querySelector('#task-title');
    const project = document.querySelector('#projects-dropdown');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#task-priority');
    const notes = document.querySelector('#task-notes');

    if(title.value !== '') {
        let task = new Task(title.value, project.value, dueDate.value, priority.value, notes.value);
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
    const formsModal = document.querySelector('#modal-forms');
    const projForm = document.querySelector('#project-form');


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

function addProjectOptions(){
    const availableProjects = document.querySelector('#projects-dropdown');
    for(let i = 0; i < projectsArr.length; i++){
        if(availableProjects.lastChild.textContent !== 'None'){
            console.log(availableProjects.lastChild);
            availableProjects.lastChild.remove();
        };
    };
    for(let i = 0; i < projectsArr.length; i++){
        availableProjects.appendChild(createOption(projectsArr[i].title));
    };
};

function createOption(value){
    let option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    return option;
};