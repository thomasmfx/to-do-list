import newTaskCard from '../models/taskCard';

let array = [];
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

const tasks = (function(){
    if(localStorage.getItem('tasks') === null){
        localStorage.setItem('tasks', JSON.stringify(array));
        storeTask({
            "title": "Tutorial",
            "project": "Demo project",
            "dueDate": `${today}`,
            "priority": "low",
            "notes": "The '+' button on sidebar is all you need to create tasks and projects.\n\nTake a time to play with the sidebar icons and discover what you can do!\n\nYou can toggle between dark/light theme by clicking the sun/moon icon in the bottom of the sidebar.",
            "isDone": false,
            "id": 0
        });
    }

    function storeTask(obj){
        let parsed = JSON.parse(localStorage.getItem('tasks'));
        parsed.push(obj);
        localStorage.setItem('tasks', JSON.stringify(parsed));
        updateTasksIds();
    };

    function removeTask(i){
        let parsed = JSON.parse(localStorage.getItem('tasks'));
        parsed.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(parsed));
        updateTasksIds();
    };

    function getAllTasks(){
        return JSON.parse(localStorage.getItem('tasks'));
    };

    function updateTasks(newArr){
        localStorage.setItem('tasks', JSON.stringify(newArr));
        updateTasksIds()
    };

    function changeIsDone(i){
        let parsed = JSON.parse(localStorage.getItem('tasks'));
        parsed[i].isDone === true ? parsed[i].isDone = false : parsed[i].isDone = true;
        localStorage.setItem('tasks', JSON.stringify(parsed));
    };

    function editTask(i, newTitle, newProject, newDueDate, newPriority, newNotes){
        let parsed = JSON.parse(localStorage.getItem('tasks'));
        if(newTitle !== ''){
            parsed[i].title = newTitle
        }
        parsed[i].project = newProject;
        parsed[i].dueDate = newDueDate;
        parsed[i].priority = newPriority;
        parsed[i].notes = newNotes;
        localStorage.setItem('tasks', JSON.stringify(parsed));
    };

    function retrieveTasks(){
        let stored = JSON.parse(localStorage.getItem('tasks'));
        for(const task of stored){
            let minView = document.querySelector('#min-view')
            minView.append(newTaskCard(task));
        };
    };

    return {
        storeTask,
        removeTask,
        getAllTasks,
        updateTasks,
        changeIsDone,
        editTask,
        retrieveTasks
    };
})();

function updateTasksIds(){
    let stored = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < stored.length; i++){
        stored[i].id = i;
    };
    localStorage.setItem('tasks', JSON.stringify(stored));
};

export default tasks;

