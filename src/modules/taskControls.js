import create from './domCreator.js';
import { tasksArr, setDatasetIndex, clearCards } from '../index.js';
import { expandTask } from './expanded.js';

class Task {
    constructor(title, project, dueDate, priority, notes) {
        this.title = title,
        this.project = project,
        this.dueDate = dueDate,
        this.priority = priority.toLowerCase(),
        this.notes = notes,
        this.done = false
    };
};

function newTaskCard(task) {
    const minView = document.querySelector('#min-view');
    // Card
    // ^ Priority
    // ^ Wrapper 
    //   ^ Checkbox
    //   ^ Info
    //     ^ Title
    //     ^ Project
    //   ^ Date and Actions
    //     ^ Due date
    //     ^ Edit task btn
    //     ^ Remove task button
    const card = create.elWithClass('div', 'task-card');
    card.classList.add('card');

    const priority = create.elWithClass('div', 'priority');
    priority.classList.add(`${task.priority}`);
    const wrapper = create.elWithClass('div', 'wrapper');

    const checkbox = create.elWithClass('input', 'checkbox');
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    const info = create.elWithClass('div', 'info');

    const title = create.elWithClass('p', 'title', task.title);
    const taskProject = create.elWithClass('p', 'project', task.project);

    const dateAndActions = create.elWithClass('div', 'date-and-actions');

    const dueDate = create.elWithClass('p', 'dueDate', task.dueDate);
    const editBtn = create.el('button');
    const removeBtn = create.el('button');

    editBtn.classList.add('fa-regular', 'fa-pen-to-square', 'edit');
    removeBtn.classList.add('fa-regular', 'fa-square-minus', 'remove');
    removeBtn.addEventListener('click', () => { 
        removeTask(removeBtn); 
        displayTasks();
        console.table(tasksArr);
    });
    checkbox.onclick = function() {
        const parentCard = checkbox.parentElement.parentElement;
        if(checkbox.checked) {
            parentCard.style.opacity = '40%';
            tasksArr[parentCard.dataset.index].done = true;
            // console.log(tasksArr[parentCard.dataset.index].done);
        } else {
            parentCard.style.opacity = '';
            tasksArr[parentCard.dataset.index].done = false;
            // console.log(tasksArr[parentCard.dataset.index].done);
        };
    };

    info.addEventListener('click', () => {
        expandTask(card.dataset.index);
    });
    
    dateAndActions.append(dueDate, editBtn, removeBtn);
    info.append(title, taskProject);
    wrapper.append(checkbox, info, dateAndActions);
    card.append(priority, wrapper);

    minView.appendChild(card);
};

function removeTask(btn) {
    const btnCard = btn.parentElement.parentElement.parentElement;
    tasksArr.splice(btnCard.dataset.index, 1);
    btnCard.remove();
};

function pushTask(task) {
    tasksArr.push(task);
};

function displayTasks() {
    clearCards();
    for(const task of tasksArr) {
        newTaskCard(task);
    };

    setDatasetIndex();
};

export { Task, pushTask, newTaskCard, displayTasks };