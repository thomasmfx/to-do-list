import { updateIds } from "../controllers/general";

let projects = [];

class Project {
    constructor(title, link, description) {
        this.title = title,
        this.link = link,
        this.description = description,
        this.tasks = [],
        this.id = null

        projects.push(this);
        updateIds(projects);
    };

    addTask(task){
        this.tasks.push(task);
    };

    delete(){
        projects.splice(this.id, 1);
        console.log(projects)
        updateIds(projects)
    };

    getAllProjects(){
        return projects;
    };

    edit(newTitle, newLink, newDescription){
        newTitle !== '' ? this.title = newTitle : false;
        this.link = newLink;
        this.description = newDescription;
    };
};

export { Project, projects }
