import { tasks } from "../models/tasks";
import { clearDisplayed, changeLabelto } from "./general";
import { createTask } from "../views/modal-forms/taskForm";
import { hide } from "../views/modal-forms/displayOptions";
import newTaskCard from '../models/taskCard'

const minView = document.querySelector('#min-view');
const fullView = document.querySelector('#full-view');

function displayTasks(){
    for(const task of tasks){
        minView.appendChild(newTaskCard(task));
    };
};

function displayProjectTasks(proj){
    const projectTasks = document.createElement('div');
    projectTasks.id = 'full-project-tasks-div';
    for(const task of tasks){
        if(task.project === proj.title){
            let card = newTaskCard(task);
            card.removeAttribute('data-index');
            card.dataset.fullIndex = task.id;
            projectTasks.appendChild(card);
        };
    };
    fullView.appendChild(projectTasks);
};

function submitTask(modalToHide, otherModalTohide){
    createTask();   
    clearDisplayed();
    displayTasks();
    changeLabelto('Home');
    hide(modalToHide, otherModalTohide);
};
export { displayTasks, displayProjectTasks, submitTask }