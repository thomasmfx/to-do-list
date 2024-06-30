import { Project } from "../../models/projects";
import { submitProject } from "../../controllers/controller";
import { displayForm, hide } from "./displayOptions";

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
        submitProject(projForm, baseModal);
    });
};

export function createProj(){
    const title = document.querySelector('input#project-title').value;
    const link = document.querySelector('input#project-link').value;
    const description = document.querySelector('textarea#project-description').value;

    new Project(title, link, description);
};

loadProjForm();