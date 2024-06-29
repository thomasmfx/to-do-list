import loadTaskForm from "./taskForm";
import loadProjForm from "./projForm";

const buttonToCreate = document.querySelector('#create');
const baseModal = document.querySelector('#options-modal');
const optionsToCreate = document.querySelector('#options-to-create');
const createTaskBtn = document.querySelector('#create-task');
const createProjBtn = document.querySelector('#create-project');

buttonToCreate.addEventListener('click', () => {
    display(baseModal, optionsToCreate, createTaskBtn, createProjBtn) 
    closeModalBheavior(baseModal);
});

export function displayForm(form){
    form.reset();
    hide(optionsToCreate, createTaskBtn, createProjBtn)
    display(form)
    closeModalBheavior(baseModal);
}

export function hide(...elements){
    for(const el of elements){
        el.classList.remove('display');
        el.classList.add('hide');
    };
};

export function display(...elements){
    for(const el of elements){
        el.classList.remove('hide');
        el.classList.add('display');
    };
};

function closeModalBheavior(modal) {
    const taskForm = document.querySelector('#task-form');
    const projForm = document.querySelector('#project-form');
    window.onclick = function(event) {
        if (event.target === modal) {
            hide(optionsToCreate,
                 createTaskBtn,
                 createProjBtn,
                 modal,
                 taskForm,
                 projForm);
        };
    };
};