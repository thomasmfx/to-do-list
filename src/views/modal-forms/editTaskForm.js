import { displayForm, unhide, hide, getCurrentExpanded } from "./displayOptions";
import { clearDisplayed, clearProjectTasks } from "../../controllers/general";
import { loadAvailableProjects } from "./taskForm";
import { displayProjectTasks, displayTasks } from "../../controllers/tasksController";
import { removeAllExpanded } from "../full-view/expandedCommon";
import expandTask from "../full-view/expandTask";
import tasks from "../../storage/tasksStorage";
import projects from "../../storage/projectsStorage";

const baseModal = document.querySelector('#options-modal');
const editTaskForm = document.querySelector('#edit-task-form');
const editTaskBtn = document.querySelector('#edit-task');

let indexTaskToEdit;

function loadEditTaskForm(){
    editTaskBtn.addEventListener('click', (event) => {
        event.preventDefault();
        saveChanges(indexTaskToEdit);
    });
};

export function displayEditTaskForm(i){
    const storedTasks = tasks.getAllTasks();
    indexTaskToEdit = i;
    loadAvailableProjects();
    unhide(baseModal);
    displayForm(editTaskForm);
    const title = document.querySelector('input#edit-task-title');
    const project = document.querySelector('select#edit-projects-dropdown');
    const dueDate = document.querySelector('input#edit-due-date');
    const priority = document.querySelector('select#edit-task-priority');
    const notes = document.querySelector('textarea#edit-task-notes');
    title.value = storedTasks[i].title
    project.value = storedTasks[i].project
    dueDate.value = storedTasks[i].dueDate
    priority.value = storedTasks[i].priority
    notes.textContent = storedTasks[i].notes
};

function saveChanges(index){
    const title = document.querySelector('input#edit-task-title');
    const project = document.querySelector('select#edit-projects-dropdown').value;
    const dueDate = document.querySelector('input#edit-due-date').value;
    const priority = document.querySelector('select#edit-task-priority').value;
    const notes = document.querySelector('textarea#edit-task-notes').value;

    if(title.value !== ''){
        tasks.editTask(index, title.value, project, dueDate, priority, notes);
        hide(baseModal, editTaskForm);
        updateIfInMinView(index);
        updateIfExpanded(index);
        updateIfInFullView(index);
        updateIfProjectIsExpanded()
        title.classList.remove('invalid');
    } else {
        alert("Can't have two tasks with the same title")
        title.classList.add('invalid');
    };
}

function updateIfExpanded(id){
    const expanded = document.querySelector(`[data-expanded='${id}']`);
    if(expanded !== null){
        removeAllExpanded();
        expandTask(id);
    };
};

function updateIfInMinView(id){
    const minview = document.querySelector(`[data-index='${id}']`);
    if(minview !== null){
        clearDisplayed();
        displayTasks();
    };
};

function updateIfInFullView(id){
    const fullView = document.querySelector(`[data-full-index='${id}']`);
    let projectsArr = projects.getAllProjects()
    if(fullView !== null){
        clearProjectTasks();
        displayProjectTasks(projectsArr[getCurrentExpanded()]);
    };
};

function updateIfProjectIsExpanded(){
    const expanded = document.querySelector('#full-view');
    let projectsArr = projects.getAllProjects();
    if(expanded.firstElementChild.firstElementChild !== null){
        const projectIndex = expanded.firstElementChild.firstElementChild.dataset.projIndex;
        clearProjectTasks();
        displayProjectTasks(projectsArr[projectIndex]);
    };
};

loadEditTaskForm();