import { clearDisplayed, changeLabelto } from "../controllers/general";
import { displayTasks } from "../controllers/tasksController";
import { displayProjects } from "../controllers/projectsController"

let lastTab = 'Home';

const homeBtn = document.querySelector('button#home');
const projectsBtn = document.querySelector('button#projects');

function loadTabs(){
    homeBtn.addEventListener('click', () => {
        clearDisplayed();
        displayTasks();
        changeLabelto('Home')
        lastTab = 'Home';
    });
    
    projectsBtn.addEventListener('click', () => {
        clearDisplayed();
        displayProjects();
        changeLabelto('Projects');
        lastTab = 'Projects';
    });
};

loadTabs();

export { loadTabs, lastTab }