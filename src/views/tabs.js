import { clearDisplayed, displayTasks } from "../controllers/controller";

const homeBtn = document.querySelector('button#home');
const projectsBtn = document.querySelector('button#projects');


export default function loadTabs(){
    homeBtn.addEventListener('click', () => {
        clearDisplayed();
        displayTasks();
    });
    
    projectsBtn.addEventListener('click', () => {
        clearDisplayed();
    });
};

loadTabs();