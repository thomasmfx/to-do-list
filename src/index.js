import './css/style.css';
import setImages from './modules/logo.js';
import { Task, newTaskCard } from './modules/newTask.js';
import Project from './modules/newProject.js';

let tasks = [];
let projects = []; 

// Filling some items
pushTask(new Task("Header", 'Restaurant Page', '24-06-2024', 'High', 'Header components: Logo, dark/light mode theme icon, and login button'));
pushTask(new Task('Nav', 'Dashboard', '13-10-2024', 'low', 'nav icons'));
pushTask(new Task('Main', 'Library', '10-10-2050', 'medium', 'libros'));
console.table(tasks);

pushProject(new Project('To-do list', 'teste.com', 'Ah sei lá n sei oq'));
console.table(projects);
// 

function pushTask(task) {
    tasks.push(task)
};

function pushProject(project) {
    projects.push(project)
};

function displayCards() {
    for(const task of tasks) {
        newTaskCard(task)
    };
    setDatasetIndex()
};

function setDatasetIndex() {
    let index = 0;
    const cards = document.querySelectorAll('.task-card');
    cards.forEach(card => {
        card.dataset.index = index;
        index++;
    });
};

displayCards(tasks);

export { tasks, projects, displayCards };