import { check } from '../controllers/tasksController';
import create from '../others/domCreator';

export default function newTaskCard(task) {
    const cardDiv = create.elWithClass('div', '', 'task-card');
    const priority = create.elWithClass('div', '', 'priority', task.priority);
    const content = create.elWithClass('div', '', 'content-wrapper');
    const checkboxDiv = create.elWithClass('div', '', 'checkbox-div');
    const checkbox = create.elWithClass('input', '', 'checkbox');
    const info = create.elWithClass('div', '', 'task-info');
    const title = create.elWithClass('p', task.title, 'task-title');
    const project = create.elWithClass('p', task.project, 'task-project');
    const dueDate = create.elWithClass('p', task.dueDate, 'due-date');
    const actions = create.elWithClass('div', '', 'task-actions');
    const editTask = create.elWithClass('button', '', 'edit-task');
    const editIcon = create.elWithClass('i', '', 'fa-regular', 'fa-pen-to-square');
    const removeTask = create.elWithClass('button', '', 'remove-task');
    const removeIcon = create.elWithClass('i', '', 'fa-regular', 'fa-square-minus');

    cardDiv.dataset.index = task.id;
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => {
        check(checkbox, task.id);
    });
    checkbox.checked = task.isDone;
    
    removeTask.appendChild(removeIcon);
    editTask.appendChild(editIcon);
    actions.append(editTask, removeTask);
    info.append(title, project);
    content.append(info, dueDate);
    checkboxDiv.appendChild(checkbox)
    cardDiv.append(priority, checkboxDiv, content, actions);
    
    return cardDiv;
};

// Layout:

//  div.task-card
//  ^ div.priority.low 
//  ^ div.checkbox-div
//      ^ input.checkbox
//  ^ div.content-content
//      ^ div.info
//          ^ p.task-title
//          ^ p.task-project
//      ^ p.due-date
//  ^ div.actions
//      ^ button.edit-task
//          ^ i.fa-regular.fa-pen-to-square
//      ^ button.remove-task
//          ^ i.fa-regular.fa-square-minus