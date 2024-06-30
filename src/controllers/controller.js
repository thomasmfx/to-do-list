import { projects } from "../models/projects.js";
import { tasks } from '../models/tasks.js';
import newTaskCard from "../models/taskCard.js";

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
        minView.appendChild(newTaskCard(task))
    };
};

export function clearDisplayed(){
    if(minView.firstElementChild){
        do{
            minView.firstElementChild.remove();
        } while(minView.firstElementChild);
    }
};
