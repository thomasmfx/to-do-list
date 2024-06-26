import { clearCards } from "..";
import { displayProjectsCards } from "./projectControls";
import { displayTaskCards } from "./taskControls";

export function loadHome() {
    const homeTab = document.querySelector('#home');
    homeTab.addEventListener('click', () => {
        clearCards();
        displayTaskCards();
        changeTabLabelTo('Home');
    });

    displayTaskCards()
};

export function loadProjects() {
    const projectsTab = document.querySelector('#projects');
    projectsTab.addEventListener('click', () => {
        clearCards();
        displayProjectsCards();
        changeTabLabelTo('Projects');
    });
};

export function changeTabLabelTo(newTab) {
    const currentTab = document.querySelector('#current-tab');
    currentTab.textContent = newTab;
};





