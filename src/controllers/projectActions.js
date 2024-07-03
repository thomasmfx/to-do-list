import { projects } from "../models/projects";
import { tasks, filterTasks } from "../models/tasks";
import { clearDisplayed } from "./general";
import { removeAllExpanded } from "../views/full-view/expandedCommon";
import { displayProjects } from "./projectsController";

function removeProjectDinamically(index){
    const projectInMinView = document.querySelector(`[data-proj-id='${index}']`);
    const projectExpanded = document.querySelector(`[data-proj-index='${index}']`);
    const taskExpanded = document.querySelector('#task-full');
    let filter = tasks.filter(task => task.project !== projects[index].title);
    let removed = tasks.filter(task => task.project === projects[index].title);
    for(const tsk of removed){
        if(taskExpanded !== null){
            if(tsk.id === Number(taskExpanded.dataset.expanded)){
                removeAllExpanded(true);
            } else {
                console.log(tsk.id)
            };
        }
    };
    filterTasks(filter);    
    projects[index].delete();

    if(projectInMinView !== null){
        clearDisplayed();
        displayProjects();
    };
    if(projectExpanded !== null){
        removeAllExpanded(true);
    };
};

export { removeProjectDinamically }