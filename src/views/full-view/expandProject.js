import create from '../../others/domCreator';
import { projects } from "../../models/projects";
import { updateCurrentExpanded } from '../modal-forms/displayOptions';
import { displayProjectTasks } from '../../controllers/tasksController';
import { removeAllExpanded } from './expandedCommon';

export default function expandProject(index){
    const fullView = document.querySelector('#full-view');

    for(let i = 0; i < projects.length; i++){
        if(i === parseInt(index)){
            removeAllExpanded();
            updateCurrentExpanded(i);
            const fullProjDiv = create.elWithId('div', 'full-project-div');
            const closeBtn = create.elWithId('button', 'close');
            const closeIcon = create.elWithClass('i', '', 'fa-solid', 'fa-xmark');
            const project = create.elWithId('div', 'full-project');
            const info = create.elWithId('div', 'full-project-info');
            const title = create.elWithId('h1', 'full-project-title', projects[i].title);
            const link = create.elWithId('a', 'full-project-link', projects[i].link);
            const descDiv = create.elWithId('pre', 'full-project-description');
            const description = create.el('p', projects[i].description)
            const line = create.elWithClass('div', '', 'line');
            link.href = projects[i].link;
            closeBtn.addEventListener('click', () => {
                removeAllExpanded(true);
            });
            project.dataset.projIndex = i;

            closeBtn.appendChild(closeIcon)
            descDiv.appendChild(description);
            info.append(title, link);
            project.append(closeBtn, info, descDiv);
            fullProjDiv.append(project, line)
            fullView.append(fullProjDiv);

            displayProjectTasks(projects[i]);
        };
    };
};