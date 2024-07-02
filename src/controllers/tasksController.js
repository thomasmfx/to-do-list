import { tasks } from "../models/tasks";
import { clearDisplayed, changeLabelto } from "./general";
import { createTask } from "../views/modals/taskForm";
import { hide } from "../views/modals/displayOptions";
import newTaskCard from '../models/taskCard'

const minView = document.querySelector('#min-view');
const fullView = document.querySelector('#full-view');

function displayTasks(){
    for(const task of tasks){
        minView.appendChild(newTaskCard(task));
    };
};

function displayProjectTasks(proj){
    const projectTasks = document.createElement('div')
    projectTasks.id = 'full-project-tasks-div';
    for(const task of proj.tasks){
        let card = newTaskCard(task);
        card.removeAttribute('data-index');
        card.dataset.fullIndex = task.id;
        projectTasks.appendChild(card);
    };
    fullView.appendChild(projectTasks)
};

function check(checkbox, index){
    const tasksInMinView = document.querySelector(`[data-index='${index}']`);
    const tasksInProjectExpanded = document.querySelector(`[data-full-index='${index}']`);
    const taskExpanded = document.querySelector(`[data-expanded='${index}']`);
    tasks[index].changeIsDone();

    // Card exists in:
    // minview AND expanded
    if(tasksInMinView !== null && taskExpanded !== null){
        if(checkbox.checked === true){
            tasksInMinView.children[1].firstChild.checked = true;
            taskExpanded.children[1].lastChild.checked = true;
        } else {
            tasksInMinView.children[1].firstChild.checked = false;
            taskExpanded.children[1].lastChild.checked = false;
        };
    };

    // minView AND fullView
    if(tasksInMinView !== null && tasksInProjectExpanded !== null){
        if(checkbox.checked === true){
            tasksInMinView.children[1].firstChild.checked = true;
            tasksInProjectExpanded.children[1].firstChild.checked = true;
        } else {
            tasksInMinView.children[1].firstChild.checked = false;
            tasksInProjectExpanded.children[1].firstChild.checked = false;
        };
    };

    // Only minView
    if(tasksInMinView !== null && tasksInProjectExpanded === null){
        if(checkbox.checked === true) {
            tasksInMinView.children[1].firstChild.checked = true;
        } else {
            tasksInMinView.children[1].firstChild.checked = false;
        };
    };

    // Only fullView
    if(tasksInProjectExpanded !== null && tasksInMinView === null){
        if(checkbox.checked === true) {
            tasksInProjectExpanded.children[1].firstChild.checked = true;
        } else {
            tasksInProjectExpanded.children[1].firstChild.checked = false;
        };
    };
};

function submitTask(modalToHide, otherModalTohide){
    createTask();   
    clearDisplayed();
    displayTasks();
    changeLabelto('Home');
    hide(modalToHide, otherModalTohide);
};

export { displayTasks, displayProjectTasks, submitTask, check }