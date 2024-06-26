import { newTaskCard, displayTasks } from './taskControls';
import { clearCards } from '../index.js';
import { changeTabLabelTo } from './tabs.js';

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
const midPriorBtn = document.querySelector('#medium');
const highPriorBtn = document.querySelector('#high');

lowPriorBtn.addEventListener('click', () => labelFilteredPrior(lowPriorBtn))
midPriorBtn.addEventListener('click', () => labelFilteredPrior(midPriorBtn))
highPriorBtn.addEventListener('click', () => labelFilteredPrior(highPriorBtn))


function labelFilteredPrior(btn) {
    let formated = btn.id.charAt(0).toUpperCase() + btn.id.slice(1);

    if(priority.filtered !== btn.id){
        priority.filtered = btn.id;
        clearCards();
        priority.displayByPrior(btn.id);
        changeTabLabelTo(`${formated} priority`);
    } else {
        priority.filtered = null;
        clearCards();
        displayTasks();
        changeTabLabelTo('Home');
    };
};

export { priority, filterPriority } ;

