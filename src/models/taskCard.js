import { check, removeTask } from '../controllers/tasksController';
import create from '../others/domCreator';
import expandTask from '../views/full-view/expandedTask';

export default function newTaskCard(task) {
    const cardDiv = create.elWithClass('div', '', 'task-card');
    const priority = create.elWithClass('div', '', 'priority', task.priority);
    const contentWrapper = create.elWithClass('div', '', 'content-wrapper');
    const checkboxDiv = create.elWithClass('div', '', 'checkbox-div');
    const checkbox = create.elWithClass('input', '', 'checkbox');
    const info = create.elWithClass('div', '', 'task-info');
    const title = create.elWithClass('p', task.title, 'task-title');
    const project = create.elWithClass('p', task.project, 'task-project');
    const dueDate = create.elWithClass('p', task.dueDate, 'due-date');
    const actions = create.elWithClass('div', '', 'task-actions');
    const editTaskBtn = create.elWithClass('button', '', 'edit-task');
    const editIcon = create.elWithClass('i', '', 'fa-regular', 'fa-pen-to-square');
    const removeTaskBtn = create.elWithClass('button', '', 'remove-task');
    const removeIcon = create.elWithClass('i', '', 'fa-regular', 'fa-square-minus');
    cardDiv.dataset.index = task.id;
    checkbox.type = 'checkbox';
    checkbox.checked = task.isDone;
    checkbox.addEventListener('click', () => {
        check(checkbox, task.id);
    });
    contentWrapper.addEventListener('click', () => {
        expandTask(task.id);
    });
    priority.addEventListener('click', () => {
        expandTask(task.id);
    });
    removeTaskBtn.addEventListener('click', () => {
        removeTask(task.id);
    });
    
    removeTaskBtn.appendChild(removeIcon);
    editTaskBtn.appendChild(editIcon);
    actions.append(editTaskBtn, removeTaskBtn);
    info.append(title, project);
    contentWrapper.append(info, dueDate);
    checkboxDiv.appendChild(checkbox)
    cardDiv.append(priority, checkboxDiv, contentWrapper, actions);
    
    return cardDiv;
};

// Layout:

//  div.task-card
//  ^ div.priority.low 
//  ^ div.checkbox-div
//      ^ input.checkbox
//  ^ div.contentWrapper-contentWrapper
//      ^ div.info
//          ^ p.task-title
//          ^ p.task-project
//      ^ p.due-date
//  ^ div.actions
//      ^ button.edit-task
//          ^ i.fa-regular.fa-pen-to-square
//      ^ button.remove-task
//          ^ i.fa-regular.fa-square-minus