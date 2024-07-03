import './css/style.css';
import setImages from '../modules/logo';
import { Task } from './models/tasks';
import { Project } from './models/projects';
import { linkTasksToProjects } from './controllers/general';
import { displayTasks } from './controllers/tasksController';
import loadModals from './views/modal-forms/displayOptions';
import loadTabs from './views/tabs';

// Filling some tasks and projects
// const task = new Task('UM', 'Projeto', '01/01/2024', 'low', 'Lorem ipsum notes');
// const task2 = new Task('DOIS', 'Projeto', '01/01/2024', 'medium', 'Lorem ipsum notes');
// const task3 = new Task('TRES', 'Projeto DOIS', '01/01/2024', 'high', 'Lorem ipsum notes');
// const proj = new Project('Projeto', 'linkprojeto.com', 'Descrição do projeto');
// const proj2 = new Project('Projeto DOIS', 'linkprojeto.com', 'Descrição do projeto');

window.onload = linkTasksToProjects(), displayTasks();



