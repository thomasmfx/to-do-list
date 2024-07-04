import { displayForm, unhide, hide, baseModal } from "./displayOptions";
import { clearDisplayed } from "../../controllers/general";
import { displayProjects } from "../../controllers/projectsController";
import expandProject from "../full-view/expandProject";
import projects from "../../storage/projectsStorage";

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
    const storedProjects = projects.getAllProjects()
    projToEditID = i;
    unhide(baseModal);
    displayForm(editProjForm);
    const title = document.querySelector('input#edit-project-title');
    const link = document.querySelector('input#edit-project-link');
    const description = document.querySelector('textarea#edit-project-description');
    title.value = storedProjects[i].title
    link.value = storedProjects[i].link
    description.textContent = storedProjects[i].description
};

function saveChanges(index){
    const storedProjects = projects.getAllProjects()
    const title = document.querySelector('input#edit-project-title');
    const link = document.querySelector('input#edit-project-link').value;
    const description = document.querySelector('textarea#edit-project-description').value;
    let filter = storedProjects.filter(proj => proj.title === title.value); 

    if(title.value !== '' && 
        (!filter[0] || title.value === storedProjects[index].title)
    ){
        projects.editProject(index, title.value, link, description);
        hide(baseModal, editProjForm);
        clearDisplayed();
        displayProjects();
        updateIfExpanded(index);
        title.classList.remove('invalid');
    } else {
        alert("Can't have two projects with the same title")
        title.classList.add('invalid');
    };
};

function updateIfExpanded(dataIndex){
    const expanded = document.querySelector(`[data-proj-index='${dataIndex}']`);
    if(expanded !== null){
        expandProject(dataIndex);
    };
};

loadEditForm();