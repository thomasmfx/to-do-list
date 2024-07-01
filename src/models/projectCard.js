import create from '../others/domCreator';
import expandProject from '../views/full-view/expandProject';

export default function newProjectCard(project) {
    const projDiv = create.elWithClass('div', '', 'project-card');
    const stripe = create.elWithClass('div', '', 'project-stripe');
    const wrapper = create.elWithClass('div', '', 'project-wrapper');
    const info = create.elWithClass('div', '', 'project-info');
    const title = create.elWithClass('p', project.title, 'project-title');
    const link = create.elWithClass('a', project.link, 'project-link');
    const actions = create.elWithClass('div', '', 'project-actions');
    const editProjectBtn = create.elWithClass('button', '', 'edit-project');
    const editIcon = create.elWithClass('i', '', 'fa-regular', 'fa-pen-to-square');
    const removeProjectBtn = create.elWithClass('button', '', 'remove-project');
    const removeIcon = create.elWithClass('i', '', 'fa-regular', 'fa-square-minus');
    link.href = project.link;
    info.addEventListener('click', () => {
        expandProject(project.id);
    });
    stripe.addEventListener('click', () => {
        expandProject(project.id);
    });

    removeProjectBtn.appendChild(removeIcon);
    editProjectBtn.appendChild(editIcon);
    actions.append(editProjectBtn, removeProjectBtn);
    info.append(title, link);
    wrapper.append(info, actions);
    projDiv.append(stripe, wrapper);

    return projDiv;
};

// Layout:

//  div.project-card
//  ^ div.project-stripe
//  ^ div.project-wrapper
//      ^ div.project-info
//          ^ p.project-title
//          ^ a.project-link
//      ^ div.project-actions
//          ^ button.edit-project
//              ^ i.fa-regular.fa-pen-to-square
//          ^ button.remove-project
//              ^ i.fa-regular.fa-square-minus