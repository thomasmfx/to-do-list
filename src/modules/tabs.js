import { clearCards } from "../index.js";
import { displayProjects } from "./projectControls";
import { displayTasks } from "./taskControls";

export function loadHome() {
    displayTasks();

    const homeTab = document.querySelector('#home');
    homeTab.addEventListener('click', () => {
        clearCards();
        displayTasks();
        changeTabLabelTo('Home');
    });
};

export function loadProjects() {
    const projectsTab = document.querySelector('#projects');
    projectsTab.addEventListener('click', () => {
        clearCards();
        displayProjects();
        changeTabLabelTo('Projects');
    });
};

export function changeTabLabelTo(newTab) {
    const currentTab = document.querySelector('#current-tab');
    currentTab.textContent = newTab;
};





