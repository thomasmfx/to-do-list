import { newTaskCard, displayTaskCards } from './taskControls';
import { clearCards, changeCurrTabLabel } from '../index.js';

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
    priority[`${prior}`].push(task);
};

const lowPriorBtn = document.querySelector('#low');
lowPriorBtn.addEventListener('click', () => {
    if(priority.filtered !== 'low'){
        priority.filtered = 'low';
        clearCards();
        priority.displayByPrior('low');
        changeCurrTabLabel('Low Priority')
    } else {
        priority.filtered = null;
        clearCards();
        displayTaskCards();
        changeCurrTabLabel('Home')
    };
});

const midPriorBtn = document.querySelector('#medium');
midPriorBtn.addEventListener('click', () => {
    if(priority.filtered !== 'medium'){
        priority.filtered = 'medium';
        clearCards();
        priority.displayByPrior('medium');
        changeCurrTabLabel('Medium Priority')
    } else {
        priority.filtered = null;
        clearCards();
        displayTaskCards();
        changeCurrTabLabel('Home')
    };
});

const highPriorBtn = document.querySelector('#high');
highPriorBtn.addEventListener('click', () => {
    if(priority.filtered !== 'high'){
        priority.filtered = 'high';
        clearCards();
        priority.displayByPrior('high');
        changeCurrTabLabel('High Priority')
    } else {
        priority.filtered = null;
        clearCards();
        displayTaskCards();
        changeCurrTabLabel('Home Priority')
    };
});

export { priority, filterPriority} ;

