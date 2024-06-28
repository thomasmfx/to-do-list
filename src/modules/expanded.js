import { tasksArr } from "../index.js";
import create from './domCreator.js';

export function expandTask(index){
    const fullView = document.querySelector('#full-view');
    
    for(let i = 0; i < tasksArr.length; i++){
        if(i === parseInt(index)){
            removeExpandedTask()
            const point1 = create.elWithClass('span', 'point', '•');
            const point2 = create.elWithClass('span', 'point', '•');

            const taskFull = create.elWithId('div', 'task-full');
            
            const info = create.elWithId('div', 'task-full-info');
            const title = create.elWithId('div', 'title-full', tasksArr[i].title);
            const priority = create.elWithClass('div', tasksArr[i].priority);
            priority.classList.add('fa-solid', 'fa-circle');

            const status = create.elWithId('div', 'task-full-status');
            // ^
            const taskProject = create.elWithId('p', 'task-full-project', tasksArr[i].project);
            const dueDate = create.elWithId('p', 'task-full-date', tasksArr[i].dueDate);
            const checkbox = create.elWithClass('input', 'checkbox');
            checkbox.type = 'checkbox';

            const notes = create.elWithId('p', 'task-full-notes', tasksArr[i].notes);
            
            const line = create.elWithClass('div', 'line');

            if(taskProject.textContent !== ''){
                status.append(taskProject, point1);
            }

            if(dueDate.textContent !== ''){
                status.append(dueDate, point2);
            }

            status.appendChild(checkbox);
            info.append(title, priority);

            taskFull.append(info, status, notes);
            fullView.append(taskFull, line);
        } else {
            console.log(tasksArr[i])
        };
    };
};


export function removeExpandedTask(){
    const fullView = document.querySelector('#full-view');

    do {
        fullView.firstElementChild.remove()
    } while(fullView.firstElementChild)
};

