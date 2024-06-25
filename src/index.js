import './css/style.css';
import setImages from './modules/logo.js';
import { Task, newTaskCard } from './modules/taskControls.js';
import Project from './modules/projectControls.js';

let tasksArr = [];
let projectsArr = []; 

// Filling some items
pushTask(new Task("Header", 'Restaurant Page', '24-06-2024', 'High', 'Header components: Logo, dark/light mode theme icon, and login button'));
pushTask(new Task('Nav', 'Dashboard', '13-10-2024', 'low', 'nav icons'));
pushTask(new Task('Main', 'Library', '10-10-2050', 'medium', 'libros'));
console.table(tasksArr);

pushProject(new Project('To-do list', 'teste.com', 'Ah sei lá n sei oq'));
console.table(projectsArr);
// 

function pushTask(task) {
    tasksArr.push(task)
};

function pushProject(project) {
    projectsArr.push(project)
};

function displayCards() {
    for(const task of tasksArr) {
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

displayCards(tasksArr);

export { tasksArr, projectsArr, displayCards };