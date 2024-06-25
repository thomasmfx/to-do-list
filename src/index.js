import './css/style.css';
import setImages from './modules/logo.js';
import { Task, newTaskCard, pushTask, displayTaskCards } from './modules/taskControls.js';
import { Project, newProjectCard, pushProject, displayProjectsCards } from './modules/projectControls.js';

let tasksArr = [];
let projectsArr = []; 

// Filling some items
// pushTask(new Task("Header", 'Restaurant Page', '24-06-2024', 'High', 'Header components: Logo, dark/light mode theme icon, and login button'));
// pushTask(new Task('Nav', 'Dashboard', '13-10-2024', 'low', 'nav icons'));
// pushTask(new Task('Main', 'Library', '10-10-2050', 'medium', 'libros'));
// console.table(tasksArr);
// displayTaskCards();

// pushProject(new Project('To-do list', 'teste.com', 'Ah sei lá n sei oq'));
// pushProject(new Project('Outro projeto', '', 'Ah sei lá n sei oq'));
// console.table(projectsArr);
// displayProjectsCards();

function setDatasetIndex() {
    let index = 0;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.dataset.index = index;
        index++;
    });
};

export { tasksArr, projectsArr, displayTaskCards, displayProjectsCards, setDatasetIndex };