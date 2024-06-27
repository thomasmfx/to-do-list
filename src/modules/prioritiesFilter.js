import { changeTabLabelTo, lastTab } from './tabs.js';

let filter = null;

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
        changeTabLabelTo(`${formated} priority`);
    } else {
        filter = null;
        removeFilter(priority);
        changeTabLabelTo(lastTab);
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

