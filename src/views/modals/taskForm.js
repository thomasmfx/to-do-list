import { displayForm, hide } from "./displayOptions";
import { submitTask } from "../../controllers/controller";
import { Task } from '../../models/tasks.js';

const baseModal = document.querySelector('#options-modal');
const createTaskBtn = document.querySelector('#create-task');
const taskForm = document.querySelector('#task-form');
const submitTaskBtn = document.querySelector('#add-task')

export function loadTaskForm(){
    createTaskBtn.addEventListener('click', () => {
        displayForm(taskForm);
    });

    submitTaskBtn.addEventListener('click', (event) => {
        event.preventDefault();
        submitTask(taskForm, baseModal);
    });
};

export function createTask(){
    const title = document.querySelector('input#task-title').value;
    const project = document.querySelector('select#projects-dropdown').value;
    const priority = document.querySelector('select#task-priority').value;
    const dueDate = document.querySelector('input#due-date').value;
    const notes = document.querySelector('textarea#task-notes').value;

    new Task(title, project, dueDate, priority, notes);
};

loadTaskForm();