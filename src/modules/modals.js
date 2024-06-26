const optionsModal = document.querySelector('#modal-options')
const formsModal = document.querySelector('#modal-forms');
const createBtn = document.querySelector('#create');
const createTaskBtn = document.querySelector('#create-task');
const createProjBtn = document.querySelector('#create-project');
const taskForm = document.querySelector('#task-form');
const projForm = document.querySelector('#project-form');

function modals(){
    createBtn.addEventListener('click', () => {
        optionsModal.style.visibility = 'visible';
        closeModalBheavior(optionsModal);
    });
    
    createTaskBtn.addEventListener('click', () => {
        optionsModal.style.visibility = 'hidden';
        formsModal.style.visibility = 'visible';
        taskForm.style.visibility = 'visible';
        closeModalBheavior(formsModal);
    });
    
    createProjBtn.addEventListener('click', () => {
        optionsModal.style.visibility = 'hidden';
        formsModal.style.visibility = 'visible';
        projForm.style.visibility = 'visible';
        closeModalBheavior(formsModal);
    });
};

function closeModalBheavior(modal) {
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.visibility = 'hidden';
            taskForm.style.visibility = 'hidden';
            projForm.style.visibility = 'hidden';
        };
    };
};

export default modals;