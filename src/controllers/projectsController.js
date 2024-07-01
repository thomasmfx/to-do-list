import { projects } from "../models/projects";
import { clearDisplayed, changeLabelto } from "./general";
import { createProj } from "../views/modals/projForm";
import { hide } from "../views/modals/displayOptions";
import newProjectCard from '../models/projectCard'

const minView = document.querySelector('#min-view');

function displayProjects(){
    for(const proj of projects){
        minView.appendChild(newProjectCard(proj));
    };
};

function submitProject(modalToHide, otherModalToHide){
    createProj();
    clearDisplayed();
    displayProjects();
    changeLabelto('Projects');
    hide(modalToHide, otherModalToHide);
};

export { displayProjects, submitProject }