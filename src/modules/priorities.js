import { newTaskCard, displayTaskCards } from './taskControls';
import { clearCards } from '../index.js';

const priority = (function() {
    let filtered = false;
    let low = [];
    let medium = [];
    let high = [];

    function displayByPrior(prior) {
        for(const task of priority[`${prior}`]) {
            newTaskCard(task);
        };
    };

    return {
        filtered,
        low,
        medium,
        high,
        displayByPrior
    };
})();

function filterPriority(task) {
    let prior = task.priority;
    priority[`${prior}`].push(task)
    console.log(priority.low);
    console.log(priority.medium);
    console.log(priority.high);
};

const lowPriorBtn = document.querySelector('#low');
lowPriorBtn.addEventListener('click', () => {
    if(priority.filtered !== 'low'){
        priority.filtered = 'low';
        clearCards();
        priority.displayByPrior('low');
    } else {
        priority.filtered = null;
        clearCards();
        displayTaskCards();
    };
});

const midPriorBtn = document.querySelector('#medium');
midPriorBtn.addEventListener('click', () => {
    if(priority.filtered !== 'medium'){
        priority.filtered = 'medium';
        clearCards();
        priority.displayByPrior('medium');
    } else {
        priority.filtered = null;
        clearCards();
        displayTaskCards();
    };
});

const highPriorBtn = document.querySelector('#high');
highPriorBtn.addEventListener('click', () => {
    if(priority.filtered !== 'high'){
        priority.filtered = 'high';
        clearCards();
        priority.displayByPrior('high');
    } else {
        priority.filtered = null;
        clearCards();
        displayTaskCards();
    };
});

export { priority, filterPriority} ;

