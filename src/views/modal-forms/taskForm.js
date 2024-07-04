import { Task } from '../../models/tasks';
import { displayForm, getCurrentExpanded, baseModal } from "./displayOptions";
import { submitTask } from "../../controllers/tasksController";
import expandProject from '../full-view/expandProject';
import projects from '../../storage/projectsStorage';

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
    return task
};

function loadAvailableProjects(){
    let storedProjects = projects.getAllProjects();
    const options = document.querySelector('#projects-dropdown');
    const editOptions = document.querySelector('#edit-projects-dropdown');

    while (options.lastChild.value !== '') {
        options.removeChild(options.lastChild);
    }
    for(let i = 0; i < storedProjects.length; i++){
        options.appendChild(createOption(storedProjects[i].title));
    };
    
    while (editOptions.lastChild.value !== '') {
        editOptions.removeChild(editOptions.lastChild);
    }
    for(let i = 0; i < storedProjects.length; i++){
        editOptions.appendChild(createOption(storedProjects[i].title));
    };
};

function createOption(value){
    let option = document.createElement('option');
    option.value = value;
    option.text = value;
    return option;
};

function updateProjectDisplayed(){
    const fullView = document.querySelector('#full-view');
    if(fullView.firstElementChild.id === 'full-project-div'){
        expandProject(getCurrentExpanded());
    };
};

loadTaskForm();

export { loadAvailableProjects }