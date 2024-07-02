import { Project, projects } from "../../models/projects";
import { displayForm, hide } from "./displayOptions";
import { submitProject } from "../../controllers/projectsController";

const baseModal = document.querySelector('#options-modal');
const createProjBtn = document.querySelector('#create-project');
const projForm = document.querySelector('#project-form');
const submitProjBtn = document.querySelector('#add-project');

export function loadProjForm(){
    createProjBtn.addEventListener('click', () => {
        displayForm(projForm);
    });

    submitProjBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const title = document.querySelector('input#project-title');
        let filter = projects.filter(proj => proj.title === title.value);
        if(!filter[0]){
            submitProject(projForm, baseModal);
            title.classList.remove('invalid');
        } else {
            title.classList.add('invalid');
        };
    });
};

export function createProj(){
    const title = document.querySelector('input#project-title').value;
    const link = document.querySelector('input#project-link').value;
    const description = document.querySelector('textarea#project-description').value;

    new Project(title, link, description);
};

loadProjForm();