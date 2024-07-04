import storage from "../storage/projectsStorage";

let projects = [];

class Project {
    constructor(title, link, description) {
        this.title = title,
        this.link = link,
        this.description = description,
        this.tasks = [],
        this.id = null

        storage.storeProject(this)
    };
};

export { Project, projects }
