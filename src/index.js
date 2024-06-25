import './css/style.css';
import setImages from './modules/logo.js';
import { Task, pushTask, displayTaskCards } from './modules/taskControls.js';
import { Project, pushProject, displayProjectsCards } from './modules/projectControls.js';

let tasksArr = [];
let projectsArr = []; 

function clearCards() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.remove();
    });
};
// Filling some tasks
pushTask(new Task("Header", 'Restaurant Page', '24-06-2024', 'High', 'Header components: Logo, dark/light mode theme icon, and login button'));
pushTask(new Task('Nav', 'Dashboard', '13-10-2024', 'low', 'nav icons'));
pushTask(new Task('Main', 'Library', '10-10-2050', 'medium', 'libros'));
console.table(tasksArr);

// And some projects
pushProject(new Project('To-do list', 'teste.com', 'Ah sei lá n sei oq'));
pushProject(new Project('Outro projeto', '', 'Ah sei lá n sei oq'));
console.table(projectsArr);


function setDatasetIndex() {
    let index = 0;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.dataset.index = index;
        index++;
    });
};

const homeTab = document.querySelector('#home');
homeTab.addEventListener('click', () => {
    clearCards();
    displayTaskCards();
});

const projectsTab = document.querySelector('#projects');
projectsTab.addEventListener('click', () => {
    clearCards();
    displayProjectsCards();
});

window.onload = displayTaskCards();

export { tasksArr, projectsArr, displayTaskCards, displayProjectsCards, setDatasetIndex, clearCards };