import create from './domCreator.js';
import { projectsArr, setDatasetIndex } from '../index.js';

class Project {
    constructor(title, link, description) {
        this.title = title,
        this.link = link,
        this.description = description,
        this.tasks = []
    };
};

function newProjectCard(project) {
    const minView = document.querySelector('#min-view');
    // Card
    // ^ stripe
    // ^ wrapper
    //   ^ info
    //     ^ title
    //     ^ link
    //   ^ btnsDiv
    //     ^ editBtn
    //     ^ removeBtn
    const card = create.elWithClass('div', 'project-card');
    card.classList.add('card');

    const stripe = create.elWithClass('div', 'project-stripe');
    const wrapper = create.elWithClass('div', 'project-wrapper');

    const info = create.elWithClass('div', 'info');

    const title = create.elWithClass('p', 'title', project.title);
    const link = create.elWithClass('a', 'link', project.link);
    link.href = link;

    const btnsDiv = create.elWithClass('div', 'actions');

    const editBtn = create.el('button');
    const removeBtn = create.el('button');
    editBtn.classList.add('fa-regular', 'fa-pen-to-square', 'edit');
    removeBtn.classList.add('fa-regular', 'fa-square-minus', 'remove');
    removeBtn.addEventListener('click', () => { 
        removeProject(removeBtn); 
        clearCards();
        displayProjectsCards();
        console.table(projectsArr);
    });

    btnsDiv.append(editBtn, removeBtn);
    info.append(title, link);
    wrapper.append(info, btnsDiv);
    card.append(stripe, wrapper);

    minView.appendChild(card);
};

function removeProject(btn) {
    const projCard = btn.parentElement.parentElement.parentElement;
    projectsArr.splice(projCard.dataset.index, 1);
    projCard.remove();
};

function clearCards() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.remove();
    });
};

function pushProject(project) {
    projectsArr.push(project);
};

function displayProjectsCards() {
    for(const proj of projectsArr) {
        newProjectCard(proj);
    };
    setDatasetIndex('project');
};

export { Project, newProjectCard, pushProject, displayProjectsCards };