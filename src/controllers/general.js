import { projects } from "../models/projects";
import { tasks } from '../models/tasks';
import create from "../others/domCreator";

const minView = document.querySelector('#min-view');
// This function is called in objects everytime an object is added/removed
function updateIds(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].id = i;
    };
};

function linkTasksToProjects(){
    for(const task of tasks){
        for(const proj of projects){
            if(task.project === proj.title){
                proj.addTask(task);
            };
        };
    };
};

function clearDisplayed(){
    // Since the tab label is one of the childs, there's the need to create it again
    let label = document.querySelector('#current-tab').textContent;
    if(minView.firstElementChild){
        do{
            minView.firstElementChild.remove();
        } while(minView.firstElementChild);
        minView.appendChild(create.elWithId('div', 'current-tab', label));
    };
};

function changeLabelto(what){
    document.querySelector('#current-tab').textContent = what;
};

export { updateIds, linkTasksToProjects, clearDisplayed, changeLabelto }