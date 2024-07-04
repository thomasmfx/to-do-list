import { clearDisplayed, clearProjectTasks } from "./general";
import { displayTasks, displayProjectTasks } from './tasksController'
import { removeAllExpanded } from "../views/full-view/expandedCommon";
import tasks from "../storage/tasksStorage";
import projects from "../storage/projectsStorage";

function checkDinamically(checkbox, index){
    const tasksInMinView = document.querySelector(`[data-index='${index}']`);
    const tasksInProjectExpanded = document.querySelector(`[data-full-index='${index}']`);
    const taskExpanded = document.querySelector(`[data-expanded='${index}']`);
    tasks.changeIsDone(index);

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

function removeTaskDinamically(index){
    const tasksInMinView = document.querySelector(`[data-index='${index}']`);
    const tasksInProjectExpanded = document.querySelector(`[data-full-index='${index}']`);
    const taskExpanded = document.querySelector(`[data-expanded='${index}']`);
    const projectExpanded = document.querySelector(`[data-proj-index]`);
    tasks.removeTask(index)

    if(tasksInMinView !== null){
        clearDisplayed();
        displayTasks();
    }
    if(tasksInProjectExpanded !== null){
        clearProjectTasks();
        displayProjectTasks(projects.getAllProjects());
    }
    if(taskExpanded !== null){
        removeAllExpanded(true);
    }
};

export { checkDinamically, removeTaskDinamically }