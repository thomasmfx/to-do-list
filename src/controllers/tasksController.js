import { tasks } from "../models/tasks";
import { projects } from "../models/projects";
import { clearDisplayed, changeLabelto } from "./general";
import { createTask } from "../views/modals/taskForm";
import { hide } from "../views/modals/displayOptions";
import newTaskCard from '../models/taskCard'
import { removeAllExpanded } from "../views/full-view/expandedCommon";

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

function clearProjectTasks(){
    const fullView = document.querySelector('#full-view');
    fullView.lastElementChild.remove();
};

function submitTask(modalToHide, otherModalTohide){
    createTask();   
    clearDisplayed();
    displayTasks();
    changeLabelto('Home');
    hide(modalToHide, otherModalTohide);
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
            taskExpanded.children[2].lastChild.checked = true;
        } else {
            tasksInMinView.children[1].firstChild.checked = false;
            taskExpanded.children[2].lastChild.checked = false;
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

function removeTask(index){
    const tasksInMinView = document.querySelector(`[data-index='${index}']`);
    const tasksInProjectExpanded = document.querySelector(`[data-full-index='${index}']`);
    const taskExpanded = document.querySelector(`[data-expanded='${index}']`);
    const projectExpanded = document.querySelector(`[data-proj-index]`);
    console.log(projectExpanded)
    tasks[index].delete();

    if(tasksInMinView !== null){
        clearDisplayed();
        displayTasks();
    }
    if(tasksInProjectExpanded !== null){
        clearProjectTasks();
        displayProjectTasks(projects[projectExpanded.dataset.projIndex]);
    }
    if(taskExpanded !== null){
        removeAllExpanded();
    }
};

export { displayTasks, displayProjectTasks, submitTask, check, removeTask }