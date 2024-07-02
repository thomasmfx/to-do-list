import { projects } from "../models/projects";
import { clearDisplayed } from "./general";
import { removeAllExpanded } from "../views/full-view/expandedCommon";
import { displayProjects } from "./projectsController";

function removeProjectDinamically(index){
    const projectInMinView = document.querySelector(`[data-proj-id='${index}']`);
    const projectExpanded = document.querySelector(`[data-proj-index='${index}']`);
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