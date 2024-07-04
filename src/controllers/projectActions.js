import { PAO } from "../models/projects";
import { TASKAQ, filterTasks } from "../models/tasks";
import { clearDisplayed } from "./general";
import { removeAllExpanded } from "../views/full-view/expandedCommon";
import { displayProjects } from "./projectsController";
import projects from "../storage/projectsStorage";
import tasks from "../storage/tasksStorage";

function removeProjectDinamically(index){
    const storedProjects = projects.getAllProjects()
    const storedTasks = tasks.getAllTasks();
    const projectInMinView = document.querySelector(`[data-proj-id='${index}']`);
    const projectExpanded = document.querySelector(`[data-proj-index='${index}']`);
    // These are the tasks that are going to be removed with the project
    let tasksRemoved = storedTasks.filter(task => task.project === storedProjects[index].title);
    // Checking if one of the tasks to be removed are expanded
    const taskExpanded = document.querySelector('#task-full');
    for(const task of tasksRemoved){
        if(taskExpanded !== null){
            if(task.id === Number(taskExpanded.dataset.expanded)){
                removeAllExpanded(true);
            } else {
                console.log(task.id)
            };
        }
    };
    // This is the tasks array without the projects that are going to be removed with the project
    let survivingTasks = storedTasks.filter(task => task.project !== storedProjects[index].title);
    projects.removeProject(index)
    tasks.updateTasks(survivingTasks);
    
    if(projectInMinView !== null){
        clearDisplayed();
        displayProjects();
    };
    if(projectExpanded !== null){
        removeAllExpanded(true);
    };
};

export { removeProjectDinamically }