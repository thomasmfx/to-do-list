let emptyViewText = document.createElement('div');
emptyViewText.id = 'empty-view';
emptyViewText.textContent = 'Open a task/project to see its full view';

export function removeAllExpanded(displayEmptyText = false){
    const fullView = document.querySelector('#full-view');

    do {
        fullView.firstElementChild.remove();
    } while(fullView.firstElementChild);

    if(displayEmptyText){
        fullView.appendChild(emptyViewText);
    }
};