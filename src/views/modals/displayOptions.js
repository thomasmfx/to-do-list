import loadTaskForm from "./taskForm";
import loadProjForm from "./projForm";

let currentExpanded = null;
const buttonToCreate = document.querySelector('#create');
const baseModal = document.querySelector('#options-modal');
const optionsToCreate = document.querySelector('#options-to-create');
const createTaskBtn = document.querySelector('#create-task');
const createProjBtn = document.querySelector('#create-project');

buttonToCreate.addEventListener('click', () => {
    unhide(baseModal, optionsToCreate, createTaskBtn, createProjBtn)
    closeModalBheavior(baseModal);
});

export function displayForm(form){
    form.reset();
    hide(optionsToCreate, createTaskBtn, createProjBtn)
    unhide(form)
    closeModalBheavior(baseModal);
}

export function hide(...elements){
    for(const el of elements){
        el.classList.remove('display');
        el.classList.add('hide');
    };
};

function unhide(...elements){
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

export function updateCurrentExpanded(arg){
    currentExpanded = arg;
    console.log(currentExpanded)
};

export function getCurrentExpanded(){
    return currentExpanded;
};