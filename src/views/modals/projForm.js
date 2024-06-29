// import create from "../../../modules/domCreator";
import { displayForm, hide } from "./displayOptions";

const createProjBtn = document.querySelector('#create-project');
const projForm = document.querySelector('#project-form');
const submitProjBtn = document.querySelector('#add-project');

export default function loadProjForm(){
    createProjBtn.addEventListener('click', () => {
        hide(projForm)
        displayForm(projForm);
    });
};

loadProjForm();