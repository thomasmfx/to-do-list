import { clearCards } from "..";
import { displayProjects } from "./projectControls";
import { displayTasks } from "./taskControls";

export function loadHome() {
    const homeTab = document.querySelector('#home');
    homeTab.addEventListener('click', () => {
        clearCards();
        displayTasks();
        changeTabLabelTo('Home');
    });

    displayTasks()
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





