import { clearDisplayed, changeLabelto } from "../controllers/general";
import { displayTasks } from "../controllers/tasksController";
import { displayProjects } from "../controllers/projectsController"

const homeBtn = document.querySelector('button#home');
const projectsBtn = document.querySelector('button#projects');

export default function loadTabs(){
    homeBtn.addEventListener('click', () => {
        clearDisplayed();
        displayTasks();
        changeLabelto('Home')
    });
    
    projectsBtn.addEventListener('click', () => {
        clearDisplayed();
        displayProjects();
        changeLabelto('Projects');
    });
};

loadTabs();