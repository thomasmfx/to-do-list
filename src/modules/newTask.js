class Task {
    constructor(title, project, dueDate, priority, description) {
        this.title = title,
        this.project = project,
        this.dueDate = dueDate,
        this.priority = priority,
        this.description = description,
        this.done = false
    };

};

export default Task;