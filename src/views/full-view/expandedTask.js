import create from '../../others/domCreator';
import { tasks } from "../../models/tasks";
import { removeAllExpanded } from './expandedCommon';
import { checkDinamically } from '../../controllers/taskActions';

export default function expandTask(index){
    const fullView = document.querySelector('#full-view');

    for(let i = 0; i < tasks.length; i++){
        if(i === parseInt(index)){
            removeAllExpanded();
            const fullTaskDiv = create.elWithId('div', 'full-task-div');
            const closeBtn = create.elWithId('button', 'close');
            const closeIcon = create.elWithClass('i', '', 'fa-solid', 'fa-xmark');
            const point1 = create.elWithClass('span', '•', 'point');
            const point2 = create.elWithClass('span', '•', 'point');
            const taskFull = create.elWithId('div', 'task-full');
            const info = create.elWithId('div', 'task-full-info');
            const title = create.elWithId('div', 'title-full', tasks[i].title);
            const priority = create.elWithClass('div', '', tasks[i].priority, 'fa-solid', 'fa-circle');
            const status = create.elWithId('div', 'task-full-status');
            const taskProject = create.elWithId('p', 'task-full-project', tasks[i].project);
            const dueDate = create.elWithId('p', 'task-full-date', tasks[i].dueDate);
            const checkbox = create.elWithClass('input', '', 'checkbox');
            const notesDiv = create.elWithId('pre', 'task-full-notes');
            const notes = create.el('p', tasks[i].notes);
            const line = create.elWithClass('div', '', 'line');
            taskFull.dataset.expanded = index;
            checkbox.type = 'checkbox';
            checkbox.addEventListener('click', () => {
                checkDinamically(checkbox, index)
            });
            closeBtn.addEventListener('click', () => {
                removeAllExpanded(true);
            });

            if(tasks[i].isDone){
                checkbox.checked = true;
            };
            if(taskProject.textContent !== ''){
                status.append(taskProject, point1);
            };
            if(dueDate.textContent !== ''){
                status.append(dueDate, point2);
            };
    
            closeBtn.appendChild(closeIcon)
            notesDiv.appendChild(notes);
            status.appendChild(checkbox);
            info.append(title, priority);
            taskFull.append(closeBtn, info, status, notesDiv);
            fullTaskDiv.append(taskFull, line)
            fullView.append(fullTaskDiv);
        };
    };
};