import './css/style.css';
import setImages from './others/logo'
import tasks from './storage/tasksStorage';
import projects from './storage/projectsStorage';
import loadModals from './views/modal-forms/displayOptions';
import { loadTabs } from './views/tabs';
import loadFilter from './views/prioritiesFilter';
import applyTheme from './views/toggleTheme';

loadFilter()
tasks.retrieveTasks();



