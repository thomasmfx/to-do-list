import { projects } from "../models/projects";
import { tasks, filterTasks } from "../models/tasks";
import { clearDisplayed } from "./general";
import { removeAllExpanded } from "../views/full-view/expandedCommon";
import { displayProjects } from "./projectsController";
import { updateIds } from "./general";

function removeProjectDinamically(index){
    const projectInMinView = document.querySelector(`[data-proj-id='${index}']`);
    const projectExpanded = document.querySelector(`[data-proj-index='${index}']`);
    let filter = tasks.filter(task => task.project !== projects[index].title);
    filterTasks(filter);
    updateIds(tasks);

    projects[index].delete()
    if(projectInMinView !== null){
        clearDisplayed();
        displayProjects();
    };
    if(projectExpanded !== null){
        removeAllExpanded(true);
    };
};

export { removeProjectDinamically }