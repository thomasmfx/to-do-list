const optionsModal = document.querySelector('#modal-options')
const formsModal = document.querySelector('#modal-forms');
const createBtn = document.querySelector('#create');
const createTaskBtn = document.querySelector('#create-task');
const createProjBtn = document.querySelector('#create-project');

function modals(){
    createBtn.addEventListener('click', () => {
        optionsModal.style.visibility = 'visible';
        closeModalBheavior(optionsModal);
    });
    
    createTaskBtn.addEventListener('click', () => {
        optionsModal.style.visibility = "hidden";
        formsModal.style.visibility = 'visible';
        closeModalBheavior(formsModal);
    });
    
    createProjBtn.addEventListener('click', () => {
        optionsModal.style.visibility = "hidden";
        formsModal.style.visibility = 'visible';
        closeModalBheavior(formsModal);
    });
};

function closeModalBheavior(modal) {
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.visibility = "hidden";
        };
    };
};

export default modals;