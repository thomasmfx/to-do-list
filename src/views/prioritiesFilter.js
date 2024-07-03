import { changeLabelto } from "../controllers/general";
import { lastTab } from "./tabs";

let filter;

export default function loadFilter() {
    const lowPriorBtn = document.querySelector('#low');
    const midPriorBtn = document.querySelector('#medium');
    const highPriorBtn = document.querySelector('#high');
    lowPriorBtn.addEventListener('click', () => filterPriority(lowPriorBtn.id));
    midPriorBtn.addEventListener('click', () => filterPriority(midPriorBtn.id));
    highPriorBtn.addEventListener('click', () => filterPriority(highPriorBtn.id));
};

function filterPriority(priority) {
    let formated = priority.charAt(0).toUpperCase() + priority.slice(1);

    if(filter !== priority){
        filter = priority;
        applyFilter(priority);
        changeLabelto(`${formated} priority`);
    } else {
        filter = '';
        removeFilter();
        changeLabelto(lastTab);
    };
};

function applyFilter(priority){
    const allCards = document.querySelectorAll('.task-card');
    allCards.forEach(card => {
        if(!card.firstElementChild.classList.value.includes(`${priority}`)) {
            card.classList.add('hide');
        } else {
            card.classList.remove('hide');
        };
    });
};

function removeFilter() {
    const allCards = document.querySelectorAll('.task-card');
    allCards.forEach(card => {
        card.classList.remove('hide');
    });
};
