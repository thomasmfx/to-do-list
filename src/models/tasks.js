import { updateIds } from "../controllers/general";
import tasks from "../storage/tasksStorage";

let array = [];

class Task {
    constructor(title, project, dueDate, priority, notes) {
        this.title = title,
        this.project = project,
        this.dueDate = dueDate,
        this.priority = priority.toLowerCase(),
        this.notes = notes,
        this.isDone = false

        tasks.storeTask(this);
    };
};

function filterTasks(newArr){
    array = newArr;
    updateIds(array);
};

function sincronize(ew){
    array = ew
}

export { Task, array, filterTasks, sincronize }