import { updateIds } from "../controllers/controller";

let tasks = [];

class Task {
    constructor(title, project, dueDate, priority, notes) {
        this.title = title,
        this.project = project,
        this.dueDate = dueDate,
        this.priority = priority.toLowerCase(),
        this.notes = notes,
        this.done = false
        this.id = null;

        tasks.push(this);
        updateIds(tasks);
    };

    delete(){
        tasks.splice(this.id, 1);
        updateIds(tasks);
    };

    isDone(status){
        this.done = status;
    };

    getAllTasks(){
        return tasks;
    };

    edit(newTitle, newProject, newDueDate, newPriority, newNotes){
        newTitle !== '' ? this.title = newTitle : this.title;
        this.project = newProject;
        this.dueDate = newDueDate;
        this.priority = newPriority;
        this.notes = newNotes;
    };
};

export { Task, tasks }