// import create from "../../../modules/domCreator";
import { displayForm, hide } from "./displayOptions";

const createTaskBtn = document.querySelector('#create-task');
const taskForm = document.querySelector('#task-form');
const submitTaskBtn = document.querySelector('#add-task')

export default function loadTaskForm(){
    createTaskBtn.addEventListener('click', () => {
        hide(taskForm)
        displayForm(taskForm);
    });
};

loadTaskForm()