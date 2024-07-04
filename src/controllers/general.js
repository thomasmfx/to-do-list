import create from "../others/domCreator";

const minView = document.querySelector('#min-view');
// This function is called in objects everytime an object is added/removed
function updateIds(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].id = i;
    };
};

function clearDisplayed(){
    // Since the tab label is one of the childs, there's the need to create it again
    let label = document.querySelector('#current-tab').textContent;
    if(minView.firstElementChild){
        do{
            minView.firstElementChild.remove();
        } while(minView.firstElementChild);
        minView.appendChild(create.elWithId('div', 'current-tab', label));
    };
};

function changeLabelto(what){
    document.querySelector('#current-tab').textContent = what;
};

function clearProjectTasks(){
    const fullView = document.querySelector('#full-view');
    fullView.lastElementChild.remove();
};

export { updateIds, clearDisplayed, changeLabelto, clearProjectTasks }