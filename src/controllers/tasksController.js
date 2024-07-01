import { tasks } from "../models/tasks";
import { clearDisplayed, changeLabelto } from "./general";
import { createTask } from "../views/modals/taskForm";
import { hide } from "../views/modals/displayOptions";
import newTaskCard from '../models/taskCard'

const minView = document.querySelector('#min-view');

function displayTasks(){
    for(const task of tasks){
        minView.appendChild(newTaskCard(task));
    };
};

function submitTask(modalToHide, otherModalTohide){
    createTask();   
    clearDisplayed();
    displayTasks();
    changeLabelto('Home');
    hide(modalToHide, otherModalTohide);
};

export { displayTasks, submitTask }