import create from './domCreator.js';
import { tasksArr, setDatasetIndex, clearCards } from '../index.js';

class Task {
    constructor(title, project, dueDate, priority, description) {
        this.title = title,
        this.project = project,
        this.dueDate = dueDate,
        this.priority = priority.toLowerCase(),
        this.description = description,
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
        clearCards();
        displayTaskCards();
        console.table(tasksArr);
    });
    checkbox.onclick = function() {
        if(checkbox.checked) {
            checkbox.parentElement.parentElement.style.opacity = '40%';
        } else {
            checkbox.parentElement.parentElement.style.opacity = '100%';
        };
    };
    
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

function displayTaskCards() {
    for(const task of tasksArr) {
        newTaskCard(task);
    };
    setDatasetIndex();
};

export { Task, pushTask, displayTaskCards };