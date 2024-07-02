import { tasks } from "../../models/tasks";
import { projects } from "../../models/projects";
import { displayForm, unhide, hide, getCurrentExpanded } from "./displayOptions";
import { clearDisplayed, clearProjectTasks } from "../../controllers/general";
import { loadAvailableProjects } from "./taskForm";
import { displayProjectTasks, displayTasks } from "../../controllers/tasksController";
import { removeAllExpanded } from "../full-view/expandedCommon";
import expandTask from "../full-view/expandedTask";

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
    loadAvailableProjects()
    indexTaskToEdit = i;
    unhide(baseModal);
    displayForm(editTaskForm);
    const title = document.querySelector('input#edit-task-title');
    const project = document.querySelector('select#edit-projects-dropdown');
    const dueDate = document.querySelector('input#edit-due-date');
    const priority = document.querySelector('select#edit-task-priority');
    const notes = document.querySelector('textarea#edit-task-notes');
    title.value = tasks[i].title
    project.value = tasks[i].project
    dueDate.value = tasks[i].dueDate
    priority.value = tasks[i].priority
    notes.textContent = tasks[i].notes
};

function saveChanges(index){
    const title = document.querySelector('input#edit-task-title');
    const project = document.querySelector('select#edit-projects-dropdown').value;
    const dueDate = document.querySelector('input#edit-due-date').value;
    const priority = document.querySelector('select#edit-task-priority').value;
    const notes = document.querySelector('textarea#edit-task-notes').value;
    let lastTitle = tasks[index].title;

    if(title.value !== ''){
        tasks[index].edit(title.value, project, dueDate, priority, notes);
        hide(baseModal, editTaskForm);
        updateIfInMinView(index);
        updateIfExpanded(index);
        updateIfInFullView(index);
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
    if(fullView !== null){
        clearProjectTasks()
        displayProjectTasks(projects[getCurrentExpanded()]);
    };
};

loadEditTaskForm();


// Checar/mudar se:

// minView: remove e display
// fullView: remove e display project na fullview
// expanded: remove e display expanded