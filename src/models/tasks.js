import { updateIds } from "../controllers/general";

let tasks = [];

class Task {
    constructor(title, project, dueDate, priority, notes) {
        this.title = title,
        this.project = project,
        this.dueDate = dueDate,
        this.priority = priority.toLowerCase(),
        this.notes = notes,
        this.isDone = false,
        this.projId = null;

        tasks.push(this);
        updateIds(tasks);
    };

    delete(){
        tasks.splice(this.id, 1);
        updateIds(tasks);
    };

    changeIsDone(){
        this.isDone === true ? this.isDone = false : this.isDone = true
    };

    getAllTasks(){
        return tasks;
    };

    changeProject(newTitle){
        this.project = newTitle
    }

    edit(newTitle, newProject, newDueDate, newPriority, newNotes){
        newTitle !== '' ? this.title = newTitle : this.title;
        this.project = newProject;
        this.dueDate = newDueDate;
        this.priority = newPriority;
        this.notes = newNotes;
    };
};

function filterTasks(newArr){
    tasks = newArr;
    updateIds(tasks);
};

export { Task, tasks, filterTasks }