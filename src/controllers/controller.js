import { projects } from "../models/projects.js";
import { tasks } from '../models/tasks.js';
import newTaskCard from "../models/taskCard.js";
import create from "../others/domCreator.js";
import newProjectCard from "../models/projectCard.js";
import { createTask } from "../views/modals/taskForm.js";
import { createProj } from "../views/modals/projForm.js";
import { hide } from "../views/modals/displayOptions.js";

const minView = document.querySelector('#min-view');
// This function is called in objects everytime an object is added/removed
export function updateIds(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].id = i;
    };
};

export function linkTasksToProjects(){
    for(const task of tasks){
        for(const proj of projects){
            if(task.project === proj.title){
                proj.addTask(task);
            };
        };
    };
};

export function displayTasks(){
    for(const task of tasks){
        minView.appendChild(newTaskCard(task));
    };
};

export function displayProjects(){
    for(const proj of projects){
        minView.appendChild(newProjectCard(proj));
    };
};

export function clearDisplayed(){
    // Since the tab label is one of the childs, there's the need to create it again
    let label = document.querySelector('#current-tab').textContent;
    if(minView.firstElementChild){
        do{
            minView.firstElementChild.remove();
        } while(minView.firstElementChild);
        minView.appendChild(create.elWithId('div', 'current-tab', label));
    };
};

export function changeLabelto(what){
    document.querySelector('#current-tab').textContent = what;
};

export function submitTask(modalToHide, otherModelToHide){
    createTask();   
    clearDisplayed();
    displayTasks();
    changeLabelto('Home');
    hide(modalToHide);
    hide(otherModelToHide);
};

export function submitProject(modalToHide, otherModelToHide){
    createProj();
    clearDisplayed();
    displayProjects();
    changeLabelto('Projects');
    hide(modalToHide);
    hide(otherModelToHide);
};