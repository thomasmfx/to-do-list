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
        taskForm.reset();
        taskForm.style.display = 'block';
        closeModalBheavior(formsModal);
    });
    
    createProjBtn.addEventListener('click', () => {
        optionsModal.style.visibility = 'hidden';
        formsModal.style.visibility = 'visible';
        projForm.reset();
        projForm.style.display = 'block';
        closeModalBheavior(formsModal);
    });
};

function closeModalBheavior(modal) {
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.visibility = 'hidden';
            taskForm.style.display = 'none';
            projForm.style.display = 'none';
        };
    };
};

export default modals;