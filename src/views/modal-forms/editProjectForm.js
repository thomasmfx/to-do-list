import { projects } from "../../models/projects";
import { displayForm, unhide, hide, baseModal } from "./displayOptions";
import { clearDisplayed } from "../../controllers/general";
import { displayProjects } from "../../controllers/projectsController";
import { tasks } from "../../models/tasks";
import expandProject from "../full-view/expandProject";

const editProjForm = document.querySelector('#edit-project-form');
const editProjBtn = document.querySelector('#edit-project');

let projToEditID;

function loadEditForm(){
    editProjBtn.addEventListener('click', (event) => {
        event.preventDefault();
        saveChanges(projToEditID);
    });
};

export function displayProjectForm(i){
    projToEditID = i;
    unhide(baseModal);
    displayForm(editProjForm);
    const title = document.querySelector('input#edit-project-title');
    const link = document.querySelector('input#edit-project-link');
    const description = document.querySelector('textarea#edit-project-description');
    title.value = projects[i].title
    link.value = projects[i].link
    description.textContent = projects[i].description
};

function saveChanges(projId){
    const title = document.querySelector('input#edit-project-title');
    const link = document.querySelector('input#edit-project-link').value;
    const description = document.querySelector('textarea#edit-project-description').value;
    let filter = projects.filter(proj => proj.title === title.value); 
    let lastTitle = projects[projId].title;

    if(title.value !== '' && 
        (!filter[0] || title.value === projects[projId].title)
    ){
        projects[projId].edit(title.value, link, description);
        updateTaskProject(lastTitle, title.value);
        hide(baseModal, editProjForm);
        clearDisplayed();
        displayProjects();
        updateIfExpanded(projId);
        title.classList.remove('invalid');
    } else {
        alert("Can't have two projects with the same title")
        title.classList.add('invalid');
    };
}

function updateTaskProject(lastTitle, newTitle){
    for(const task of tasks){
        if(task.project === lastTitle){
            task.changeProject(newTitle);
        };
    };
};

function updateIfExpanded(dataIndex){
    const expanded = document.querySelector(`[data-proj-index='${dataIndex}']`);
    if(expanded !== null){
        expandProject(dataIndex);
    };
};

loadEditForm();
