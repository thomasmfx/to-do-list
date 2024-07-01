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
    const cardMinimized = document.querySelector(`[data-index='${index}']`);
    const cardExpanded = document.querySelector(`[data-full-index='${index}']`);
    tasks[index].changeIsDone();

    // Card exists in:
    // minView AND fullView
    if(cardMinimized !== null && cardExpanded !== null){
        if(checkbox.checked === true){
            cardMinimized.children[1].firstChild.checked = true;
            cardExpanded.children[1].firstChild.checked = true;
        } else {
            cardMinimized.children[1].firstChild.checked = false;
            cardExpanded.children[1].firstChild.checked = false;
        };
    };

    // Only minView
    if(cardMinimized !== null && cardExpanded === null){
        if(checkbox.checked === true) {
            cardMinimized.children[1].firstChild.checked = true;
        } else {
            cardMinimized.children[1].firstChild.checked = false;
        };
    };

    // Only fullView
    if(cardExpanded !== null && cardMinimized === null){
        if(checkbox.checked === true) {
            cardExpanded.children[1].firstChild.checked = true;
        } else {
            cardExpanded.children[1].firstChild.checked = false;
        };
    };

    // I'll probabbly have to come back for when the feature to expand tasks is added
};

function submitTask(modalToHide, otherModalTohide){
    createTask();   
    clearDisplayed();
    displayTasks();
    changeLabelto('Home');
    hide(modalToHide, otherModalTohide);
};

export { displayTasks, displayProjectTasks, submitTask, check }