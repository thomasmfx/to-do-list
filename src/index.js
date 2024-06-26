import './css/style.css';
import setImages from './modules/logo.js';
import { Task, pushTask } from './modules/taskControls.js';
import { Project, pushProject } from './modules/projectControls.js';
import loadModals from './modules/modals.js';
import { loadHome, loadProjects } from './modules/tabs.js';

let tasksArr = [];
let projectsArr = []; 

// Filling some tasks
pushTask(new Task("Header", 'Restaurant Page', '24-06-2024', 'High', 'Header components: Logo, dark/light mode theme icon, and login button'));
pushTask(new Task('Nav', 'Dashboard', '13-10-2024', 'low', 'nav icons'));
pushTask(new Task('IDs and Classes best practices', '', '10-10-2050', 'medium', 'Gotta have a clean code huh?'));
console.table(tasksArr);

// And some projects
pushProject(new Project('To-do list', 'teste.com', 'Ah sei lá n sei oq'));
pushProject(new Project('Outro projeto', '', 'Ah sei lá n sei oq'));
console.table(projectsArr);

function clearCards() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.remove();
    });
};

function setDatasetIndex() {
    let index = 0;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.dataset.index = index;
        index++;
    });
};

window.onload = loadHome(), loadProjects(), loadModals();

export { 
    tasksArr, 
    projectsArr, 
    setDatasetIndex, 
    clearCards
};