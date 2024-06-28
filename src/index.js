import './css/style.css';
import setImages from './modules/logo.js';
import { Task, pushTask } from './modules/taskControls.js';
import { Project, pushProject } from './modules/projectControls.js';
import loadModals from './modules/modals.js';
import { loadHome, loadProjects } from './modules/tabs.js';
import loadFilter from './modules/prioritiesFilter.js';

let tasksArr = [];
let projectsArr = []; 

// Filling some tasks
pushTask(new Task("Header", 'Restaurant Page', '10-13-2005', 'High'));
pushTask(new Task('Nav', 'Dashboard', '05-07-2024', 'low', 'nav icons'));
pushTask(new Task('IDs and Classes best practices', '', '07-08-2024', 'medium'));
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

function emptyViewText(){
    const fullView = document.querySelector('#full-view');
    const label = document.querySelector('#empty-view');

    if(fullView.lastElementChild.id !== label.id){
        label.classList.add('hide');
    } else {
        label.classList.remove('hide');
    };
};

window.onload = loadHome(), loadProjects(), loadModals(), loadFilter(), emptyViewText();

export { 
    tasksArr, 
    projectsArr, 
    setDatasetIndex, 
    clearCards,
    emptyViewText
};