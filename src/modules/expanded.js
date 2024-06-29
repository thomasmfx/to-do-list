import { tasksArr, projectsArr } from "../index.js";
import create from './domCreator.js';

export function expandTask(index){
    const fullView = document.querySelector('#full-view');
    
    for(let i = 0; i < tasksArr.length; i++){
        if(i === parseInt(index)){
            removeExpandedTask();
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

            const notesDiv = create.elWithId('pre', 'task-full-notes');
            const notes = create.el('p', tasksArr[i].notes);

            const line = create.elWithClass('div', 'line');

            // checkbox.onclick = function() {
            //     const cards = document.querySelectorAll('.task-card');

            //     if(checkbox.checked) {
            //         cards.forEach(card => {
            //             if(card.dataset.index === index){
            //                 card.style.opacity = '40%';
            //                 tasksArr[card.dataset.index].done = true;
            //                 // console.log(tasksArr[parentCard.dataset.index].done);
            //             } ;
            //         });
            //     } else {
            //         cards.forEach(card => {
            //             card.style.opacity = '';
            //             tasksArr[card.dataset.index].done = false;
            //             // console.log(tasksArr[parentCard.dataset.index].done);
            //         });
            //     }
            // };

            if(taskProject.textContent !== ''){
                status.append(taskProject, point1);
            };

            if(dueDate.textContent !== ''){
                status.append(dueDate, point2);
            };
            
            notesDiv.appendChild(notes);
            status.appendChild(checkbox);
            info.append(title, priority);

            taskFull.append(info, status, notesDiv);
            fullView.append(taskFull, line);
        };
    };
};

export function removeExpandedTask(){
    const fullView = document.querySelector('#full-view');

    do {
        fullView.firstElementChild.remove();
    } while(fullView.firstElementChild);
};

export function expandProject(index){
    const fullView = document.querySelector('#full-view');

    for(let i = 0; i < projectsArr.length; i++){
        if(i === parseInt(index)){
            removeExpandedTask();
            const project = create.elWithId('div', 'full-project');

            const info = create.elWithId('div', 'full-project-info');

            const title = create.elWithId('h1', 'full-project-title', projectsArr[i].title);
            const link = create.elWithId('a', 'full-project-link', projectsArr[i].link);
            link.href = projectsArr[i].link;

            const descDiv = create.elWithId('pre', 'full-project-description');

            const description = create.el('p', tasksArr[i].description)

            const line = create.elWithClass('div', 'line');

            descDiv.appendChild(description);
            info.append(title, link);

            project.append(info, descDiv);

            fullView.append(project, line);
        };
    };
};
