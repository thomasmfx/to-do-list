import { Task } from '../../models/tasks';
import { projects } from '../../models/projects';
import { displayForm, getCurrentExpanded, baseModal } from "./displayOptions";
import { submitTask } from "../../controllers/tasksController";
import expandProject from '../full-view/expandProject';

const createTaskBtn = document.querySelector('#create-task');
const taskForm = document.querySelector('#task-form');
const submitTaskBtn = document.querySelector('#add-task')

export function loadTaskForm(){
    createTaskBtn.addEventListener('click', () => {
        loadAvailableProjects();
        displayForm(taskForm);
    });
    
    submitTaskBtn.addEventListener('click', (event) => {
        event.preventDefault();
        submitTask(taskForm, baseModal);
        updateProjectDisplayed();
    });
};

export function createTask(){
    const title = document.querySelector('input#task-title').value;
    const project = document.querySelector('select#projects-dropdown').value;
    const priority = document.querySelector('select#task-priority').value;
    const dueDate = document.querySelector('input#due-date').value;
    const notes = document.querySelector('textarea#task-notes').value;

    let task = new Task(title, project, dueDate, priority, notes);
    addToProject(task);
    return task
};

function addToProject(task){
    for(const proj of projects){
        if(proj.title === task.project){
            proj.addTask(task);
        };
    };
};

function loadAvailableProjects(){
    const availableProjects = document.querySelector('#projects-dropdown');
    const editTaskFormAvailableProjects = document.querySelector('#edit-projects-dropdown');
    let options = availableProjects.childNodes;
    for(const option of options){
        if(option.value !== '' || option.textContent !== 'None')
            option.remove();
    }
    for(let i = 0; i < projects.length; i++){
        availableProjects.appendChild(createOption(projects[i].title));
    };

    let editOptions = editTaskFormAvailableProjects.childNodes;
    for(const option of editOptions){
        if(option.value !== '' || option.textContent !== 'None')
            option.remove();
    }
    for(let i = 0; i < projects.length; i++){
        editTaskFormAvailableProjects.appendChild(createOption(projects[i].title));
    };
};

function createOption(value){
    let option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    return option;
};

function updateProjectDisplayed(){
    const fullView = document.querySelector('#full-view');
    if(fullView.firstElementChild.id === 'full-project-div'){
        expandProject(getCurrentExpanded());
    };
};

loadTaskForm();

export { loadAvailableProjects, addToProject }