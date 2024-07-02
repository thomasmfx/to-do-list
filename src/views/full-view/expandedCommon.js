let emptyViewText = document.createElement('div');
emptyViewText.id = 'empty-view';
emptyViewText.textContent = 'Click in a task or project to expand it';

export function removeAllExpanded(displayEmptyText = false){
    const fullView = document.querySelector('#full-view');

    if(fullView.firstElementChild !== null){
        do {
            fullView.firstElementChild.remove();
        } while(fullView.firstElementChild);
    }

    if(displayEmptyText){
        fullView.appendChild(emptyViewText);
    }
};