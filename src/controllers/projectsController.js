import { projects } from "../models/projects";
import { clearDisplayed, changeLabelto } from "./general";
import { createProj } from "../views/modal-forms/projForm";
import { hide } from "../views/modal-forms/displayOptions";
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