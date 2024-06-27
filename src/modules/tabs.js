import { clearCards } from "../index.js";
import { displayProjects } from "./projectControls";
import { displayTasks } from "./taskControls";

let lastTab = 'Home';

function loadHome() {
    displayTasks();

    const homeTab = document.querySelector('#home');
    homeTab.addEventListener('click', () => {
        lastTab = 'Home';
        displayTasks();
        changeTabLabelTo('Home');
    });
};

function loadProjects() {
    const projectsTab = document.querySelector('#projects');
    projectsTab.addEventListener('click', () => {
        lastTab = 'Projects'
        displayProjects();
        changeTabLabelTo('Projects');
    });
};

function changeTabLabelTo(newTab) {
    const currentTab = document.querySelector('#current-tab');
    currentTab.textContent = newTab;
};

export { lastTab, loadHome, loadProjects, changeTabLabelTo }




