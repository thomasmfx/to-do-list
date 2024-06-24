import './style.css';
import setImages from './modules/logo.js';
import { Task, newTaskCard } from './modules/newTask.js';
// import Project from './modules/newProject.js';

let tasks = [];
// let projects = [];


const header = new Task('Add header', 'To-do List', '24-06-2024', 'high', 'Header components: Logo, dark/light mode theme icon, and login button');
tasks.push(header);

function displayTasks(arr) {
    for(const task of arr) {
        newTaskCard(task)
    };
};

displayTasks(tasks)

// const todo = new Project('To-do List', 'sla.com', 'To-do List from The Odin Project');
// projects.push(todo);
// console.table(projects);
