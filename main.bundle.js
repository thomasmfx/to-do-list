/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/cascadia-code);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";

/* CSS Reset */

*, *::before, *::after { box-sizing: border-box; }

* { margin: 0; padding: 0; }
body { line-height: 1.5; -webkit-font-smoothing: antialiased; font-size: 100%;}

img, picture, svg, video, canvas { display: block; max-width: 100%; }

p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }

input, button, textarea, select { font: inherit; }

/* ------------------------------- */

:root {
    --logo-blue: #2196f3ff;
    --background: #FFFFFF;

    /* Tasks title */
    --black: #495057;

    /* All other text/icon in tasks cards */
    --dark-gray: #6d6a75ff;

    /* Border of tasks card */
    --default-gray: #adb5bdff;
    
    /* Icons background on hover*/
    --light-gray: #ebebeb;
    
    /* Borders */
    --borders-gray: #D3D3D3;

    /* Priorities */
    --red: #ff5a5a;
    --yellow: #f6c364;
    --argentinian-blue: #64b5f6ff;
}

body {
    font-family: 'Cascadia Code';
    background-color: var(--background);
}

main {
    display: grid;
    grid-template-columns: 4em 1fr 1fr;
    grid-template-rows: 4em 1fr;
    height: 100vh;
}

header {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    border-bottom: 2px solid var(--borders-gray);
    border-top: none;

    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: 1em;
}

aside {
    border-right: 2px solid var(--borders-gray);
    grid-row: 2 / -1;
    grid-column: 1 / 2;
}

nav {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5em;
    height: 100%;
}

/* Header */

header > #logo {
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.8rem;
    color: var(--borders-gray);
}

/* Aside/nav */

nav > button {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--default-gray);
    border-radius: 5px;
    padding: 3px 8px 2px 8px;
}

#create {
    font-size: 1.5rem;
    padding: 1px 8px 0 8px;
}

nav > button:hover,
i.fa-github:hover,
button#login:hover,
button#toggle-theme:hover {
    cursor: pointer;
    background-color: var(--light-gray);
}

#nav-bottom {
    position: absolute;
    bottom: 0.5em;
    display: grid;
    justify-content: center;
    row-gap: 0.5em;
}

button#toggle-theme {
    background: none;
    border: none;
    color: var(--default-gray);
    border-radius: 5px;
}

i.fa-github,
i#theme-icon {
    font-size: 1.8rem;
    background: none;
    border: none;
    color: var(--default-gray);
    border-radius: 5px;
    padding: 8px;
}

.fa-circle {
    -webkit-text-stroke: 1.3px var(--default-gray);
}

.red,
.high {
    color: var(--red);
}

.yellow,
.medium {
    color: var(--yellow);
}

.blue,
.low {
    color: var(--argentinian-blue);
}

/* Min view */

main > #min-view {
    height: 100%;
    border-right: 2px solid var(--borders-gray);
    grid-row: 2 / -1;
    grid-column: 2 / 3;

    display: grid;
    grid-template-rows: repeat(auto-fit, 60px);
    row-gap: 1.2em;
    padding-top: 1.2em;
}

#current-tab {
    font-size: 3rem;
    color: var(--default-gray);
    justify-self: end;
    position: absolute;
    bottom: 0.1em;
    margin-right: 16px;
}

/* TASKS CARD */

.task-card {
    padding: 0 1em;
    display: grid;
    grid-template-columns: 0.6em min-content 1fr min-content;
    transition: .1s ease-in-out;
}

.task-card:hover {
    cursor: pointer;
    scale: 1.01;
}

.priority {
    height: 100%;
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
}

.priority.high {
    background-color: var(--red);
}

.priority.medium {
    background-color: var(--yellow);
}

.priority.low {
    background-color: var(--argentinian-blue);
}

.checkbox-div {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    border-top: 2px solid var(--default-gray);
    border-bottom: 2px solid var(--default-gray);
    
    display: grid;
    align-content: center;
    justify-items: center;
    padding-left: 1em;
    padding-right: 1em;
}

.checkbox {
    margin-bottom: 1px;
    accent-color: var(--logo-blue);
    transform: scale(1.4);
    opacity: 50%;
}

.checkbox:hover {
    cursor: pointer;
    accent-color: var(--logo-blue); 
}

div.content-wrapper {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    border-top: 2px solid var(--default-gray);
    border-bottom: 2px solid var(--default-gray);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-right: 10%;
}

div.task-info {
    display: grid;
    align-content: center;
}

p.task-project {
    font-size: 0.8rem;
    color: var(--dark-gray);
}

p.due-date {
    grid-column: 4 / 5;
    justify-self: end;
    color: var(--dark-gray);
    font-size: 1rem;
}

div.task-actions {
    grid-row: 1 / 2;
    grid-column: 4 / -1;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    border-right: 2px solid var(--default-gray);
    border-top: 2px solid var(--default-gray);
    border-bottom: 2px solid var(--default-gray);
}

.task-card:has(.checkbox:checked){
    opacity: 40%;
}

/* PROJECTS CARD */

.project-card {
    padding: 0 1em;
    border: none;

    display: grid;
    grid-template-columns: 0.6em 1fr min-content;

    transition: .1s ease-in-out;
}

.project-card:hover {
    cursor: pointer;
    transform: scale(1.01);
}

.project-stripe {
    height: 100%;
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
    background-color: var(--default-gray);
}

.project-wrapper {
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    border-right: 2px solid var(--default-gray);
    border-top: 2px solid var(--default-gray);
    border-bottom: 2px solid var(--default-gray);

    display: grid;
    grid-template-columns: 1fr min-content;
    grid-template-rows: 1fr;
}

.project-info {
    margin-left: 0.8em;
    display: grid;
    align-content: center;
    justify-content: start;
}

.project-link {
    font-size: 0.8rem;
    color: var(--dark-gray);
    text-decoration: none;
}

.project-link:hover {
    text-decoration: underline var(--dark-gray);
}

.project-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5em;
    padding-right: 1em;
}

/* COMMON STYLES BETWEEN TASKS AND PROJECTS CARDS */
p.task-title,
p.project-title {
    color: var(--black);
    font-size: 1.2rem;
}

div.task-actions,
div.project-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5em;
    padding-right: 1em;
}


button.edit-task,
button.remove-task,
button.edit-project,
button.remove-project {
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    color: var(--dark-gray);
    border-radius: 5px;
}

button.edit-task:hover,
button.remove-task:hover,
button.edit-project:hover,
button.remove-project:hover {
    cursor: pointer;
    background-color: var(--light-gray);
}

/* FULL VIEW */

#full-view {
    grid-row: 2 / -1;
    grid-column: 3 / -1;

    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    align-items: start;
    row-gap: 1em;
}

#empty-view {
    color: var(--default-gray);
    margin-top: 45vh;
    text-align: center;
}

button#close {
    grid-column: -2 / -1;
    grid-row: 1 / 2;
    align-self: start;
    justify-self: end;

    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--default-gray);
    border-radius: 5px;
}

button#close:hover {
    cursor: pointer;
    opacity: 90%;
}

/* EXPANDED PROJECTS */

#full-project-tasks-div {
    height: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fit, 60px);
    row-gap: 1.2em;
    overflow-x: hidden;
}

#full-project-div {
    display: flex;
    flex-direction: column;
}

#full-project {
    height: min-content;
    display: grid;
    grid-template-columns: 1fr 5em;
    grid-template-rows: repeat(3, min-content);

    padding: 1em;
}

#full-project-info > h1 {
    color: var(--black);
    font-size: 2rem;
    margin-left: -2px;
}

#full-project-info > a {
    font-size: 1.2rem;
    color: var(--default-gray);
    text-decoration: none;
}

#full-project-info > a:hover {
    text-decoration: underline var(--default-gray);
}

#full-project-description {
    white-space: pre-wrap;
    grid-column: 1 / 2;
    
    color: var(--dark-gray);
    padding-top: 1.5em;
}
/* EXPANDED TASKS */

#full-task-div {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
}

#task-full {
    display: grid;
    grid-template-columns: 1fr 5em;
    grid-template-rows: repeat(3, min-content);
    align-items: start;

    padding: 1em;
}

#task-full-info {
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    column-gap: 1em;

    color: var(--black);
    font-size: 1.3rem;
}

#task-full-info > .fa-circle {
    font-size: 0.7rem;
}

#task-full-status {
    grid-row: 2 / 3;
    
    display: flex;
    align-items: center;
    column-gap: 1em;
    color: var(--default-gray);
}

#task-full-status > .checkbox {
    margin-left: 0.1em;
    accent-color: var(--logo-blue);
    transform: scale(1.4);
    opacity: 60%;
}
#task-full-status > .checkbox:checked {
    opacity: 100%;
}

#task-full-notes {
    white-space: pre-wrap;
    grid-column: 1 / 2;
    
    color: var(--dark-gray);
    padding-top: 1.5em;
}

pre > p {
    max-width: 60ch;
    font-family: 'Cascadia Code';
    font-size: 1rem;
    color: var(--dark-gray);
}

.point {
    color: var(--borders-gray);
    font-size: 1.2rem;
}

.line {
    background-color: var(--borders-gray);
    height: 2px;
}

/* MODALS */
#options-modal {
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100vw; 
    height: 100dvh; 
    overflow: auto; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);

    display: grid;
    place-content: center;
}

#options-to-create {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2em;
}

#create-task,
#create-project {
    font-size: 2rem;
    border: none;
    border-radius: 5px;
    width: 300px;
    height: 145px;
    color: #495057;
    background-color: #FFFFFF;
}

#create-task:hover,
#create-project:hover {
    cursor: pointer;
    background-color: var(--logo-blue);
    color: #FFFFFF;
}

form {
    background-color: #FFFFFF;
    margin: auto;
    padding: 20px;
    width: 300px;
    border-radius: 10px;
}

form > h1 {
    text-align: center;
    color: #6d6a75ff;
}

form > div {
    padding: 0.5em 1em;
    display: flex;
    flex-direction: column;
    color: #495057;
}

form > div > input,
form > div > select,
textarea {
    resize: none;
    border: 2px solid #D3D3D3;
    color: #6d6a75ff;
    border-radius: 5px;
}

input::placeholder,
textarea::placeholder {
    color: #D3D3D3;
}

select,
input[type="date"] {
    color: #adb5bdff;
}

form > div > button {
    border: none;
    background-color: var(--logo-blue);
    border-radius: 5px;
    color: #FFFFFF;
    padding: 0.3em;
}

button[type="submit"]:hover {
    cursor: pointer;
    filter: brightness(90%);
}

.hide {
    visibility: hidden;
    display: none;
}

.display{
    visibility: visible;
    display: block;
}

.invalid {
    border: 2px solid var(--red);
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n@import url('https://fonts.cdnfonts.com/css/cascadia-code');\n\n/* CSS Reset */\n\n*, *::before, *::after { box-sizing: border-box; }\n\n* { margin: 0; padding: 0; }\nbody { line-height: 1.5; -webkit-font-smoothing: antialiased; font-size: 100%;}\n\nimg, picture, svg, video, canvas { display: block; max-width: 100%; }\n\np, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }\n\ninput, button, textarea, select { font: inherit; }\n\n/* ------------------------------- */\n\n:root {\n    --logo-blue: #2196f3ff;\n    --background: #FFFFFF;\n\n    /* Tasks title */\n    --black: #495057;\n\n    /* All other text/icon in tasks cards */\n    --dark-gray: #6d6a75ff;\n\n    /* Border of tasks card */\n    --default-gray: #adb5bdff;\n    \n    /* Icons background on hover*/\n    --light-gray: #ebebeb;\n    \n    /* Borders */\n    --borders-gray: #D3D3D3;\n\n    /* Priorities */\n    --red: #ff5a5a;\n    --yellow: #f6c364;\n    --argentinian-blue: #64b5f6ff;\n}\n\nbody {\n    font-family: 'Cascadia Code';\n    background-color: var(--background);\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 4em 1fr 1fr;\n    grid-template-rows: 4em 1fr;\n    height: 100vh;\n}\n\nheader {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    border-bottom: 2px solid var(--borders-gray);\n    border-top: none;\n\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    column-gap: 1em;\n}\n\naside {\n    border-right: 2px solid var(--borders-gray);\n    grid-row: 2 / -1;\n    grid-column: 1 / 2;\n}\n\nnav {\n    padding: 1em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 1.5em;\n    height: 100%;\n}\n\n/* Header */\n\nheader > #logo {\n    margin-left: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 2.8rem;\n    color: var(--borders-gray);\n}\n\n/* Aside/nav */\n\nnav > button {\n    background: none;\n    border: none;\n    font-size: 1.5rem;\n    color: var(--default-gray);\n    border-radius: 5px;\n    padding: 3px 8px 2px 8px;\n}\n\n#create {\n    font-size: 1.5rem;\n    padding: 1px 8px 0 8px;\n}\n\nnav > button:hover,\ni.fa-github:hover,\nbutton#login:hover,\nbutton#toggle-theme:hover {\n    cursor: pointer;\n    background-color: var(--light-gray);\n}\n\n#nav-bottom {\n    position: absolute;\n    bottom: 0.5em;\n    display: grid;\n    justify-content: center;\n    row-gap: 0.5em;\n}\n\nbutton#toggle-theme {\n    background: none;\n    border: none;\n    color: var(--default-gray);\n    border-radius: 5px;\n}\n\ni.fa-github,\ni#theme-icon {\n    font-size: 1.8rem;\n    background: none;\n    border: none;\n    color: var(--default-gray);\n    border-radius: 5px;\n    padding: 8px;\n}\n\n.fa-circle {\n    -webkit-text-stroke: 1.3px var(--default-gray);\n}\n\n.red,\n.high {\n    color: var(--red);\n}\n\n.yellow,\n.medium {\n    color: var(--yellow);\n}\n\n.blue,\n.low {\n    color: var(--argentinian-blue);\n}\n\n/* Min view */\n\nmain > #min-view {\n    height: 100%;\n    border-right: 2px solid var(--borders-gray);\n    grid-row: 2 / -1;\n    grid-column: 2 / 3;\n\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 60px);\n    row-gap: 1.2em;\n    padding-top: 1.2em;\n}\n\n#current-tab {\n    font-size: 3rem;\n    color: var(--default-gray);\n    justify-self: end;\n    position: absolute;\n    bottom: 0.1em;\n    margin-right: 16px;\n}\n\n/* TASKS CARD */\n\n.task-card {\n    padding: 0 1em;\n    display: grid;\n    grid-template-columns: 0.6em min-content 1fr min-content;\n    transition: .1s ease-in-out;\n}\n\n.task-card:hover {\n    cursor: pointer;\n    scale: 1.01;\n}\n\n.priority {\n    height: 100%;\n    width: 100%;\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    border-top-left-radius: 1em;\n    border-bottom-left-radius: 1em;\n}\n\n.priority.high {\n    background-color: var(--red);\n}\n\n.priority.medium {\n    background-color: var(--yellow);\n}\n\n.priority.low {\n    background-color: var(--argentinian-blue);\n}\n\n.checkbox-div {\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    border-top: 2px solid var(--default-gray);\n    border-bottom: 2px solid var(--default-gray);\n    \n    display: grid;\n    align-content: center;\n    justify-items: center;\n    padding-left: 1em;\n    padding-right: 1em;\n}\n\n.checkbox {\n    margin-bottom: 1px;\n    accent-color: var(--logo-blue);\n    transform: scale(1.4);\n    opacity: 50%;\n}\n\n.checkbox:hover {\n    cursor: pointer;\n    accent-color: var(--logo-blue); \n}\n\ndiv.content-wrapper {\n    grid-row: 1 / 2;\n    grid-column: 3 / 4;\n    border-top: 2px solid var(--default-gray);\n    border-bottom: 2px solid var(--default-gray);\n\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding-right: 10%;\n}\n\ndiv.task-info {\n    display: grid;\n    align-content: center;\n}\n\np.task-project {\n    font-size: 0.8rem;\n    color: var(--dark-gray);\n}\n\np.due-date {\n    grid-column: 4 / 5;\n    justify-self: end;\n    color: var(--dark-gray);\n    font-size: 1rem;\n}\n\ndiv.task-actions {\n    grid-row: 1 / 2;\n    grid-column: 4 / -1;\n    border-top-right-radius: 1em;\n    border-bottom-right-radius: 1em;\n    border-right: 2px solid var(--default-gray);\n    border-top: 2px solid var(--default-gray);\n    border-bottom: 2px solid var(--default-gray);\n}\n\n.task-card:has(.checkbox:checked){\n    opacity: 40%;\n}\n\n/* PROJECTS CARD */\n\n.project-card {\n    padding: 0 1em;\n    border: none;\n\n    display: grid;\n    grid-template-columns: 0.6em 1fr min-content;\n\n    transition: .1s ease-in-out;\n}\n\n.project-card:hover {\n    cursor: pointer;\n    transform: scale(1.01);\n}\n\n.project-stripe {\n    height: 100%;\n    width: 100%;\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    border-top-left-radius: 1em;\n    border-bottom-left-radius: 1em;\n    background-color: var(--default-gray);\n}\n\n.project-wrapper {\n    border-top-right-radius: 1em;\n    border-bottom-right-radius: 1em;\n    border-right: 2px solid var(--default-gray);\n    border-top: 2px solid var(--default-gray);\n    border-bottom: 2px solid var(--default-gray);\n\n    display: grid;\n    grid-template-columns: 1fr min-content;\n    grid-template-rows: 1fr;\n}\n\n.project-info {\n    margin-left: 0.8em;\n    display: grid;\n    align-content: center;\n    justify-content: start;\n}\n\n.project-link {\n    font-size: 0.8rem;\n    color: var(--dark-gray);\n    text-decoration: none;\n}\n\n.project-link:hover {\n    text-decoration: underline var(--dark-gray);\n}\n\n.project-actions {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 0.5em;\n    padding-right: 1em;\n}\n\n/* COMMON STYLES BETWEEN TASKS AND PROJECTS CARDS */\np.task-title,\np.project-title {\n    color: var(--black);\n    font-size: 1.2rem;\n}\n\ndiv.task-actions,\ndiv.project-actions {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 0.5em;\n    padding-right: 1em;\n}\n\n\nbutton.edit-task,\nbutton.remove-task,\nbutton.edit-project,\nbutton.remove-project {\n    background-color: transparent;\n    border: none;\n    padding: 4px 8px;\n    color: var(--dark-gray);\n    border-radius: 5px;\n}\n\nbutton.edit-task:hover,\nbutton.remove-task:hover,\nbutton.edit-project:hover,\nbutton.remove-project:hover {\n    cursor: pointer;\n    background-color: var(--light-gray);\n}\n\n/* FULL VIEW */\n\n#full-view {\n    grid-row: 2 / -1;\n    grid-column: 3 / -1;\n\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: min-content 1fr;\n    align-items: start;\n    row-gap: 1em;\n}\n\n#empty-view {\n    color: var(--default-gray);\n    margin-top: 45vh;\n    text-align: center;\n}\n\nbutton#close {\n    grid-column: -2 / -1;\n    grid-row: 1 / 2;\n    align-self: start;\n    justify-self: end;\n\n    background: none;\n    border: none;\n    font-size: 1.5rem;\n    color: var(--default-gray);\n    border-radius: 5px;\n}\n\nbutton#close:hover {\n    cursor: pointer;\n    opacity: 90%;\n}\n\n/* EXPANDED PROJECTS */\n\n#full-project-tasks-div {\n    height: 100%;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 60px);\n    row-gap: 1.2em;\n    overflow-x: hidden;\n}\n\n#full-project-div {\n    display: flex;\n    flex-direction: column;\n}\n\n#full-project {\n    height: min-content;\n    display: grid;\n    grid-template-columns: 1fr 5em;\n    grid-template-rows: repeat(3, min-content);\n\n    padding: 1em;\n}\n\n#full-project-info > h1 {\n    color: var(--black);\n    font-size: 2rem;\n    margin-left: -2px;\n}\n\n#full-project-info > a {\n    font-size: 1.2rem;\n    color: var(--default-gray);\n    text-decoration: none;\n}\n\n#full-project-info > a:hover {\n    text-decoration: underline var(--default-gray);\n}\n\n#full-project-description {\n    white-space: pre-wrap;\n    grid-column: 1 / 2;\n    \n    color: var(--dark-gray);\n    padding-top: 1.5em;\n}\n/* EXPANDED TASKS */\n\n#full-task-div {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.2rem;\n}\n\n#task-full {\n    display: grid;\n    grid-template-columns: 1fr 5em;\n    grid-template-rows: repeat(3, min-content);\n    align-items: start;\n\n    padding: 1em;\n}\n\n#task-full-info {\n    grid-row: 1 / 2;\n\n    display: flex;\n    align-items: center;\n    column-gap: 1em;\n\n    color: var(--black);\n    font-size: 1.3rem;\n}\n\n#task-full-info > .fa-circle {\n    font-size: 0.7rem;\n}\n\n#task-full-status {\n    grid-row: 2 / 3;\n    \n    display: flex;\n    align-items: center;\n    column-gap: 1em;\n    color: var(--default-gray);\n}\n\n#task-full-status > .checkbox {\n    margin-left: 0.1em;\n    accent-color: var(--logo-blue);\n    transform: scale(1.4);\n    opacity: 60%;\n}\n#task-full-status > .checkbox:checked {\n    opacity: 100%;\n}\n\n#task-full-notes {\n    white-space: pre-wrap;\n    grid-column: 1 / 2;\n    \n    color: var(--dark-gray);\n    padding-top: 1.5em;\n}\n\npre > p {\n    max-width: 60ch;\n    font-family: 'Cascadia Code';\n    font-size: 1rem;\n    color: var(--dark-gray);\n}\n\n.point {\n    color: var(--borders-gray);\n    font-size: 1.2rem;\n}\n\n.line {\n    background-color: var(--borders-gray);\n    height: 2px;\n}\n\n/* MODALS */\n#options-modal {\n    position: fixed; \n    z-index: 1; \n    left: 0;\n    top: 0;\n    width: 100vw; \n    height: 100dvh; \n    overflow: auto; \n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n\n    display: grid;\n    place-content: center;\n}\n\n#options-to-create {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 2em;\n}\n\n#create-task,\n#create-project {\n    font-size: 2rem;\n    border: none;\n    border-radius: 5px;\n    width: 300px;\n    height: 145px;\n    color: #495057;\n    background-color: #FFFFFF;\n}\n\n#create-task:hover,\n#create-project:hover {\n    cursor: pointer;\n    background-color: var(--logo-blue);\n    color: #FFFFFF;\n}\n\nform {\n    background-color: #FFFFFF;\n    margin: auto;\n    padding: 20px;\n    width: 300px;\n    border-radius: 10px;\n}\n\nform > h1 {\n    text-align: center;\n    color: #6d6a75ff;\n}\n\nform > div {\n    padding: 0.5em 1em;\n    display: flex;\n    flex-direction: column;\n    color: #495057;\n}\n\nform > div > input,\nform > div > select,\ntextarea {\n    resize: none;\n    border: 2px solid #D3D3D3;\n    color: #6d6a75ff;\n    border-radius: 5px;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n    color: #D3D3D3;\n}\n\nselect,\ninput[type=\"date\"] {\n    color: #adb5bdff;\n}\n\nform > div > button {\n    border: none;\n    background-color: var(--logo-blue);\n    border-radius: 5px;\n    color: #FFFFFF;\n    padding: 0.3em;\n}\n\nbutton[type=\"submit\"]:hover {\n    cursor: pointer;\n    filter: brightness(90%);\n}\n\n.hide {\n    visibility: hidden;\n    display: none;\n}\n\n.display{\n    visibility: visible;\n    display: block;\n}\n\n.invalid {\n    border: 2px solid var(--red);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/general.js":
/*!************************************!*\
  !*** ./src/controllers/general.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeLabelto: () => (/* binding */ changeLabelto),
/* harmony export */   clearDisplayed: () => (/* binding */ clearDisplayed),
/* harmony export */   clearProjectTasks: () => (/* binding */ clearProjectTasks),
/* harmony export */   updateIds: () => (/* binding */ updateIds)
/* harmony export */ });
/* harmony import */ var _others_domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/domCreator */ "./src/others/domCreator.js");


const minView = document.querySelector('#min-view');
// This function is called in objects everytime an object is added/removed
function updateIds(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].id = i;
    };
};

function clearDisplayed(){
    // Since the tab label is one of the childs, there's the need to create it again
    let label = document.querySelector('#current-tab').textContent;
    if(minView.firstElementChild){
        do{
            minView.firstElementChild.remove();
        } while(minView.firstElementChild);
        minView.appendChild(_others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('div', 'current-tab', label));
    };
};

function changeLabelto(what){
    document.querySelector('#current-tab').textContent = what;
};

function clearProjectTasks(){
    const fullView = document.querySelector('#full-view');
    fullView.lastElementChild.remove();
};



/***/ }),

/***/ "./src/controllers/projectActions.js":
/*!*******************************************!*\
  !*** ./src/controllers/projectActions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeProjectDinamically: () => (/* binding */ removeProjectDinamically)
/* harmony export */ });
/* harmony import */ var _models_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/projects */ "./src/models/projects.js");
/* harmony import */ var _models_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tasks */ "./src/models/tasks.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general */ "./src/controllers/general.js");
/* harmony import */ var _views_full_view_expandedCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/full-view/expandedCommon */ "./src/views/full-view/expandedCommon.js");
/* harmony import */ var _projectsController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsController */ "./src/controllers/projectsController.js");
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/projectsStorage */ "./src/storage/projectsStorage.js");
/* harmony import */ var _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage/tasksStorage */ "./src/storage/tasksStorage.js");








function removeProjectDinamically(index){
    const storedProjects = _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_5__["default"].getAllProjects()
    const storedTasks = _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_6__["default"].getAllTasks();
    const projectInMinView = document.querySelector(`[data-proj-id='${index}']`);
    const projectExpanded = document.querySelector(`[data-proj-index='${index}']`);
    // These are the tasks that are going to be removed with the project
    let tasksRemoved = storedTasks.filter(task => task.project === storedProjects[index].title);
    // Checking if one of the tasks to be removed are expanded
    const taskExpanded = document.querySelector('#task-full');
    for(const task of tasksRemoved){
        if(taskExpanded !== null){
            if(task.id === Number(taskExpanded.dataset.expanded)){
                (0,_views_full_view_expandedCommon__WEBPACK_IMPORTED_MODULE_3__.removeAllExpanded)(true);
            } else {
                console.log(task.id)
            };
        }
    };
    // This is the tasks array without the projects that are going to be removed with the project
    let survivingTasks = storedTasks.filter(task => task.project !== storedProjects[index].title);
    _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_5__["default"].removeProject(index)
    _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_6__["default"].updateTasks(survivingTasks);
    
    if(projectInMinView !== null){
        (0,_general__WEBPACK_IMPORTED_MODULE_2__.clearDisplayed)();
        (0,_projectsController__WEBPACK_IMPORTED_MODULE_4__.displayProjects)();
    };
    if(projectExpanded !== null){
        (0,_views_full_view_expandedCommon__WEBPACK_IMPORTED_MODULE_3__.removeAllExpanded)(true);
    };
};



/***/ }),

/***/ "./src/controllers/projectsController.js":
/*!***********************************************!*\
  !*** ./src/controllers/projectsController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   submitProject: () => (/* binding */ submitProject)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/controllers/general.js");
/* harmony import */ var _views_modal_forms_projForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/modal-forms/projForm */ "./src/views/modal-forms/projForm.js");
/* harmony import */ var _views_modal_forms_displayOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/modal-forms/displayOptions */ "./src/views/modal-forms/displayOptions.js");
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/projectsStorage */ "./src/storage/projectsStorage.js");
/* harmony import */ var _models_projectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/projectCard */ "./src/models/projectCard.js");






const minView = document.querySelector('#min-view');

function displayProjects(){
    for(const proj of _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getAllProjects()){
        minView.appendChild((0,_models_projectCard__WEBPACK_IMPORTED_MODULE_4__["default"])(proj));
    };
};

function submitProject(modalToHide, otherModalToHide){
    (0,_views_modal_forms_projForm__WEBPACK_IMPORTED_MODULE_1__.createProj)();
    (0,_general__WEBPACK_IMPORTED_MODULE_0__.clearDisplayed)();
    displayProjects();
    (0,_general__WEBPACK_IMPORTED_MODULE_0__.changeLabelto)('Projects');
    (0,_views_modal_forms_displayOptions__WEBPACK_IMPORTED_MODULE_2__.hide)(modalToHide, otherModalToHide);
};



/***/ }),

/***/ "./src/controllers/taskActions.js":
/*!****************************************!*\
  !*** ./src/controllers/taskActions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkDinamically: () => (/* binding */ checkDinamically),
/* harmony export */   removeTaskDinamically: () => (/* binding */ removeTaskDinamically)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/controllers/general.js");
/* harmony import */ var _tasksController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksController */ "./src/controllers/tasksController.js");
/* harmony import */ var _views_full_view_expandedCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/full-view/expandedCommon */ "./src/views/full-view/expandedCommon.js");
/* harmony import */ var _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/tasksStorage */ "./src/storage/tasksStorage.js");
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/projectsStorage */ "./src/storage/projectsStorage.js");






function checkDinamically(checkbox, index){
    const tasksInMinView = document.querySelector(`[data-index='${index}']`);
    const tasksInProjectExpanded = document.querySelector(`[data-full-index='${index}']`);
    const taskExpanded = document.querySelector(`[data-expanded='${index}']`);
    _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_3__["default"].changeIsDone(index);

    // Card exists in:
    // minview AND expanded
    if(tasksInMinView !== null && taskExpanded !== null){
        if(checkbox.checked === true){
            tasksInMinView.children[1].firstChild.checked = true;
            taskExpanded.children[2].lastChild.checked = true;
        } else {
            tasksInMinView.children[1].firstChild.checked = false;
            taskExpanded.children[2].lastChild.checked = false;
        };
    };

    // minView AND fullView
    if(tasksInMinView !== null && tasksInProjectExpanded !== null){
        if(checkbox.checked === true){
            tasksInMinView.children[1].firstChild.checked = true;
            tasksInProjectExpanded.children[1].firstChild.checked = true;
        } else {
            tasksInMinView.children[1].firstChild.checked = false;
            tasksInProjectExpanded.children[1].firstChild.checked = false;
        };
    };

    // Only minView
    if(tasksInMinView !== null && tasksInProjectExpanded === null){
        if(checkbox.checked === true) {
            tasksInMinView.children[1].firstChild.checked = true;
        } else {
            tasksInMinView.children[1].firstChild.checked = false;
        };
    };

    // Only fullView
    if(tasksInProjectExpanded !== null && tasksInMinView === null){
        if(checkbox.checked === true) {
            tasksInProjectExpanded.children[1].firstChild.checked = true;
        } else {
            tasksInProjectExpanded.children[1].firstChild.checked = false;
        };
    };
};

function removeTaskDinamically(index){
    const tasksInMinView = document.querySelector(`[data-index='${index}']`);
    const tasksInProjectExpanded = document.querySelector(`[data-full-index='${index}']`);
    const taskExpanded = document.querySelector(`[data-expanded='${index}']`);
    const projectExpanded = document.querySelector(`[data-proj-index]`);
    _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_3__["default"].removeTask(index)

    if(tasksInMinView !== null){
        (0,_general__WEBPACK_IMPORTED_MODULE_0__.clearDisplayed)();
        (0,_tasksController__WEBPACK_IMPORTED_MODULE_1__.displayTasks)();
    }
    if(tasksInProjectExpanded !== null){
        (0,_general__WEBPACK_IMPORTED_MODULE_0__.clearProjectTasks)();
        (0,_tasksController__WEBPACK_IMPORTED_MODULE_1__.displayProjectTasks)(_storage_projectsStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getAllProjects());
    }
    if(taskExpanded !== null){
        (0,_views_full_view_expandedCommon__WEBPACK_IMPORTED_MODULE_2__.removeAllExpanded)(true);
    }
};



/***/ }),

/***/ "./src/controllers/tasksController.js":
/*!********************************************!*\
  !*** ./src/controllers/tasksController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProjectTasks: () => (/* binding */ displayProjectTasks),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   submitTask: () => (/* binding */ submitTask)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./src/controllers/general.js");
/* harmony import */ var _views_modal_forms_taskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/modal-forms/taskForm */ "./src/views/modal-forms/taskForm.js");
/* harmony import */ var _views_modal_forms_displayOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/modal-forms/displayOptions */ "./src/views/modal-forms/displayOptions.js");
/* harmony import */ var _models_taskCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/taskCard */ "./src/models/taskCard.js");
/* harmony import */ var _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/tasksStorage */ "./src/storage/tasksStorage.js");






const minView = document.querySelector('#min-view');
const fullView = document.querySelector('#full-view');

function displayTasks(){
    for(const task of _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getAllTasks()){
        minView.appendChild((0,_models_taskCard__WEBPACK_IMPORTED_MODULE_3__["default"])(task));
    };
};

function displayProjectTasks(proj){
    const projectTasks = document.createElement('div');
    projectTasks.id = 'full-project-tasks-div';
    for(const task of _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getAllTasks()){
        if(task.project === proj.title){
            let card = (0,_models_taskCard__WEBPACK_IMPORTED_MODULE_3__["default"])(task);
            card.removeAttribute('data-index');
            card.dataset.fullIndex = task.id;
            projectTasks.appendChild(card);
        };
    };
    fullView.appendChild(projectTasks);
};

function submitTask(modalToHide, otherModalTohide){
    (0,_views_modal_forms_taskForm__WEBPACK_IMPORTED_MODULE_1__.createTask)();   
    (0,_general__WEBPACK_IMPORTED_MODULE_0__.clearDisplayed)();
    displayTasks();
    (0,_general__WEBPACK_IMPORTED_MODULE_0__.changeLabelto)('Home');
    (0,_views_modal_forms_displayOptions__WEBPACK_IMPORTED_MODULE_2__.hide)(modalToHide, otherModalTohide);
};



/***/ }),

/***/ "./src/models/projectCard.js":
/*!***********************************!*\
  !*** ./src/models/projectCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectCard)
/* harmony export */ });
/* harmony import */ var _others_domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../others/domCreator */ "./src/others/domCreator.js");
/* harmony import */ var _views_full_view_expandProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/full-view/expandProject */ "./src/views/full-view/expandProject.js");
/* harmony import */ var _controllers_projectActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/projectActions */ "./src/controllers/projectActions.js");
/* harmony import */ var _views_modal_forms_editProjectForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/modal-forms/editProjectForm */ "./src/views/modal-forms/editProjectForm.js");





function newProjectCard(project) {
    const projDiv = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('div', '', 'project-card');
    const stripe = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('div', '', 'project-stripe');
    const wrapper = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('div', '', 'project-wrapper');
    const info = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('div', '', 'project-info');
    const title = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('p', project.title, 'project-title');
    const link = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('a', project.link, 'project-link');
    const actions = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('div', '', 'project-actions');
    const editProjectBtn = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('button', '', 'edit-project');
    const editIcon = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('i', '', 'fa-regular', 'fa-pen-to-square');
    const removeProjectBtn = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('button', '', 'remove-project');
    const removeIcon = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('i', '', 'fa-regular', 'fa-square-minus');
    link.href = project.link;
    projDiv.dataset.projId = project.id;
    info.addEventListener('click', () => {
        (0,_views_full_view_expandProject__WEBPACK_IMPORTED_MODULE_1__["default"])(project.id);
    });
    stripe.addEventListener('click', () => {
        (0,_views_full_view_expandProject__WEBPACK_IMPORTED_MODULE_1__["default"])(project.id);
    });
    removeProjectBtn.addEventListener('click', () => {
        (0,_controllers_projectActions__WEBPACK_IMPORTED_MODULE_2__.removeProjectDinamically)(project.id);
    });
    editProjectBtn.addEventListener('click', () => {
        (0,_views_modal_forms_editProjectForm__WEBPACK_IMPORTED_MODULE_3__.displayProjectForm)(project.id)
    });

    removeProjectBtn.appendChild(removeIcon);
    editProjectBtn.appendChild(editIcon);
    actions.append(editProjectBtn, removeProjectBtn);
    info.append(title, link);
    wrapper.append(info, actions);
    projDiv.append(stripe, wrapper);

    return projDiv;
};

// Layout:

//  div.project-card
//  ^ div.project-stripe
//  ^ div.project-wrapper
//      ^ div.project-info
//          ^ p.project-title
//          ^ a.project-link
//      ^ div.project-actions
//          ^ button.edit-project
//              ^ i.fa-regular.fa-pen-to-square
//          ^ button.remove-project
//              ^ i.fa-regular.fa-square-minus

/***/ }),

/***/ "./src/models/projects.js":
/*!********************************!*\
  !*** ./src/models/projects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/projectsStorage */ "./src/storage/projectsStorage.js");


let projects = [];

class Project {
    constructor(title, link, description) {
        this.title = title,
        this.link = link,
        this.description = description,
        this.tasks = [],
        this.id = null

        _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].storeProject(this)
    };
};




/***/ }),

/***/ "./src/models/taskCard.js":
/*!********************************!*\
  !*** ./src/models/taskCard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTaskCard)
/* harmony export */ });
/* harmony import */ var _controllers_taskActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/taskActions */ "./src/controllers/taskActions.js");
/* harmony import */ var _others_domCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../others/domCreator */ "./src/others/domCreator.js");
/* harmony import */ var _views_full_view_expandTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/full-view/expandTask */ "./src/views/full-view/expandTask.js");
/* harmony import */ var _views_modal_forms_editTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/modal-forms/editTaskForm */ "./src/views/modal-forms/editTaskForm.js");





function newTaskCard(task) {
    const cardDiv = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('div', '', 'task-card');
    const priority = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('div', '', 'priority', task.priority);
    const contentWrapper = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('div', '', 'content-wrapper');
    const checkboxDiv = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('div', '', 'checkbox-div');
    const checkbox = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('input', '', 'checkbox');
    const info = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('div', '', 'task-info');
    const title = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('p', task.title, 'task-title');
    const project = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('p', task.project, 'task-project');
    const dueDate = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('p', task.dueDate, 'due-date');
    const actions = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('div', '', 'task-actions');
    const editTaskBtn = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('button', '', 'edit-task');
    const editIcon = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('i', '', 'fa-regular', 'fa-pen-to-square');
    const removeTaskBtn = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('button', '', 'remove-task');
    const removeIcon = _others_domCreator__WEBPACK_IMPORTED_MODULE_1__["default"].elWithClass('i', '', 'fa-regular', 'fa-square-minus');
    cardDiv.dataset.index = task.id;
    checkbox.type = 'checkbox';
    checkbox.checked = task.isDone;
    checkbox.addEventListener('click', () => {
        (0,_controllers_taskActions__WEBPACK_IMPORTED_MODULE_0__.checkDinamically)(checkbox, task.id);
    });
    contentWrapper.addEventListener('click', () => {
        (0,_views_full_view_expandTask__WEBPACK_IMPORTED_MODULE_2__["default"])(task.id);
    });
    priority.addEventListener('click', () => {
        (0,_views_full_view_expandTask__WEBPACK_IMPORTED_MODULE_2__["default"])(task.id);
    });
    removeTaskBtn.addEventListener('click', () => {
        (0,_controllers_taskActions__WEBPACK_IMPORTED_MODULE_0__.removeTaskDinamically)(task.id);
    });
    editTaskBtn.addEventListener('click', () => {
        (0,_views_modal_forms_editTaskForm__WEBPACK_IMPORTED_MODULE_3__.displayEditTaskForm)(task.id);
    });
    
    removeTaskBtn.appendChild(removeIcon);
    editTaskBtn.appendChild(editIcon);
    actions.append(editTaskBtn, removeTaskBtn);
    info.append(title, project);
    contentWrapper.append(info, dueDate);
    checkboxDiv.appendChild(checkbox)
    cardDiv.append(priority, checkboxDiv, contentWrapper, actions);
    
    return cardDiv;
};

// Layout:

//  div.task-card
//  ^ div.priority.low 
//  ^ div.checkbox-div
//      ^ input.checkbox
//  ^ div.contentWrapper-contentWrapper
//      ^ div.info
//          ^ p.task-title
//          ^ p.task-project
//      ^ p.due-date
//  ^ div.actions
//      ^ button.edit-task
//          ^ i.fa-regular.fa-pen-to-square
//      ^ button.remove-task
//          ^ i.fa-regular.fa-square-minus

/***/ }),

/***/ "./src/models/tasks.js":
/*!*****************************!*\
  !*** ./src/models/tasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   array: () => (/* binding */ array),
/* harmony export */   filterTasks: () => (/* binding */ filterTasks),
/* harmony export */   sincronize: () => (/* binding */ sincronize)
/* harmony export */ });
/* harmony import */ var _controllers_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/general */ "./src/controllers/general.js");
/* harmony import */ var _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/tasksStorage */ "./src/storage/tasksStorage.js");



let array = [];

class Task {
    constructor(title, project, dueDate, priority, notes) {
        this.title = title,
        this.project = project,
        this.dueDate = dueDate,
        this.priority = priority.toLowerCase(),
        this.notes = notes,
        this.isDone = false

        _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_1__["default"].storeTask(this);
    };
};

function filterTasks(newArr){
    array = newArr;
    (0,_controllers_general__WEBPACK_IMPORTED_MODULE_0__.updateIds)(array);
};

function sincronize(ew){
    array = ew
}



/***/ }),

/***/ "./src/others/domCreator.js":
/*!**********************************!*\
  !*** ./src/others/domCreator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const create = (function() {
    function el(el, text) {
        let element = document.createElement(el);
        element.textContent = text;
        return element;
    };
    
    function elWithId(el, id, text) {
        let element = document.createElement(el);
        element.id = id;
        element.textContent = text;
        return element;
    };
    
    function elWithClass(el, text, ...classes) {
        let element = document.createElement(el);
        for(const cl of classes){
            element.classList.add(cl);
        };
        element.textContent = text;
        return element;
    };
    
    return {
        el,
        elWithId,
        elWithClass
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);

/***/ }),

/***/ "./src/others/logo.js":
/*!****************************!*\
  !*** ./src/others/logo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setImages)
/* harmony export */ });
/* harmony import */ var _assets_favicon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/favicon.svg */ "./assets/favicon.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/logo.svg */ "./assets/logo.svg");
/* harmony import */ var _domCreator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domCreator.js */ "./src/others/domCreator.js");




function setImages(){
    // Favicon
    let headTitle = document.querySelector('head');
    let setFavicon = _domCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"].el('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', _assets_favicon_svg__WEBPACK_IMPORTED_MODULE_0__);
    headTitle.appendChild(setFavicon);

    // Header logo
    let logoDiv = document.querySelector('#logo')
    let logo = _domCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"].el('img');
    let logoText = _domCreator_js__WEBPACK_IMPORTED_MODULE_2__["default"].el('p', 'Due');
    logo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
    logoText.style.color = 'var(--default-gray)'
    logoDiv.append(logo, logoText)
};

setImages();

/***/ }),

/***/ "./src/storage/projectsStorage.js":
/*!****************************************!*\
  !*** ./src/storage/projectsStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let array = []

const projects = (function(){
    if(localStorage.getItem('projects') === null){
        localStorage.setItem('projects', JSON.stringify(array));
        storeProject({
            "title": "Demo project",
            "link": "projectlink.com",
            "description": "Be careful! Excluding a project will automatically exclude all tasks attached to it.",
            "tasks": [],
            "id": 0
        });
    }
    
    function storeProject(obj){
        let parsed = JSON.parse(localStorage.getItem('projects'));
        parsed.push(obj);
        localStorage.setItem('projects', JSON.stringify(parsed));
        updateProjectsIds();
    };

    function removeProject(i){
        let parsed = JSON.parse(localStorage.getItem('projects'));
        parsed.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(parsed));
        updateProjectsIds();
    };

    function getAllProjects(){
        return JSON.parse(localStorage.getItem('projects'));
    };

    function editProject(i, newTitle, newLink, newDescription){
        let parsed = JSON.parse(localStorage.getItem('projects'));
        if(newTitle !== ''){
            parsed[i].title = newTitle
        }
        parsed[i].link = newLink;
        parsed[i].description = newDescription;
        localStorage.setItem('projects', JSON.stringify(parsed));
    };

    return {
        storeProject,
        removeProject,
        getAllProjects,
        editProject
    }
})();

function updateProjectsIds(){
    let stored = JSON.parse(localStorage.getItem('projects'));
    for(let i = 0; i < stored.length; i++){
        stored[i].id = i;
    };
    localStorage.setItem('projects', JSON.stringify(stored));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/storage/tasksStorage.js":
/*!*************************************!*\
  !*** ./src/storage/tasksStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_taskCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/taskCard */ "./src/models/taskCard.js");


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
            "notes": "The '+' button on sidebar is all you need to create tasks and projects.\n\nTake a time to play with the sidebar icons and discover what you can do!\n\nYou can toggle between dark/light theme by clicking the sun/moon icon right at the bottom of the sidebar.",
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
            minView.append((0,_models_taskCard__WEBPACK_IMPORTED_MODULE_0__["default"])(task));
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);



/***/ }),

/***/ "./src/views/full-view/expandProject.js":
/*!**********************************************!*\
  !*** ./src/views/full-view/expandProject.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandProject)
/* harmony export */ });
/* harmony import */ var _others_domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../others/domCreator */ "./src/others/domCreator.js");
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storage/projectsStorage */ "./src/storage/projectsStorage.js");
/* harmony import */ var _modal_forms_displayOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-forms/displayOptions */ "./src/views/modal-forms/displayOptions.js");
/* harmony import */ var _controllers_tasksController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controllers/tasksController */ "./src/controllers/tasksController.js");
/* harmony import */ var _expandedCommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expandedCommon */ "./src/views/full-view/expandedCommon.js");






function expandProject(index){
    const fullView = document.querySelector('#full-view');
    let projectsArr = _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getAllProjects()

    for(let i = 0; i < projectsArr.length; i++){
        if(i === parseInt(index)){
            (0,_expandedCommon__WEBPACK_IMPORTED_MODULE_4__.removeAllExpanded)();
            (0,_modal_forms_displayOptions__WEBPACK_IMPORTED_MODULE_2__.updateCurrentExpanded)(i);
            const fullProjDiv = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('div', 'full-project-div');
            const closeBtn = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('button', 'close');
            const closeIcon = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('i', '', 'fa-solid', 'fa-xmark');
            const project = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('div', 'full-project');
            const info = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('div', 'full-project-info');
            const title = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('h1', 'full-project-title', projectsArr[i].title);
            const link = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('a', 'full-project-link', projectsArr[i].link);
            const descDiv = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('pre', 'full-project-description');
            const description = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].el('p', projectsArr[i].description)
            const line = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('div', '', 'line');
            
            link.href = projectsArr[i].link;
            closeBtn.addEventListener('click', () => {
                (0,_expandedCommon__WEBPACK_IMPORTED_MODULE_4__.removeAllExpanded)(true);
            });
            project.dataset.projIndex = i;

            closeBtn.appendChild(closeIcon)
            descDiv.appendChild(description);
            info.append(title, link);
            project.append(closeBtn, info, descDiv);
            fullProjDiv.append(project, line)
            fullView.append(fullProjDiv);

            (0,_controllers_tasksController__WEBPACK_IMPORTED_MODULE_3__.displayProjectTasks)(projectsArr[i]);
        };
    };
};

/***/ }),

/***/ "./src/views/full-view/expandTask.js":
/*!*******************************************!*\
  !*** ./src/views/full-view/expandTask.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandTask)
/* harmony export */ });
/* harmony import */ var _others_domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../others/domCreator */ "./src/others/domCreator.js");
/* harmony import */ var _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storage/tasksStorage */ "./src/storage/tasksStorage.js");
/* harmony import */ var _expandedCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandedCommon */ "./src/views/full-view/expandedCommon.js");
/* harmony import */ var _controllers_taskActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controllers/taskActions */ "./src/controllers/taskActions.js");





function expandTask(index){
    const fullView = document.querySelector('#full-view');
    let tasksArr = _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getAllTasks();

    for(let i = 0; i < tasksArr.length; i++){
        if(i === parseInt(index)){
            (0,_expandedCommon__WEBPACK_IMPORTED_MODULE_2__.removeAllExpanded)();
            const fullTaskDiv = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('div', 'full-task-div');
            const closeBtn = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('button', 'close');
            const closeIcon = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('i', '', 'fa-solid', 'fa-xmark');
            const point1 = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('span', '•', 'point');
            const point2 = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('span', '•', 'point');
            const taskFull = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('div', 'task-full');
            const info = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('div', 'task-full-info');
            const title = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('div', 'title-full', tasksArr[i].title);
            const priority = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('div', '', tasksArr[i].priority, 'fa-solid', 'fa-circle');
            const status = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('div', 'task-full-status');
            const taskProject = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('p', 'task-full-project', tasksArr[i].project);
            const dueDate = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('p', 'task-full-date', tasksArr[i].dueDate);
            const checkbox = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('input', '', 'checkbox');
            const notesDiv = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithId('pre', 'task-full-notes');
            const notes = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].el('p', tasksArr[i].notes);
            const line = _others_domCreator__WEBPACK_IMPORTED_MODULE_0__["default"].elWithClass('div', '', 'line');
            
            taskFull.dataset.expanded = index;
            checkbox.type = 'checkbox';
            checkbox.addEventListener('click', () => {
                (0,_controllers_taskActions__WEBPACK_IMPORTED_MODULE_3__.checkDinamically)(checkbox, index)
            });
            closeBtn.addEventListener('click', () => {
                (0,_expandedCommon__WEBPACK_IMPORTED_MODULE_2__.removeAllExpanded)(true);
            });

            if(tasksArr[i].isDone){
                checkbox.checked = true;
            };
            if(taskProject.textContent !== ''){
                status.append(taskProject, point1);
            };
            if(dueDate.textContent !== ''){
                status.append(dueDate, point2);
            };
    
            closeBtn.appendChild(closeIcon)
            notesDiv.appendChild(notes);
            status.appendChild(checkbox);
            info.append(title, priority);
            taskFull.append(closeBtn, info, status, notesDiv);
            fullTaskDiv.append(taskFull, line)
            fullView.append(fullTaskDiv);
        };
    };
};

/***/ }),

/***/ "./src/views/full-view/expandedCommon.js":
/*!***********************************************!*\
  !*** ./src/views/full-view/expandedCommon.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAllExpanded: () => (/* binding */ removeAllExpanded)
/* harmony export */ });
let emptyViewText = document.createElement('div');
emptyViewText.id = 'empty-view';
emptyViewText.textContent = 'Try clicking in a task or project to expand it';

function removeAllExpanded(displayEmptyText = false){
    const fullView = document.querySelector('#full-view');

    if(fullView.firstElementChild !== null){
        do {
            fullView.firstElementChild.remove();
        } while(fullView.firstElementChild);
    }

    if(displayEmptyText){
        fullView.appendChild(emptyViewText);
    }
};

/***/ }),

/***/ "./src/views/modal-forms/displayOptions.js":
/*!*************************************************!*\
  !*** ./src/views/modal-forms/displayOptions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseModal: () => (/* binding */ baseModal),
/* harmony export */   displayForm: () => (/* binding */ displayForm),
/* harmony export */   getCurrentExpanded: () => (/* binding */ getCurrentExpanded),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   unhide: () => (/* binding */ unhide),
/* harmony export */   updateCurrentExpanded: () => (/* binding */ updateCurrentExpanded)
/* harmony export */ });
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm */ "./src/views/modal-forms/taskForm.js");
/* harmony import */ var _projForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projForm */ "./src/views/modal-forms/projForm.js");



let currentExpanded = null;
const buttonToCreate = document.querySelector('#create');
const baseModal = document.querySelector('#options-modal');
const optionsToCreate = document.querySelector('#options-to-create');
const createTaskBtn = document.querySelector('#create-task');
const createProjBtn = document.querySelector('#create-project');

buttonToCreate.addEventListener('click', () => {
    unhide(baseModal, optionsToCreate, createTaskBtn, createProjBtn)
    closeModalBheavior(baseModal);
});

function displayForm(form){
    form.reset();
    hide(optionsToCreate, createTaskBtn, createProjBtn)
    unhide(form)
    closeModalBheavior(baseModal);
}

function hide(...elements){
    for(const el of elements){
        el.classList.remove('display');
        el.classList.add('hide');
    };
};

function unhide(...elements){
    for(const el of elements){
        el.classList.remove('hide');
        el.classList.add('display');
    };
};

function closeModalBheavior(modal) {
    const taskForm = document.querySelector('#task-form');
    const projForm = document.querySelector('#project-form');
    const editProjForm = document.querySelector('#edit-project-form');
    const editTaskForm = document.querySelector('#edit-task-form');
    window.onclick = function(event) {
        if (event.target === modal) {
            hide(optionsToCreate,
                 createTaskBtn,
                 createProjBtn,
                 modal,
                 taskForm,
                 projForm,
                 editProjForm,
                 editTaskForm);
        };
    };
};

function updateCurrentExpanded(arg){
    currentExpanded = arg;
    console.log(currentExpanded)
};

function getCurrentExpanded(){
    return currentExpanded;
};




/***/ }),

/***/ "./src/views/modal-forms/editProjectForm.js":
/*!**************************************************!*\
  !*** ./src/views/modal-forms/editProjectForm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProjectForm: () => (/* binding */ displayProjectForm)
/* harmony export */ });
/* harmony import */ var _displayOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayOptions */ "./src/views/modal-forms/displayOptions.js");
/* harmony import */ var _controllers_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/general */ "./src/controllers/general.js");
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/projectsController */ "./src/controllers/projectsController.js");
/* harmony import */ var _full_view_expandProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../full-view/expandProject */ "./src/views/full-view/expandProject.js");
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage/projectsStorage */ "./src/storage/projectsStorage.js");






const editProjForm = document.querySelector('#edit-project-form');
const editProjBtn = document.querySelector('#edit-project');

let projToEditID;

function loadEditForm(){
    editProjBtn.addEventListener('click', (event) => {
        event.preventDefault();
        saveChanges(projToEditID);
    });
};

function displayProjectForm(i){
    const storedProjects = _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getAllProjects()
    projToEditID = i;
    (0,_displayOptions__WEBPACK_IMPORTED_MODULE_0__.unhide)(_displayOptions__WEBPACK_IMPORTED_MODULE_0__.baseModal);
    (0,_displayOptions__WEBPACK_IMPORTED_MODULE_0__.displayForm)(editProjForm);
    const title = document.querySelector('input#edit-project-title');
    const link = document.querySelector('input#edit-project-link');
    const description = document.querySelector('textarea#edit-project-description');
    title.value = storedProjects[i].title
    link.value = storedProjects[i].link
    description.textContent = storedProjects[i].description
};

function saveChanges(index){
    const storedProjects = _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getAllProjects()
    const title = document.querySelector('input#edit-project-title');
    const link = document.querySelector('input#edit-project-link').value;
    const description = document.querySelector('textarea#edit-project-description').value;
    let filter = storedProjects.filter(proj => proj.title === title.value); 

    if(title.value !== '' && 
        (!filter[0] || title.value === storedProjects[index].title)
    ){
        _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_4__["default"].editProject(index, title.value, link, description);
        (0,_displayOptions__WEBPACK_IMPORTED_MODULE_0__.hide)(_displayOptions__WEBPACK_IMPORTED_MODULE_0__.baseModal, editProjForm);
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_1__.clearDisplayed)();
        (0,_controllers_projectsController__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
        updateIfExpanded(index);
        title.classList.remove('invalid');
    } else {
        alert("Can't have two projects with the same title")
        title.classList.add('invalid');
    };
};

function updateIfExpanded(dataIndex){
    const expanded = document.querySelector(`[data-proj-index='${dataIndex}']`);
    if(expanded !== null){
        (0,_full_view_expandProject__WEBPACK_IMPORTED_MODULE_3__["default"])(dataIndex);
    };
};

loadEditForm();

/***/ }),

/***/ "./src/views/modal-forms/editTaskForm.js":
/*!***********************************************!*\
  !*** ./src/views/modal-forms/editTaskForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayEditTaskForm: () => (/* binding */ displayEditTaskForm)
/* harmony export */ });
/* harmony import */ var _displayOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayOptions */ "./src/views/modal-forms/displayOptions.js");
/* harmony import */ var _controllers_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/general */ "./src/controllers/general.js");
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskForm */ "./src/views/modal-forms/taskForm.js");
/* harmony import */ var _controllers_tasksController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controllers/tasksController */ "./src/controllers/tasksController.js");
/* harmony import */ var _full_view_expandedCommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../full-view/expandedCommon */ "./src/views/full-view/expandedCommon.js");
/* harmony import */ var _full_view_expandTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../full-view/expandTask */ "./src/views/full-view/expandTask.js");
/* harmony import */ var _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../storage/tasksStorage */ "./src/storage/tasksStorage.js");
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../storage/projectsStorage */ "./src/storage/projectsStorage.js");









const baseModal = document.querySelector('#options-modal');
const editTaskForm = document.querySelector('#edit-task-form');
const editTaskBtn = document.querySelector('#edit-task');

let indexTaskToEdit;

function loadEditTaskForm(){
    editTaskBtn.addEventListener('click', (event) => {
        event.preventDefault();
        saveChanges(indexTaskToEdit);
    });
};

function displayEditTaskForm(i){
    const storedTasks = _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_6__["default"].getAllTasks();
    indexTaskToEdit = i;
    (0,_taskForm__WEBPACK_IMPORTED_MODULE_2__.loadAvailableProjects)();
    (0,_displayOptions__WEBPACK_IMPORTED_MODULE_0__.unhide)(baseModal);
    (0,_displayOptions__WEBPACK_IMPORTED_MODULE_0__.displayForm)(editTaskForm);
    const title = document.querySelector('input#edit-task-title');
    const project = document.querySelector('select#edit-projects-dropdown');
    const dueDate = document.querySelector('input#edit-due-date');
    const priority = document.querySelector('select#edit-task-priority');
    const notes = document.querySelector('textarea#edit-task-notes');
    title.value = storedTasks[i].title
    project.value = storedTasks[i].project
    dueDate.value = storedTasks[i].dueDate
    priority.value = storedTasks[i].priority
    notes.textContent = storedTasks[i].notes
};

function saveChanges(index){
    const title = document.querySelector('input#edit-task-title');
    const project = document.querySelector('select#edit-projects-dropdown').value;
    const dueDate = document.querySelector('input#edit-due-date').value;
    const priority = document.querySelector('select#edit-task-priority').value;
    const notes = document.querySelector('textarea#edit-task-notes').value;

    if(title.value !== ''){
        _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_6__["default"].editTask(index, title.value, project, dueDate, priority, notes);
        (0,_displayOptions__WEBPACK_IMPORTED_MODULE_0__.hide)(baseModal, editTaskForm);
        updateIfInMinView(index);
        updateIfExpanded(index);
        updateIfInFullView(index);
        updateIfProjectIsExpanded()
        title.classList.remove('invalid');
    } else {
        alert("Can't have two tasks with the same title")
        title.classList.add('invalid');
    };
}

function updateIfExpanded(id){
    const expanded = document.querySelector(`[data-expanded='${id}']`);
    if(expanded !== null){
        (0,_full_view_expandedCommon__WEBPACK_IMPORTED_MODULE_4__.removeAllExpanded)();
        (0,_full_view_expandTask__WEBPACK_IMPORTED_MODULE_5__["default"])(id);
    };
};

function updateIfInMinView(id){
    const minview = document.querySelector(`[data-index='${id}']`);
    if(minview !== null){
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_1__.clearDisplayed)();
        (0,_controllers_tasksController__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
    };
};

function updateIfInFullView(id){
    const fullView = document.querySelector(`[data-full-index='${id}']`);
    let projectsArr = _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_7__["default"].getAllProjects()
    if(fullView !== null){
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_1__.clearProjectTasks)();
        (0,_controllers_tasksController__WEBPACK_IMPORTED_MODULE_3__.displayProjectTasks)(projectsArr[(0,_displayOptions__WEBPACK_IMPORTED_MODULE_0__.getCurrentExpanded)()]);
    };
};

function updateIfProjectIsExpanded(){
    const expanded = document.querySelector('#full-view');
    let projectsArr = _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_7__["default"].getAllProjects();
    if(expanded.firstElementChild.firstElementChild !== null){
        const projectIndex = expanded.firstElementChild.firstElementChild.dataset.projIndex;
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_1__.clearProjectTasks)();
        (0,_controllers_tasksController__WEBPACK_IMPORTED_MODULE_3__.displayProjectTasks)(projectsArr[projectIndex]);
    };
};

loadEditTaskForm();

/***/ }),

/***/ "./src/views/modal-forms/projForm.js":
/*!*******************************************!*\
  !*** ./src/views/modal-forms/projForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProj: () => (/* binding */ createProj),
/* harmony export */   loadProjForm: () => (/* binding */ loadProjForm)
/* harmony export */ });
/* harmony import */ var _models_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/projects */ "./src/models/projects.js");
/* harmony import */ var _displayOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayOptions */ "./src/views/modal-forms/displayOptions.js");
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/projectsController */ "./src/controllers/projectsController.js");
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage/projectsStorage */ "./src/storage/projectsStorage.js");





const baseModal = document.querySelector('#options-modal');
const createProjBtn = document.querySelector('#create-project');
const projForm = document.querySelector('#project-form');
const submitProjBtn = document.querySelector('#add-project');

function loadProjForm(){
    createProjBtn.addEventListener('click', () => {
        (0,_displayOptions__WEBPACK_IMPORTED_MODULE_1__.displayForm)(projForm);
    });

    submitProjBtn.addEventListener('click', (event) => {
        let storedProjects = _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getAllProjects()
        event.preventDefault();
        const title = document.querySelector('input#project-title');
        let filter = storedProjects.filter(proj => proj.title === title.value);
        if(!filter[0]){
            (0,_controllers_projectsController__WEBPACK_IMPORTED_MODULE_2__.submitProject)(projForm, baseModal);
            title.classList.remove('invalid');
        } else {
            title.classList.add('invalid');
        };
    });
};

function createProj(){
    const title = document.querySelector('input#project-title').value;
    const link = document.querySelector('input#project-link').value;
    const description = document.querySelector('textarea#project-description').value;

    new _models_projects__WEBPACK_IMPORTED_MODULE_0__.Project(title, link, description);
};

loadProjForm();

/***/ }),

/***/ "./src/views/modal-forms/taskForm.js":
/*!*******************************************!*\
  !*** ./src/views/modal-forms/taskForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   loadAvailableProjects: () => (/* binding */ loadAvailableProjects),
/* harmony export */   loadTaskForm: () => (/* binding */ loadTaskForm)
/* harmony export */ });
/* harmony import */ var _models_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/tasks */ "./src/models/tasks.js");
/* harmony import */ var _displayOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayOptions */ "./src/views/modal-forms/displayOptions.js");
/* harmony import */ var _controllers_tasksController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/tasksController */ "./src/controllers/tasksController.js");
/* harmony import */ var _full_view_expandProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../full-view/expandProject */ "./src/views/full-view/expandProject.js");
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage/projectsStorage */ "./src/storage/projectsStorage.js");






const createTaskBtn = document.querySelector('#create-task');
const taskForm = document.querySelector('#task-form');
const submitTaskBtn = document.querySelector('#add-task')

function loadTaskForm(){
    createTaskBtn.addEventListener('click', () => {
        loadAvailableProjects();
        (0,_displayOptions__WEBPACK_IMPORTED_MODULE_1__.displayForm)(taskForm);
    });
    
    submitTaskBtn.addEventListener('click', (event) => {
        event.preventDefault();
        (0,_controllers_tasksController__WEBPACK_IMPORTED_MODULE_2__.submitTask)(taskForm, _displayOptions__WEBPACK_IMPORTED_MODULE_1__.baseModal);
        updateProjectDisplayed();
    });
};

function createTask(){
    const title = document.querySelector('input#task-title').value;
    const project = document.querySelector('select#projects-dropdown').value;
    const priority = document.querySelector('select#task-priority').value;
    const dueDate = document.querySelector('input#due-date').value;
    const notes = document.querySelector('textarea#task-notes').value;

    let task = new _models_tasks__WEBPACK_IMPORTED_MODULE_0__.Task(title, project, dueDate, priority, notes);
    return task
};

function loadAvailableProjects(){
    let storedProjects = _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getAllProjects();
    const options = document.querySelector('#projects-dropdown');
    const editOptions = document.querySelector('#edit-projects-dropdown');

    while (options.lastChild.value !== '') {
        options.removeChild(options.lastChild);
    }
    for(let i = 0; i < storedProjects.length; i++){
        options.appendChild(createOption(storedProjects[i].title));
    };
    
    while (editOptions.lastChild.value !== '') {
        editOptions.removeChild(editOptions.lastChild);
    }
    for(let i = 0; i < storedProjects.length; i++){
        editOptions.appendChild(createOption(storedProjects[i].title));
    };
};

function createOption(value){
    let option = document.createElement('option');
    option.value = value;
    option.text = value;
    return option;
};

function updateProjectDisplayed(){
    const fullView = document.querySelector('#full-view');
    if(fullView.firstElementChild.id === 'full-project-div'){
        (0,_full_view_expandProject__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_displayOptions__WEBPACK_IMPORTED_MODULE_1__.getCurrentExpanded)());
    };
};

loadTaskForm();



/***/ }),

/***/ "./src/views/prioritiesFilter.js":
/*!***************************************!*\
  !*** ./src/views/prioritiesFilter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFilter)
/* harmony export */ });
/* harmony import */ var _controllers_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/general */ "./src/controllers/general.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/views/tabs.js");



let filter;

function loadFilter() {
    const lowPriorBtn = document.querySelector('#low');
    const midPriorBtn = document.querySelector('#medium');
    const highPriorBtn = document.querySelector('#high');
    lowPriorBtn.addEventListener('click', () => filterPriority(lowPriorBtn.id));
    midPriorBtn.addEventListener('click', () => filterPriority(midPriorBtn.id));
    highPriorBtn.addEventListener('click', () => filterPriority(highPriorBtn.id));
};

function filterPriority(priority) {
    let formated = priority.charAt(0).toUpperCase() + priority.slice(1);

    if(filter !== priority){
        filter = priority;
        applyFilter(priority);
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_0__.changeLabelto)(`${formated} priority`);
    } else {
        filter = '';
        removeFilter();
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_0__.changeLabelto)(_tabs__WEBPACK_IMPORTED_MODULE_1__.lastTab);
    };
};

function applyFilter(priority){
    const allCards = document.querySelectorAll('.task-card');
    allCards.forEach(card => {
        if(!card.firstElementChild.classList.value.includes(`${priority}`)) {
            card.classList.add('hide');
        } else {
            card.classList.remove('hide');
        };
    });
};

function removeFilter() {
    const allCards = document.querySelectorAll('.task-card');
    allCards.forEach(card => {
        card.classList.remove('hide');
    });
};


/***/ }),

/***/ "./src/views/tabs.js":
/*!***************************!*\
  !*** ./src/views/tabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastTab: () => (/* binding */ lastTab),
/* harmony export */   loadTabs: () => (/* binding */ loadTabs)
/* harmony export */ });
/* harmony import */ var _controllers_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/general */ "./src/controllers/general.js");
/* harmony import */ var _controllers_tasksController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/tasksController */ "./src/controllers/tasksController.js");
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/projectsController */ "./src/controllers/projectsController.js");




let lastTab = 'Home';

const homeBtn = document.querySelector('button#home');
const projectsBtn = document.querySelector('button#projects');

function loadTabs(){
    homeBtn.addEventListener('click', () => {
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_0__.clearDisplayed)();
        (0,_controllers_tasksController__WEBPACK_IMPORTED_MODULE_1__.displayTasks)();
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_0__.changeLabelto)('Home')
        lastTab = 'Home';
    });
    
    projectsBtn.addEventListener('click', () => {
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_0__.clearDisplayed)();
        (0,_controllers_projectsController__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
        (0,_controllers_general__WEBPACK_IMPORTED_MODULE_0__.changeLabelto)('Projects');
        lastTab = 'Projects';
    });
};

loadTabs();



/***/ }),

/***/ "./src/views/toggleTheme.js":
/*!**********************************!*\
  !*** ./src/views/toggleTheme.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toggleBtn = document.querySelector('#toggle-theme');
const themeIcon = document.querySelector('#theme-icon');

toggleBtn.addEventListener('click', () => {
    if(localStorage.getItem('theme') === 'dark'){
        applyTheme.light();
        themeIcon.classList.remove('fa-sun')
        themeIcon.classList.add('fa-moon')
    } else{
        applyTheme.dark();
        themeIcon.classList.remove('fa-moon')
        themeIcon.classList.add('fa-sun')
    };
});

const applyTheme = (function(){
    let root = document.querySelector(':root');
    
    function dark(){
        root.style.setProperty('--background', '#212529');
        root.style.setProperty('--black', '#adb5bd');
        root.style.setProperty('--dark-gray', '#768088');
        root.style.setProperty('--default-gray', '#495057');
        root.style.setProperty('--light-gray', '#343a40');
        root.style.setProperty('--borders-gray', '#343a40');
        root.style.setProperty('--blue', '#3772ff');
        root.style.setProperty('--yellow', '#ff9f1c');
        root.style.setProperty('--red', '#e71d36');
        localStorage.setItem('theme', 'dark');
    };
    
    function light(){
        root.style.setProperty('--background', '#FFFFFF');
        root.style.setProperty('--black', '#495057');
        root.style.setProperty('--dark-gray', '#6d6a75ff');
        root.style.setProperty('--default-gray', '#adb5bdff');
        root.style.setProperty('--light-gray', '#ebebeb');
        root.style.setProperty('--borders-gray', '#D3D3D3');
        root.style.setProperty('--blue', '#64b5f6ff');
        root.style.setProperty('--yellow', '#f6c364');
        root.style.setProperty('--red', '#ff5a5a');
        localStorage.setItem('theme', 'light');
    };

    return { dark, light }
})();

if(localStorage.getItem('theme') === 'dark'){
    applyTheme.dark();
} else{
    applyTheme.light();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyTheme);

/***/ }),

/***/ "./assets/favicon.svg":
/*!****************************!*\
  !*** ./assets/favicon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5754babdabe4b35b0392.svg";

/***/ }),

/***/ "./assets/logo.svg":
/*!*************************!*\
  !*** ./assets/logo.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "019db4e6bdd8e3713f2b.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _others_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./others/logo */ "./src/others/logo.js");
/* harmony import */ var _storage_tasksStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage/tasksStorage */ "./src/storage/tasksStorage.js");
/* harmony import */ var _storage_projectsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage/projectsStorage */ "./src/storage/projectsStorage.js");
/* harmony import */ var _views_modal_forms_displayOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/modal-forms/displayOptions */ "./src/views/modal-forms/displayOptions.js");
/* harmony import */ var _views_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/tabs */ "./src/views/tabs.js");
/* harmony import */ var _views_prioritiesFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/prioritiesFilter */ "./src/views/prioritiesFilter.js");
/* harmony import */ var _views_toggleTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/toggleTheme */ "./src/views/toggleTheme.js");









(0,_views_prioritiesFilter__WEBPACK_IMPORTED_MODULE_6__["default"])()
_storage_tasksStorage__WEBPACK_IMPORTED_MODULE_2__["default"].retrieveTasks();




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixvR0FBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSx5QkFBeUI7O0FBRXpCLElBQUksV0FBVztBQUNmLE9BQU8sa0JBQWtCLHFDQUFxQzs7QUFFOUQsbUNBQW1DLGdCQUFnQjs7QUFFbkQsNEJBQTRCOztBQUU1QixrQ0FBa0M7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsWUFBWSx5QkFBeUIsK0JBQStCLDhDQUE4QyxrQ0FBa0MsMEJBQTBCLHdCQUF3QixjQUFjLE1BQU0sWUFBWSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxXQUFXLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxXQUFXLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLFFBQVEsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxjQUFjLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFB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QUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDWTtBQUNNO0FBQ007QUFDVztBQUNwQjtBQUNVO0FBQ0w7O0FBRTdDLG1FQUFVO0FBQ1YsNkRBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250cm9sbGVycy9nZW5lcmFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbGxlcnMvcHJvamVjdEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250cm9sbGVycy9wcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250cm9sbGVycy90YXNrQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXJzL3Rhc2tzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGVscy9wcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGVscy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGVscy90YXNrQ2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGVscy90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL290aGVycy9kb21DcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvb3RoZXJzL2xvZ28uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlL3Byb2plY3RzU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UvdGFza3NTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdmlld3MvZnVsbC12aWV3L2V4cGFuZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy92aWV3cy9mdWxsLXZpZXcvZXhwYW5kVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3ZpZXdzL2Z1bGwtdmlldy9leHBhbmRlZENvbW1vbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3ZpZXdzL21vZGFsLWZvcm1zL2Rpc3BsYXlPcHRpb25zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdmlld3MvbW9kYWwtZm9ybXMvZWRpdFByb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdmlld3MvbW9kYWwtZm9ybXMvZWRpdFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdmlld3MvbW9kYWwtZm9ybXMvcHJvakZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy92aWV3cy9tb2RhbC1mb3Jtcy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3ZpZXdzL3ByaW9yaXRpZXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy92aWV3cy90YWJzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdmlld3MvdG9nZ2xlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvY2FzY2FkaWEtY29kZSk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vKiBDU1MgUmVzZXQgKi9cblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuKiB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuYm9keSB7IGxpbmUtaGVpZ2h0OiAxLjU7IC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyBmb250LXNpemU6IDEwMCU7fVxuXG5pbWcsIHBpY3R1cmUsIHN2ZywgdmlkZW8sIGNhbnZhcyB7IGRpc3BsYXk6IGJsb2NrOyBtYXgtd2lkdGg6IDEwMCU7IH1cblxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7IG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IH1cblxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7IGZvbnQ6IGluaGVyaXQ7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG46cm9vdCB7XG4gICAgLS1sb2dvLWJsdWU6ICMyMTk2ZjNmZjtcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG5cbiAgICAvKiBUYXNrcyB0aXRsZSAqL1xuICAgIC0tYmxhY2s6ICM0OTUwNTc7XG5cbiAgICAvKiBBbGwgb3RoZXIgdGV4dC9pY29uIGluIHRhc2tzIGNhcmRzICovXG4gICAgLS1kYXJrLWdyYXk6ICM2ZDZhNzVmZjtcblxuICAgIC8qIEJvcmRlciBvZiB0YXNrcyBjYXJkICovXG4gICAgLS1kZWZhdWx0LWdyYXk6ICNhZGI1YmRmZjtcbiAgICBcbiAgICAvKiBJY29ucyBiYWNrZ3JvdW5kIG9uIGhvdmVyKi9cbiAgICAtLWxpZ2h0LWdyYXk6ICNlYmViZWI7XG4gICAgXG4gICAgLyogQm9yZGVycyAqL1xuICAgIC0tYm9yZGVycy1ncmF5OiAjRDNEM0QzO1xuXG4gICAgLyogUHJpb3JpdGllcyAqL1xuICAgIC0tcmVkOiAjZmY1YTVhO1xuICAgIC0teWVsbG93OiAjZjZjMzY0O1xuICAgIC0tYXJnZW50aW5pYW4tYmx1ZTogIzY0YjVmNmZmO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0Nhc2NhZGlhIENvZGUnO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGVtIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZW0gMWZyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlcnMtZ3JheSk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGNvbHVtbi1nYXA6IDFlbTtcbn1cblxuYXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJvcmRlcnMtZ3JheSk7XG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG59XG5cbm5hdiB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJvdy1nYXA6IDEuNWVtO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLyogSGVhZGVyICovXG5cbmhlYWRlciA+ICNsb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXJzLWdyYXkpO1xufVxuXG4vKiBBc2lkZS9uYXYgKi9cblxubmF2ID4gYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1ncmF5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogM3B4IDhweCAycHggOHB4O1xufVxuXG4jY3JlYXRlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAxcHggOHB4IDAgOHB4O1xufVxuXG5uYXYgPiBidXR0b246aG92ZXIsXG5pLmZhLWdpdGh1Yjpob3ZlcixcbmJ1dHRvbiNsb2dpbjpob3ZlcixcbmJ1dHRvbiN0b2dnbGUtdGhlbWU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcbn1cblxuI25hdi1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuNWVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcm93LWdhcDogMC41ZW07XG59XG5cbmJ1dHRvbiN0b2dnbGUtdGhlbWUge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWdyYXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaS5mYS1naXRodWIsXG5pI3RoZW1lLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWdyYXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG5cbi5mYS1jaXJjbGUge1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDEuM3B4IHZhcigtLWRlZmF1bHQtZ3JheSk7XG59XG5cbi5yZWQsXG4uaGlnaCB7XG4gICAgY29sb3I6IHZhcigtLXJlZCk7XG59XG5cbi55ZWxsb3csXG4ubWVkaXVtIHtcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcbn1cblxuLmJsdWUsXG4ubG93IHtcbiAgICBjb2xvcjogdmFyKC0tYXJnZW50aW5pYW4tYmx1ZSk7XG59XG5cbi8qIE1pbiB2aWV3ICovXG5cbm1haW4gPiAjbWluLXZpZXcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXJzLWdyYXkpO1xuICAgIGdyaWQtcm93OiAyIC8gLTE7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgNjBweCk7XG4gICAgcm93LWdhcDogMS4yZW07XG4gICAgcGFkZGluZy10b3A6IDEuMmVtO1xufVxuXG4jY3VycmVudC10YWIge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1ncmF5KTtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwLjFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi8qIFRBU0tTIENBUkQgKi9cblxuLnRhc2stY2FyZCB7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNmVtIG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcbiAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50YXNrLWNhcmQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBzY2FsZTogMS4wMTtcbn1cblxuLnByaW9yaXR5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMWVtO1xufVxuXG4ucHJpb3JpdHkuaGlnaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbn1cblxuLnByaW9yaXR5Lm1lZGl1bSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbn1cblxuLnByaW9yaXR5LmxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXJnZW50aW5pYW4tYmx1ZSk7XG59XG5cbi5jaGVja2JveC1kaXYge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XG4gICAgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cblxuLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1sb2dvLWJsdWUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5jaGVja2JveDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tbG9nby1ibHVlKTsgXG59XG5cbmRpdi5jb250ZW50LXdyYXBwZXIge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbmRpdi50YXNrLWluZm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5wLnRhc2stcHJvamVjdCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG59XG5cbnAuZHVlLWRhdGUge1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbmRpdi50YXNrLWFjdGlvbnMge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogNCAvIC0xO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFlbTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWdyYXkpO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWdyYXkpO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWdyYXkpO1xufVxuXG4udGFzay1jYXJkOmhhcyguY2hlY2tib3g6Y2hlY2tlZCl7XG4gICAgb3BhY2l0eTogNDAlO1xufVxuXG4vKiBQUk9KRUNUUyBDQVJEICovXG5cbi5wcm9qZWN0LWNhcmQge1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjZlbSAxZnIgbWluLWNvbnRlbnQ7XG5cbiAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG4ucHJvamVjdC1zdHJpcGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1ncmF5KTtcbn1cblxuLnByb2plY3Qtd3JhcHBlciB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMWVtO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuXG4ucHJvamVjdC1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMC44ZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLnByb2plY3QtbGluayB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucHJvamVjdC1saW5rOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB2YXIoLS1kYXJrLWdyYXkpO1xufVxuXG4ucHJvamVjdC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMC41ZW07XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuXG4vKiBDT01NT04gU1RZTEVTIEJFVFdFRU4gVEFTS1MgQU5EIFBST0pFQ1RTIENBUkRTICovXG5wLnRhc2stdGl0bGUsXG5wLnByb2plY3QtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmRpdi50YXNrLWFjdGlvbnMsXG5kaXYucHJvamVjdC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMC41ZW07XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuXG5cbmJ1dHRvbi5lZGl0LXRhc2ssXG5idXR0b24ucmVtb3ZlLXRhc2ssXG5idXR0b24uZWRpdC1wcm9qZWN0LFxuYnV0dG9uLnJlbW92ZS1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvbi5lZGl0LXRhc2s6aG92ZXIsXG5idXR0b24ucmVtb3ZlLXRhc2s6aG92ZXIsXG5idXR0b24uZWRpdC1wcm9qZWN0OmhvdmVyLFxuYnV0dG9uLnJlbW92ZS1wcm9qZWN0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XG59XG5cbi8qIEZVTEwgVklFVyAqL1xuXG4jZnVsbC12aWV3IHtcbiAgICBncmlkLXJvdzogMiAvIC0xO1xuICAgIGdyaWQtY29sdW1uOiAzIC8gLTE7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcm93LWdhcDogMWVtO1xufVxuXG4jZW1wdHktdmlldyB7XG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtZ3JheSk7XG4gICAgbWFyZ2luLXRvcDogNDV2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiNjbG9zZSB7XG4gICAgZ3JpZC1jb2x1bW46IC0yIC8gLTE7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuXG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtZ3JheSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5idXR0b24jY2xvc2U6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiA5MCU7XG59XG5cbi8qIEVYUEFOREVEIFBST0pFQ1RTICovXG5cbiNmdWxsLXByb2plY3QtdGFza3MtZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgNjBweCk7XG4gICAgcm93LWdhcDogMS4yZW07XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jZnVsbC1wcm9qZWN0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jZnVsbC1wcm9qZWN0IHtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcblxuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuI2Z1bGwtcHJvamVjdC1pbmZvID4gaDEge1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuXG4jZnVsbC1wcm9qZWN0LWluZm8gPiBhIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1ncmF5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNmdWxsLXByb2plY3QtaW5mbyA+IGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHZhcigtLWRlZmF1bHQtZ3JheSk7XG59XG5cbiNmdWxsLXByb2plY3QtZGVzY3JpcHRpb24ge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgcGFkZGluZy10b3A6IDEuNWVtO1xufVxuLyogRVhQQU5ERUQgVEFTS1MgKi9cblxuI2Z1bGwtdGFzay1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI3Rhc2stZnVsbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcblxuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuI3Rhc2stZnVsbC1pbmZvIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMWVtO1xuXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuI3Rhc2stZnVsbC1pbmZvID4gLmZhLWNpcmNsZSB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbiN0YXNrLWZ1bGwtc3RhdHVzIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbHVtbi1nYXA6IDFlbTtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1ncmF5KTtcbn1cblxuI3Rhc2stZnVsbC1zdGF0dXMgPiAuY2hlY2tib3gge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjFlbTtcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLWxvZ28tYmx1ZSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuICAgIG9wYWNpdHk6IDYwJTtcbn1cbiN0YXNrLWZ1bGwtc3RhdHVzID4gLmNoZWNrYm94OmNoZWNrZWQge1xuICAgIG9wYWNpdHk6IDEwMCU7XG59XG5cbiN0YXNrLWZ1bGwtbm90ZXMge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgcGFkZGluZy10b3A6IDEuNWVtO1xufVxuXG5wcmUgPiBwIHtcbiAgICBtYXgtd2lkdGg6IDYwY2g7XG4gICAgZm9udC1mYW1pbHk6ICdDYXNjYWRpYSBDb2RlJztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG59XG5cbi5wb2ludCB7XG4gICAgY29sb3I6IHZhcigtLWJvcmRlcnMtZ3JheSk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5saW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXJzLWdyYXkpO1xuICAgIGhlaWdodDogMnB4O1xufVxuXG4vKiBNT0RBTFMgKi9cbiNvcHRpb25zLW1vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHotaW5kZXg6IDE7IFxuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDB2dzsgXG4gICAgaGVpZ2h0OiAxMDBkdmg7IFxuICAgIG92ZXJmbG93OiBhdXRvOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG4jb3B0aW9ucy10by1jcmVhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJvdy1nYXA6IDJlbTtcbn1cblxuI2NyZWF0ZS10YXNrLFxuI2NyZWF0ZS1wcm9qZWN0IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxNDVweDtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4jY3JlYXRlLXRhc2s6aG92ZXIsXG4jY3JlYXRlLXByb2plY3Q6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb2dvLWJsdWUpO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG5mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5mb3JtID4gaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzZkNmE3NWZmO1xufVxuXG5mb3JtID4gZGl2IHtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuXG5mb3JtID4gZGl2ID4gaW5wdXQsXG5mb3JtID4gZGl2ID4gc2VsZWN0LFxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRDNEM0QzO1xuICAgIGNvbG9yOiAjNmQ2YTc1ZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjRDNEM0QzO1xufVxuXG5zZWxlY3QsXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgY29sb3I6ICNhZGI1YmRmZjtcbn1cblxuZm9ybSA+IGRpdiA+IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvZ28tYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDAuM2VtO1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xufVxuXG4uaGlkZSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kaXNwbGF5e1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbnZhbGlkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1yZWQpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCOztBQUdoQixjQUFjOztBQUVkLHlCQUF5QixzQkFBc0IsRUFBRTs7QUFFakQsSUFBSSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQzNCLE9BQU8sZ0JBQWdCLEVBQUUsbUNBQW1DLEVBQUUsZUFBZSxDQUFDOztBQUU5RSxtQ0FBbUMsY0FBYyxFQUFFLGVBQWUsRUFBRTs7QUFFcEUsNEJBQTRCLHlCQUF5QixFQUFFOztBQUV2RCxrQ0FBa0MsYUFBYSxFQUFFOztBQUVqRCxvQ0FBb0M7O0FBRXBDO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjs7SUFFckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsdUNBQXVDO0lBQ3ZDLHNCQUFzQjs7SUFFdEIseUJBQXlCO0lBQ3pCLHlCQUF5Qjs7SUFFekIsNkJBQTZCO0lBQzdCLHFCQUFxQjs7SUFFckIsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsZ0JBQWdC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QWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvY2FzY2FkaWEtY29kZScpO1xcblxcbi8qIENTUyBSZXNldCAqL1xcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuKiB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxcbmJvZHkgeyBsaW5lLWhlaWdodDogMS41OyAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgZm9udC1zaXplOiAxMDAlO31cXG5cXG5pbWcsIHBpY3R1cmUsIHN2ZywgdmlkZW8sIGNhbnZhcyB7IGRpc3BsYXk6IGJsb2NrOyBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG5wLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHsgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgfVxcblxcbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3QgeyBmb250OiBpbmhlcml0OyB9XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbjpyb290IHtcXG4gICAgLS1sb2dvLWJsdWU6ICMyMTk2ZjNmZjtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xcblxcbiAgICAvKiBUYXNrcyB0aXRsZSAqL1xcbiAgICAtLWJsYWNrOiAjNDk1MDU3O1xcblxcbiAgICAvKiBBbGwgb3RoZXIgdGV4dC9pY29uIGluIHRhc2tzIGNhcmRzICovXFxuICAgIC0tZGFyay1ncmF5OiAjNmQ2YTc1ZmY7XFxuXFxuICAgIC8qIEJvcmRlciBvZiB0YXNrcyBjYXJkICovXFxuICAgIC0tZGVmYXVsdC1ncmF5OiAjYWRiNWJkZmY7XFxuICAgIFxcbiAgICAvKiBJY29ucyBiYWNrZ3JvdW5kIG9uIGhvdmVyKi9cXG4gICAgLS1saWdodC1ncmF5OiAjZWJlYmViO1xcbiAgICBcXG4gICAgLyogQm9yZGVycyAqL1xcbiAgICAtLWJvcmRlcnMtZ3JheTogI0QzRDNEMztcXG5cXG4gICAgLyogUHJpb3JpdGllcyAqL1xcbiAgICAtLXJlZDogI2ZmNWE1YTtcXG4gICAgLS15ZWxsb3c6ICNmNmMzNjQ7XFxuICAgIC0tYXJnZW50aW5pYW4tYmx1ZTogIzY0YjVmNmZmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDYXNjYWRpYSBDb2RlJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRlbSAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRlbSAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlcnMtZ3JheSk7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG59XFxuXFxuYXNpZGUge1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXJzLWdyYXkpO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbm5hdiB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMS41ZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyID4gI2xvZ28ge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXJzLWdyYXkpO1xcbn1cXG5cXG4vKiBBc2lkZS9uYXYgKi9cXG5cXG5uYXYgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggOHB4IDJweCA4cHg7XFxufVxcblxcbiNjcmVhdGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMXB4IDhweCAwIDhweDtcXG59XFxuXFxubmF2ID4gYnV0dG9uOmhvdmVyLFxcbmkuZmEtZ2l0aHViOmhvdmVyLFxcbmJ1dHRvbiNsb2dpbjpob3ZlcixcXG5idXR0b24jdG9nZ2xlLXRoZW1lOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuI25hdi1ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMC41ZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAwLjVlbTtcXG59XFxuXFxuYnV0dG9uI3RvZ2dsZS10aGVtZSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaS5mYS1naXRodWIsXFxuaSN0aGVtZS1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uZmEtY2lyY2xlIHtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMS4zcHggdmFyKC0tZGVmYXVsdC1ncmF5KTtcXG59XFxuXFxuLnJlZCxcXG4uaGlnaCB7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4ueWVsbG93LFxcbi5tZWRpdW0ge1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLmJsdWUsXFxuLmxvdyB7XFxuICAgIGNvbG9yOiB2YXIoLS1hcmdlbnRpbmlhbi1ibHVlKTtcXG59XFxuXFxuLyogTWluIHZpZXcgKi9cXG5cXG5tYWluID4gI21pbi12aWV3IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXJzLWdyYXkpO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCA2MHB4KTtcXG4gICAgcm93LWdhcDogMS4yZW07XFxuICAgIHBhZGRpbmctdG9wOiAxLjJlbTtcXG59XFxuXFxuI2N1cnJlbnQtdGFiIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1ncmF5KTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwLjFlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4vKiBUQVNLUyBDQVJEICovXFxuXFxuLnRhc2stY2FyZCB7XFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNmVtIG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG4gICAgdHJhbnNpdGlvbjogLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1jYXJkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBzY2FsZTogMS4wMTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMWVtO1xcbn1cXG5cXG4ucHJpb3JpdHkuaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5wcmlvcml0eS5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cXG4ucHJpb3JpdHkubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXJnZW50aW5pYW4tYmx1ZSk7XFxufVxcblxcbi5jaGVja2JveC1kaXYge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWdyYXkpO1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1sb2dvLWJsdWUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLWxvZ28tYmx1ZSk7IFxcbn1cXG5cXG5kaXYuY29udGVudC13cmFwcGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGVmYXVsdC1ncmF5KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG59XFxuXFxuZGl2LnRhc2staW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxucC50YXNrLXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbnAuZHVlLWRhdGUge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5kaXYudGFzay1hY3Rpb25zIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogNCAvIC0xO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMWVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMWVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWdyYXkpO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tZGVmYXVsdC1ncmF5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XFxufVxcblxcbi50YXNrLWNhcmQ6aGFzKC5jaGVja2JveDpjaGVja2VkKXtcXG4gICAgb3BhY2l0eTogNDAlO1xcbn1cXG5cXG4vKiBQUk9KRUNUUyBDQVJEICovXFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICAgIHBhZGRpbmc6IDAgMWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC42ZW0gMWZyIG1pbi1jb250ZW50O1xcblxcbiAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxufVxcblxcbi5wcm9qZWN0LXN0cmlwZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1ncmF5KTtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlciB7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxZW07XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWRlZmF1bHQtZ3JheSk7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWdyYXkpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGVmYXVsdC1ncmF5KTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuOGVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0LWxpbmsge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtbGluazpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi5wcm9qZWN0LWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMC41ZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuLyogQ09NTU9OIFNUWUxFUyBCRVRXRUVOIFRBU0tTIEFORCBQUk9KRUNUUyBDQVJEUyAqL1xcbnAudGFzay10aXRsZSxcXG5wLnByb2plY3QtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZGl2LnRhc2stYWN0aW9ucyxcXG5kaXYucHJvamVjdC1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDAuNWVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcblxcbmJ1dHRvbi5lZGl0LXRhc2ssXFxuYnV0dG9uLnJlbW92ZS10YXNrLFxcbmJ1dHRvbi5lZGl0LXByb2plY3QsXFxuYnV0dG9uLnJlbW92ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuYnV0dG9uLmVkaXQtdGFzazpob3ZlcixcXG5idXR0b24ucmVtb3ZlLXRhc2s6aG92ZXIsXFxuYnV0dG9uLmVkaXQtcHJvamVjdDpob3ZlcixcXG5idXR0b24ucmVtb3ZlLXByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4vKiBGVUxMIFZJRVcgKi9cXG5cXG4jZnVsbC12aWV3IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgcm93LWdhcDogMWVtO1xcbn1cXG5cXG4jZW1wdHktdmlldyB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWdyYXkpO1xcbiAgICBtYXJnaW4tdG9wOiA0NXZoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiNjbG9zZSB7XFxuICAgIGdyaWQtY29sdW1uOiAtMiAvIC0xO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtZ3JheSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuYnV0dG9uI2Nsb3NlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbi8qIEVYUEFOREVEIFBST0pFQ1RTICovXFxuXFxuI2Z1bGwtcHJvamVjdC10YXNrcy1kaXYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCA2MHB4KTtcXG4gICAgcm93LWdhcDogMS4yZW07XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI2Z1bGwtcHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZnVsbC1wcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxuXFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuI2Z1bGwtcHJvamVjdC1pbmZvID4gaDEge1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xcbn1cXG5cXG4jZnVsbC1wcm9qZWN0LWluZm8gPiBhIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWdyYXkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNmdWxsLXByb2plY3QtaW5mbyA+IGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB2YXIoLS1kZWZhdWx0LWdyYXkpO1xcbn1cXG5cXG4jZnVsbC1wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gICAgcGFkZGluZy10b3A6IDEuNWVtO1xcbn1cXG4vKiBFWFBBTkRFRCBUQVNLUyAqL1xcblxcbiNmdWxsLXRhc2stZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiN0YXNrLWZ1bGwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcblxcbiN0YXNrLWZ1bGwtaW5mbyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI3Rhc2stZnVsbC1pbmZvID4gLmZhLWNpcmNsZSB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG5cXG4jdGFzay1mdWxsLXN0YXR1cyB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gICAgY29sb3I6IHZhcigtLWRlZmF1bHQtZ3JheSk7XFxufVxcblxcbiN0YXNrLWZ1bGwtc3RhdHVzID4gLmNoZWNrYm94IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMWVtO1xcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLWxvZ28tYmx1ZSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgb3BhY2l0eTogNjAlO1xcbn1cXG4jdGFzay1mdWxsLXN0YXR1cyA+IC5jaGVja2JveDpjaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG59XFxuXFxuI3Rhc2stZnVsbC1ub3RlcyB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICAgIHBhZGRpbmctdG9wOiAxLjVlbTtcXG59XFxuXFxucHJlID4gcCB7XFxuICAgIG1heC13aWR0aDogNjBjaDtcXG4gICAgZm9udC1mYW1pbHk6ICdDYXNjYWRpYSBDb2RlJztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuLnBvaW50IHtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlcnMtZ3JheSk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlcnMtZ3JheSk7XFxuICAgIGhlaWdodDogMnB4O1xcbn1cXG5cXG4vKiBNT0RBTFMgKi9cXG4jb3B0aW9ucy1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxuICAgIHotaW5kZXg6IDE7IFxcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDB2dzsgXFxuICAgIGhlaWdodDogMTAwZHZoOyBcXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI29wdGlvbnMtdG8tY3JlYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMmVtO1xcbn1cXG5cXG4jY3JlYXRlLXRhc2ssXFxuI2NyZWF0ZS1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDE0NXB4O1xcbiAgICBjb2xvcjogIzQ5NTA1NztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuI2NyZWF0ZS10YXNrOmhvdmVyLFxcbiNjcmVhdGUtcHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1ibHVlKTtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbmZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZm9ybSA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzZkNmE3NWZmO1xcbn1cXG5cXG5mb3JtID4gZGl2IHtcXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogIzQ5NTA1NztcXG59XFxuXFxuZm9ybSA+IGRpdiA+IGlucHV0LFxcbmZvcm0gPiBkaXYgPiBzZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNEM0QzRDM7XFxuICAgIGNvbG9yOiAjNmQ2YTc1ZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjRDNEM0QzO1xcbn1cXG5cXG5zZWxlY3QsXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgY29sb3I6ICNhZGI1YmRmZjtcXG59XFxuXFxuZm9ybSA+IGRpdiA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgcGFkZGluZzogMC4zZW07XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGlzcGxheXtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlIGZyb20gXCIuLi9vdGhlcnMvZG9tQ3JlYXRvclwiO1xuXG5jb25zdCBtaW5WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbi12aWV3Jyk7XG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiBvYmplY3RzIGV2ZXJ5dGltZSBhbiBvYmplY3QgaXMgYWRkZWQvcmVtb3ZlZFxuZnVuY3Rpb24gdXBkYXRlSWRzKGFycil7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGFycltpXS5pZCA9IGk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGNsZWFyRGlzcGxheWVkKCl7XG4gICAgLy8gU2luY2UgdGhlIHRhYiBsYWJlbCBpcyBvbmUgb2YgdGhlIGNoaWxkcywgdGhlcmUncyB0aGUgbmVlZCB0byBjcmVhdGUgaXQgYWdhaW5cbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC10YWInKS50ZXh0Q29udGVudDtcbiAgICBpZihtaW5WaWV3LmZpcnN0RWxlbWVudENoaWxkKXtcbiAgICAgICAgZG97XG4gICAgICAgICAgICBtaW5WaWV3LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9IHdoaWxlKG1pblZpZXcuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBtaW5WaWV3LmFwcGVuZENoaWxkKGNyZWF0ZS5lbFdpdGhJZCgnZGl2JywgJ2N1cnJlbnQtdGFiJywgbGFiZWwpKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gY2hhbmdlTGFiZWx0byh3aGF0KXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC10YWInKS50ZXh0Q29udGVudCA9IHdoYXQ7XG59O1xuXG5mdW5jdGlvbiBjbGVhclByb2plY3RUYXNrcygpe1xuICAgIGNvbnN0IGZ1bGxWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bGwtdmlldycpO1xuICAgIGZ1bGxWaWV3Lmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVJZHMsIGNsZWFyRGlzcGxheWVkLCBjaGFuZ2VMYWJlbHRvLCBjbGVhclByb2plY3RUYXNrcyB9IiwiaW1wb3J0IHsgUEFPIH0gZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgVEFTS0FRLCBmaWx0ZXJUYXNrcyB9IGZyb20gXCIuLi9tb2RlbHMvdGFza3NcIjtcbmltcG9ydCB7IGNsZWFyRGlzcGxheWVkIH0gZnJvbSBcIi4vZ2VuZXJhbFwiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsRXhwYW5kZWQgfSBmcm9tIFwiLi4vdmlld3MvZnVsbC12aWV3L2V4cGFuZGVkQ29tbW9uXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c0NvbnRyb2xsZXJcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi4vc3RvcmFnZS9wcm9qZWN0c1N0b3JhZ2VcIjtcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi4vc3RvcmFnZS90YXNrc1N0b3JhZ2VcIjtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdERpbmFtaWNhbGx5KGluZGV4KXtcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IHByb2plY3RzLmdldEFsbFByb2plY3RzKClcbiAgICBjb25zdCBzdG9yZWRUYXNrcyA9IHRhc2tzLmdldEFsbFRhc2tzKCk7XG4gICAgY29uc3QgcHJvamVjdEluTWluVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2otaWQ9JyR7aW5kZXh9J11gKTtcbiAgICBjb25zdCBwcm9qZWN0RXhwYW5kZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qLWluZGV4PScke2luZGV4fSddYCk7XG4gICAgLy8gVGhlc2UgYXJlIHRoZSB0YXNrcyB0aGF0IGFyZSBnb2luZyB0byBiZSByZW1vdmVkIHdpdGggdGhlIHByb2plY3RcbiAgICBsZXQgdGFza3NSZW1vdmVkID0gc3RvcmVkVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBzdG9yZWRQcm9qZWN0c1tpbmRleF0udGl0bGUpO1xuICAgIC8vIENoZWNraW5nIGlmIG9uZSBvZiB0aGUgdGFza3MgdG8gYmUgcmVtb3ZlZCBhcmUgZXhwYW5kZWRcbiAgICBjb25zdCB0YXNrRXhwYW5kZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mdWxsJyk7XG4gICAgZm9yKGNvbnN0IHRhc2sgb2YgdGFza3NSZW1vdmVkKXtcbiAgICAgICAgaWYodGFza0V4cGFuZGVkICE9PSBudWxsKXtcbiAgICAgICAgICAgIGlmKHRhc2suaWQgPT09IE51bWJlcih0YXNrRXhwYW5kZWQuZGF0YXNldC5leHBhbmRlZCkpe1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsbEV4cGFuZGVkKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLmlkKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gVGhpcyBpcyB0aGUgdGFza3MgYXJyYXkgd2l0aG91dCB0aGUgcHJvamVjdHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgcmVtb3ZlZCB3aXRoIHRoZSBwcm9qZWN0XG4gICAgbGV0IHN1cnZpdmluZ1Rhc2tzID0gc3RvcmVkVGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ICE9PSBzdG9yZWRQcm9qZWN0c1tpbmRleF0udGl0bGUpO1xuICAgIHByb2plY3RzLnJlbW92ZVByb2plY3QoaW5kZXgpXG4gICAgdGFza3MudXBkYXRlVGFza3Moc3Vydml2aW5nVGFza3MpO1xuICAgIFxuICAgIGlmKHByb2plY3RJbk1pblZpZXcgIT09IG51bGwpe1xuICAgICAgICBjbGVhckRpc3BsYXllZCgpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9O1xuICAgIGlmKHByb2plY3RFeHBhbmRlZCAhPT0gbnVsbCl7XG4gICAgICAgIHJlbW92ZUFsbEV4cGFuZGVkKHRydWUpO1xuICAgIH07XG59O1xuXG5leHBvcnQgeyByZW1vdmVQcm9qZWN0RGluYW1pY2FsbHkgfSIsImltcG9ydCB7IGNsZWFyRGlzcGxheWVkLCBjaGFuZ2VMYWJlbHRvIH0gZnJvbSBcIi4vZ2VuZXJhbFwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvaiB9IGZyb20gXCIuLi92aWV3cy9tb2RhbC1mb3Jtcy9wcm9qRm9ybVwiO1xuaW1wb3J0IHsgaGlkZSB9IGZyb20gXCIuLi92aWV3cy9tb2RhbC1mb3Jtcy9kaXNwbGF5T3B0aW9uc1wiO1xuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuLi9zdG9yYWdlL3Byb2plY3RzU3RvcmFnZVwiO1xuaW1wb3J0IG5ld1Byb2plY3RDYXJkIGZyb20gJy4uL21vZGVscy9wcm9qZWN0Q2FyZCdcblxuY29uc3QgbWluVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW4tdmlldycpO1xuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKXtcbiAgICBmb3IoY29uc3QgcHJvaiBvZiBwcm9qZWN0cy5nZXRBbGxQcm9qZWN0cygpKXtcbiAgICAgICAgbWluVmlldy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q2FyZChwcm9qKSk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QobW9kYWxUb0hpZGUsIG90aGVyTW9kYWxUb0hpZGUpe1xuICAgIGNyZWF0ZVByb2ooKTtcbiAgICBjbGVhckRpc3BsYXllZCgpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIGNoYW5nZUxhYmVsdG8oJ1Byb2plY3RzJyk7XG4gICAgaGlkZShtb2RhbFRvSGlkZSwgb3RoZXJNb2RhbFRvSGlkZSk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdHMsIHN1Ym1pdFByb2plY3QgfSIsImltcG9ydCB7IGNsZWFyRGlzcGxheWVkLCBjbGVhclByb2plY3RUYXNrcyB9IGZyb20gXCIuL2dlbmVyYWxcIjtcbmltcG9ydCB7IGRpc3BsYXlUYXNrcywgZGlzcGxheVByb2plY3RUYXNrcyB9IGZyb20gJy4vdGFza3NDb250cm9sbGVyJ1xuaW1wb3J0IHsgcmVtb3ZlQWxsRXhwYW5kZWQgfSBmcm9tIFwiLi4vdmlld3MvZnVsbC12aWV3L2V4cGFuZGVkQ29tbW9uXCI7XG5pbXBvcnQgdGFza3MgZnJvbSBcIi4uL3N0b3JhZ2UvdGFza3NTdG9yYWdlXCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4uL3N0b3JhZ2UvcHJvamVjdHNTdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIGNoZWNrRGluYW1pY2FsbHkoY2hlY2tib3gsIGluZGV4KXtcbiAgICBjb25zdCB0YXNrc0luTWluVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2luZGV4fSddYCk7XG4gICAgY29uc3QgdGFza3NJblByb2plY3RFeHBhbmRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWZ1bGwtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICBjb25zdCB0YXNrRXhwYW5kZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1leHBhbmRlZD0nJHtpbmRleH0nXWApO1xuICAgIHRhc2tzLmNoYW5nZUlzRG9uZShpbmRleCk7XG5cbiAgICAvLyBDYXJkIGV4aXN0cyBpbjpcbiAgICAvLyBtaW52aWV3IEFORCBleHBhbmRlZFxuICAgIGlmKHRhc2tzSW5NaW5WaWV3ICE9PSBudWxsICYmIHRhc2tFeHBhbmRlZCAhPT0gbnVsbCl7XG4gICAgICAgIGlmKGNoZWNrYm94LmNoZWNrZWQgPT09IHRydWUpe1xuICAgICAgICAgICAgdGFza3NJbk1pblZpZXcuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRhc2tFeHBhbmRlZC5jaGlsZHJlblsyXS5sYXN0Q2hpbGQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrc0luTWluVmlldy5jaGlsZHJlblsxXS5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2tFeHBhbmRlZC5jaGlsZHJlblsyXS5sYXN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBtaW5WaWV3IEFORCBmdWxsVmlld1xuICAgIGlmKHRhc2tzSW5NaW5WaWV3ICE9PSBudWxsICYmIHRhc2tzSW5Qcm9qZWN0RXhwYW5kZWQgIT09IG51bGwpe1xuICAgICAgICBpZihjaGVja2JveC5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgIHRhc2tzSW5NaW5WaWV3LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0YXNrc0luUHJvamVjdEV4cGFuZGVkLmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrc0luTWluVmlldy5jaGlsZHJlblsxXS5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhc2tzSW5Qcm9qZWN0RXhwYW5kZWQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIE9ubHkgbWluVmlld1xuICAgIGlmKHRhc2tzSW5NaW5WaWV3ICE9PSBudWxsICYmIHRhc2tzSW5Qcm9qZWN0RXhwYW5kZWQgPT09IG51bGwpe1xuICAgICAgICBpZihjaGVja2JveC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXNrc0luTWluVmlldy5jaGlsZHJlblsxXS5maXJzdENoaWxkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza3NJbk1pblZpZXcuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIE9ubHkgZnVsbFZpZXdcbiAgICBpZih0YXNrc0luUHJvamVjdEV4cGFuZGVkICE9PSBudWxsICYmIHRhc2tzSW5NaW5WaWV3ID09PSBudWxsKXtcbiAgICAgICAgaWYoY2hlY2tib3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFza3NJblByb2plY3RFeHBhbmRlZC5jaGlsZHJlblsxXS5maXJzdENoaWxkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza3NJblByb2plY3RFeHBhbmRlZC5jaGlsZHJlblsxXS5maXJzdENoaWxkLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlVGFza0RpbmFtaWNhbGx5KGluZGV4KXtcbiAgICBjb25zdCB0YXNrc0luTWluVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2luZGV4fSddYCk7XG4gICAgY29uc3QgdGFza3NJblByb2plY3RFeHBhbmRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWZ1bGwtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICBjb25zdCB0YXNrRXhwYW5kZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1leHBhbmRlZD0nJHtpbmRleH0nXWApO1xuICAgIGNvbnN0IHByb2plY3RFeHBhbmRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXByb2otaW5kZXhdYCk7XG4gICAgdGFza3MucmVtb3ZlVGFzayhpbmRleClcblxuICAgIGlmKHRhc2tzSW5NaW5WaWV3ICE9PSBudWxsKXtcbiAgICAgICAgY2xlYXJEaXNwbGF5ZWQoKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfVxuICAgIGlmKHRhc2tzSW5Qcm9qZWN0RXhwYW5kZWQgIT09IG51bGwpe1xuICAgICAgICBjbGVhclByb2plY3RUYXNrcygpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdFRhc2tzKHByb2plY3RzLmdldEFsbFByb2plY3RzKCkpO1xuICAgIH1cbiAgICBpZih0YXNrRXhwYW5kZWQgIT09IG51bGwpe1xuICAgICAgICByZW1vdmVBbGxFeHBhbmRlZCh0cnVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBjaGVja0RpbmFtaWNhbGx5LCByZW1vdmVUYXNrRGluYW1pY2FsbHkgfSIsImltcG9ydCB7IGNsZWFyRGlzcGxheWVkLCBjaGFuZ2VMYWJlbHRvIH0gZnJvbSBcIi4vZ2VuZXJhbFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuLi92aWV3cy9tb2RhbC1mb3Jtcy90YXNrRm9ybVwiO1xuaW1wb3J0IHsgaGlkZSB9IGZyb20gXCIuLi92aWV3cy9tb2RhbC1mb3Jtcy9kaXNwbGF5T3B0aW9uc1wiO1xuaW1wb3J0IG5ld1Rhc2tDYXJkIGZyb20gJy4uL21vZGVscy90YXNrQ2FyZCdcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi4vc3RvcmFnZS90YXNrc1N0b3JhZ2VcIjtcblxuY29uc3QgbWluVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW4tdmlldycpO1xuY29uc3QgZnVsbFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbC12aWV3Jyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpe1xuICAgIGZvcihjb25zdCB0YXNrIG9mIHRhc2tzLmdldEFsbFRhc2tzKCkpe1xuICAgICAgICBtaW5WaWV3LmFwcGVuZENoaWxkKG5ld1Rhc2tDYXJkKHRhc2spKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RUYXNrcyhwcm9qKXtcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGFza3MuaWQgPSAnZnVsbC1wcm9qZWN0LXRhc2tzLWRpdic7XG4gICAgZm9yKGNvbnN0IHRhc2sgb2YgdGFza3MuZ2V0QWxsVGFza3MoKSl7XG4gICAgICAgIGlmKHRhc2sucHJvamVjdCA9PT0gcHJvai50aXRsZSl7XG4gICAgICAgICAgICBsZXQgY2FyZCA9IG5ld1Rhc2tDYXJkKHRhc2spO1xuICAgICAgICAgICAgY2FyZC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICAgICAgICAgIGNhcmQuZGF0YXNldC5mdWxsSW5kZXggPSB0YXNrLmlkO1xuICAgICAgICAgICAgcHJvamVjdFRhc2tzLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZnVsbFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tzKTtcbn07XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2sobW9kYWxUb0hpZGUsIG90aGVyTW9kYWxUb2hpZGUpe1xuICAgIGNyZWF0ZVRhc2soKTsgICBcbiAgICBjbGVhckRpc3BsYXllZCgpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIGNoYW5nZUxhYmVsdG8oJ0hvbWUnKTtcbiAgICBoaWRlKG1vZGFsVG9IaWRlLCBvdGhlck1vZGFsVG9oaWRlKTtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlUYXNrcywgZGlzcGxheVByb2plY3RUYXNrcywgc3VibWl0VGFzayB9IiwiaW1wb3J0IGNyZWF0ZSBmcm9tICcuLi9vdGhlcnMvZG9tQ3JlYXRvcic7XG5pbXBvcnQgZXhwYW5kUHJvamVjdCBmcm9tICcuLi92aWV3cy9mdWxsLXZpZXcvZXhwYW5kUHJvamVjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9qZWN0RGluYW1pY2FsbHkgfSBmcm9tICcuLi9jb250cm9sbGVycy9wcm9qZWN0QWN0aW9ucyc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdEZvcm0gfSBmcm9tICcuLi92aWV3cy9tb2RhbC1mb3Jtcy9lZGl0UHJvamVjdEZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvakRpdiA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnZGl2JywgJycsICdwcm9qZWN0LWNhcmQnKTtcbiAgICBjb25zdCBzdHJpcGUgPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2RpdicsICcnLCAncHJvamVjdC1zdHJpcGUnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gY3JlYXRlLmVsV2l0aENsYXNzKCdkaXYnLCAnJywgJ3Byb2plY3Qtd3JhcHBlcicpO1xuICAgIGNvbnN0IGluZm8gPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2RpdicsICcnLCAncHJvamVjdC1pbmZvJyk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ3AnLCBwcm9qZWN0LnRpdGxlLCAncHJvamVjdC10aXRsZScpO1xuICAgIGNvbnN0IGxpbmsgPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2EnLCBwcm9qZWN0LmxpbmssICdwcm9qZWN0LWxpbmsnKTtcbiAgICBjb25zdCBhY3Rpb25zID0gY3JlYXRlLmVsV2l0aENsYXNzKCdkaXYnLCAnJywgJ3Byb2plY3QtYWN0aW9ucycpO1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gY3JlYXRlLmVsV2l0aENsYXNzKCdidXR0b24nLCAnJywgJ2VkaXQtcHJvamVjdCcpO1xuICAgIGNvbnN0IGVkaXRJY29uID0gY3JlYXRlLmVsV2l0aENsYXNzKCdpJywgJycsICdmYS1yZWd1bGFyJywgJ2ZhLXBlbi10by1zcXVhcmUnKTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0QnRuID0gY3JlYXRlLmVsV2l0aENsYXNzKCdidXR0b24nLCAnJywgJ3JlbW92ZS1wcm9qZWN0Jyk7XG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnaScsICcnLCAnZmEtcmVndWxhcicsICdmYS1zcXVhcmUtbWludXMnKTtcbiAgICBsaW5rLmhyZWYgPSBwcm9qZWN0Lmxpbms7XG4gICAgcHJvakRpdi5kYXRhc2V0LnByb2pJZCA9IHByb2plY3QuaWQ7XG4gICAgaW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhwYW5kUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICB9KTtcbiAgICBzdHJpcGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV4cGFuZFByb2plY3QocHJvamVjdC5pZCk7XG4gICAgfSk7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdERpbmFtaWNhbGx5KHByb2plY3QuaWQpO1xuICAgIH0pO1xuICAgIGVkaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5UHJvamVjdEZvcm0ocHJvamVjdC5pZClcbiAgICB9KTtcblxuICAgIHJlbW92ZVByb2plY3RCdG4uYXBwZW5kQ2hpbGQocmVtb3ZlSWNvbik7XG4gICAgZWRpdFByb2plY3RCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIGFjdGlvbnMuYXBwZW5kKGVkaXRQcm9qZWN0QnRuLCByZW1vdmVQcm9qZWN0QnRuKTtcbiAgICBpbmZvLmFwcGVuZCh0aXRsZSwgbGluayk7XG4gICAgd3JhcHBlci5hcHBlbmQoaW5mbywgYWN0aW9ucyk7XG4gICAgcHJvakRpdi5hcHBlbmQoc3RyaXBlLCB3cmFwcGVyKTtcblxuICAgIHJldHVybiBwcm9qRGl2O1xufTtcblxuLy8gTGF5b3V0OlxuXG4vLyAgZGl2LnByb2plY3QtY2FyZFxuLy8gIF4gZGl2LnByb2plY3Qtc3RyaXBlXG4vLyAgXiBkaXYucHJvamVjdC13cmFwcGVyXG4vLyAgICAgIF4gZGl2LnByb2plY3QtaW5mb1xuLy8gICAgICAgICAgXiBwLnByb2plY3QtdGl0bGVcbi8vICAgICAgICAgIF4gYS5wcm9qZWN0LWxpbmtcbi8vICAgICAgXiBkaXYucHJvamVjdC1hY3Rpb25zXG4vLyAgICAgICAgICBeIGJ1dHRvbi5lZGl0LXByb2plY3Rcbi8vICAgICAgICAgICAgICBeIGkuZmEtcmVndWxhci5mYS1wZW4tdG8tc3F1YXJlXG4vLyAgICAgICAgICBeIGJ1dHRvbi5yZW1vdmUtcHJvamVjdFxuLy8gICAgICAgICAgICAgIF4gaS5mYS1yZWd1bGFyLmZhLXNxdWFyZS1taW51cyIsImltcG9ydCBzdG9yYWdlIGZyb20gXCIuLi9zdG9yYWdlL3Byb2plY3RzU3RvcmFnZVwiO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGxpbmssIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICAgICAgdGhpcy5saW5rID0gbGluayxcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnRhc2tzID0gW10sXG4gICAgICAgIHRoaXMuaWQgPSBudWxsXG5cbiAgICAgICAgc3RvcmFnZS5zdG9yZVByb2plY3QodGhpcylcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgUHJvamVjdCwgcHJvamVjdHMgfVxuIiwiaW1wb3J0IHsgY2hlY2tEaW5hbWljYWxseSwgcmVtb3ZlVGFza0RpbmFtaWNhbGx5IH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdGFza0FjdGlvbnMnO1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuLi9vdGhlcnMvZG9tQ3JlYXRvcic7XG5pbXBvcnQgZXhwYW5kVGFzayBmcm9tICcuLi92aWV3cy9mdWxsLXZpZXcvZXhwYW5kVGFzayc7XG5pbXBvcnQgeyBkaXNwbGF5RWRpdFRhc2tGb3JtIH0gZnJvbSAnLi4vdmlld3MvbW9kYWwtZm9ybXMvZWRpdFRhc2tGb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3VGFza0NhcmQodGFzaykge1xuICAgIGNvbnN0IGNhcmREaXYgPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2RpdicsICcnLCAndGFzay1jYXJkJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2RpdicsICcnLCAncHJpb3JpdHknLCB0YXNrLnByaW9yaXR5KTtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnZGl2JywgJycsICdjb250ZW50LXdyYXBwZXInKTtcbiAgICBjb25zdCBjaGVja2JveERpdiA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnZGl2JywgJycsICdjaGVja2JveC1kaXYnKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnaW5wdXQnLCAnJywgJ2NoZWNrYm94Jyk7XG4gICAgY29uc3QgaW5mbyA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnZGl2JywgJycsICd0YXNrLWluZm8nKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZS5lbFdpdGhDbGFzcygncCcsIHRhc2sudGl0bGUsICd0YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZS5lbFdpdGhDbGFzcygncCcsIHRhc2sucHJvamVjdCwgJ3Rhc2stcHJvamVjdCcpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ3AnLCB0YXNrLmR1ZURhdGUsICdkdWUtZGF0ZScpO1xuICAgIGNvbnN0IGFjdGlvbnMgPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2RpdicsICcnLCAndGFzay1hY3Rpb25zJyk7XG4gICAgY29uc3QgZWRpdFRhc2tCdG4gPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2J1dHRvbicsICcnLCAnZWRpdC10YXNrJyk7XG4gICAgY29uc3QgZWRpdEljb24gPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2knLCAnJywgJ2ZhLXJlZ3VsYXInLCAnZmEtcGVuLXRvLXNxdWFyZScpO1xuICAgIGNvbnN0IHJlbW92ZVRhc2tCdG4gPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2J1dHRvbicsICcnLCAncmVtb3ZlLXRhc2snKTtcbiAgICBjb25zdCByZW1vdmVJY29uID0gY3JlYXRlLmVsV2l0aENsYXNzKCdpJywgJycsICdmYS1yZWd1bGFyJywgJ2ZhLXNxdWFyZS1taW51cycpO1xuICAgIGNhcmREaXYuZGF0YXNldC5pbmRleCA9IHRhc2suaWQ7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suaXNEb25lO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjaGVja0RpbmFtaWNhbGx5KGNoZWNrYm94LCB0YXNrLmlkKTtcbiAgICB9KTtcbiAgICBjb250ZW50V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhwYW5kVGFzayh0YXNrLmlkKTtcbiAgICB9KTtcbiAgICBwcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXhwYW5kVGFzayh0YXNrLmlkKTtcbiAgICB9KTtcbiAgICByZW1vdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVUYXNrRGluYW1pY2FsbHkodGFzay5pZCk7XG4gICAgfSk7XG4gICAgZWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlFZGl0VGFza0Zvcm0odGFzay5pZCk7XG4gICAgfSk7XG4gICAgXG4gICAgcmVtb3ZlVGFza0J0bi5hcHBlbmRDaGlsZChyZW1vdmVJY29uKTtcbiAgICBlZGl0VGFza0J0bi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgYWN0aW9ucy5hcHBlbmQoZWRpdFRhc2tCdG4sIHJlbW92ZVRhc2tCdG4pO1xuICAgIGluZm8uYXBwZW5kKHRpdGxlLCBwcm9qZWN0KTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoaW5mbywgZHVlRGF0ZSk7XG4gICAgY2hlY2tib3hEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgY2FyZERpdi5hcHBlbmQocHJpb3JpdHksIGNoZWNrYm94RGl2LCBjb250ZW50V3JhcHBlciwgYWN0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNhcmREaXY7XG59O1xuXG4vLyBMYXlvdXQ6XG5cbi8vICBkaXYudGFzay1jYXJkXG4vLyAgXiBkaXYucHJpb3JpdHkubG93IFxuLy8gIF4gZGl2LmNoZWNrYm94LWRpdlxuLy8gICAgICBeIGlucHV0LmNoZWNrYm94XG4vLyAgXiBkaXYuY29udGVudFdyYXBwZXItY29udGVudFdyYXBwZXJcbi8vICAgICAgXiBkaXYuaW5mb1xuLy8gICAgICAgICAgXiBwLnRhc2stdGl0bGVcbi8vICAgICAgICAgIF4gcC50YXNrLXByb2plY3Rcbi8vICAgICAgXiBwLmR1ZS1kYXRlXG4vLyAgXiBkaXYuYWN0aW9uc1xuLy8gICAgICBeIGJ1dHRvbi5lZGl0LXRhc2tcbi8vICAgICAgICAgIF4gaS5mYS1yZWd1bGFyLmZhLXBlbi10by1zcXVhcmVcbi8vICAgICAgXiBidXR0b24ucmVtb3ZlLXRhc2tcbi8vICAgICAgICAgIF4gaS5mYS1yZWd1bGFyLmZhLXNxdWFyZS1taW51cyIsImltcG9ydCB7IHVwZGF0ZUlkcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9nZW5lcmFsXCI7XG5pbXBvcnQgdGFza3MgZnJvbSBcIi4uL3N0b3JhZ2UvdGFza3NTdG9yYWdlXCI7XG5cbmxldCBhcnJheSA9IFtdO1xuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdCxcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZSxcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LnRvTG93ZXJDYXNlKCksXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcyxcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBmYWxzZVxuXG4gICAgICAgIHRhc2tzLnN0b3JlVGFzayh0aGlzKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZmlsdGVyVGFza3MobmV3QXJyKXtcbiAgICBhcnJheSA9IG5ld0FycjtcbiAgICB1cGRhdGVJZHMoYXJyYXkpO1xufTtcblxuZnVuY3Rpb24gc2luY3Jvbml6ZShldyl7XG4gICAgYXJyYXkgPSBld1xufVxuXG5leHBvcnQgeyBUYXNrLCBhcnJheSwgZmlsdGVyVGFza3MsIHNpbmNyb25pemUgfSIsImNvbnN0IGNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBlbChlbCwgdGV4dCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBlbFdpdGhJZChlbCwgaWQsIHRleHQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcbiAgICAgICAgZWxlbWVudC5pZCA9IGlkO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBlbFdpdGhDbGFzcyhlbCwgdGV4dCwgLi4uY2xhc3Nlcykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgICAgICBmb3IoY29uc3QgY2wgb2YgY2xhc3Nlcyl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2wpO1xuICAgICAgICB9O1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBlbCxcbiAgICAgICAgZWxXaXRoSWQsXG4gICAgICAgIGVsV2l0aENsYXNzXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTsiLCJpbXBvcnQgZmF2aWNvbiBmcm9tICcuLi8uLi9hc3NldHMvZmF2aWNvbi5zdmcnO1xuaW1wb3J0IGhlYWRlckxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2xvZ28uc3ZnJztcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi9kb21DcmVhdG9yLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0SW1hZ2VzKCl7XG4gICAgLy8gRmF2aWNvblxuICAgIGxldCBoZWFkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgbGV0IHNldEZhdmljb24gPSBjcmVhdGUuZWwoJ2xpbmsnKTtcbiAgICBzZXRGYXZpY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ3Nob3J0Y3V0IGljb24nKTtcbiAgICBzZXRGYXZpY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsIGZhdmljb24pO1xuICAgIGhlYWRUaXRsZS5hcHBlbmRDaGlsZChzZXRGYXZpY29uKTtcblxuICAgIC8vIEhlYWRlciBsb2dvXG4gICAgbGV0IGxvZ29EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpXG4gICAgbGV0IGxvZ28gPSBjcmVhdGUuZWwoJ2ltZycpO1xuICAgIGxldCBsb2dvVGV4dCA9IGNyZWF0ZS5lbCgncCcsICdEdWUnKTtcbiAgICBsb2dvLnNyYyA9IGhlYWRlckxvZ287XG4gICAgbG9nb1RleHQuc3R5bGUuY29sb3IgPSAndmFyKC0tZGVmYXVsdC1ncmF5KSdcbiAgICBsb2dvRGl2LmFwcGVuZChsb2dvLCBsb2dvVGV4dClcbn07XG5cbnNldEltYWdlcygpOyIsImxldCBhcnJheSA9IFtdXG5cbmNvbnN0IHByb2plY3RzID0gKGZ1bmN0aW9uKCl7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGwpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuICAgICAgICBzdG9yZVByb2plY3Qoe1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRlbW8gcHJvamVjdFwiLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwicHJvamVjdGxpbmsuY29tXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQmUgY2FyZWZ1bCEgRXhjbHVkaW5nIGEgcHJvamVjdCB3aWxsIGF1dG9tYXRpY2FsbHkgZXhjbHVkZSBhbGwgdGFza3MgYXR0YWNoZWQgdG8gaXQuXCIsXG4gICAgICAgICAgICBcInRhc2tzXCI6IFtdLFxuICAgICAgICAgICAgXCJpZFwiOiAwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdG9yZVByb2plY3Qob2JqKXtcbiAgICAgICAgbGV0IHBhcnNlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICBwYXJzZWQucHVzaChvYmopO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwYXJzZWQpKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdHNJZHMoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpKXtcbiAgICAgICAgbGV0IHBhcnNlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICBwYXJzZWQuc3BsaWNlKGksIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwYXJzZWQpKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdHNJZHMoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdChpLCBuZXdUaXRsZSwgbmV3TGluaywgbmV3RGVzY3JpcHRpb24pe1xuICAgICAgICBsZXQgcGFyc2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgIGlmKG5ld1RpdGxlICE9PSAnJyl7XG4gICAgICAgICAgICBwYXJzZWRbaV0udGl0bGUgPSBuZXdUaXRsZVxuICAgICAgICB9XG4gICAgICAgIHBhcnNlZFtpXS5saW5rID0gbmV3TGluaztcbiAgICAgICAgcGFyc2VkW2ldLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHBhcnNlZCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdG9yZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIGdldEFsbFByb2plY3RzLFxuICAgICAgICBlZGl0UHJvamVjdFxuICAgIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzSWRzKCl7XG4gICAgbGV0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdG9yZWQubGVuZ3RoOyBpKyspe1xuICAgICAgICBzdG9yZWRbaV0uaWQgPSBpO1xuICAgIH07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcbiIsImltcG9ydCBuZXdUYXNrQ2FyZCBmcm9tICcuLi9tb2RlbHMvdGFza0NhcmQnO1xuXG5sZXQgYXJyYXkgPSBbXTtcbmxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5sZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xubGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xubGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xudG9kYXkgPSBkZCArICcvJyArIG1tICsgJy8nICsgeXl5eTtcblxuY29uc3QgdGFza3MgPSAoZnVuY3Rpb24oKXtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gbnVsbCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gICAgICAgIHN0b3JlVGFzayh7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVHV0b3JpYWxcIixcbiAgICAgICAgICAgIFwicHJvamVjdFwiOiBcIkRlbW8gcHJvamVjdFwiLFxuICAgICAgICAgICAgXCJkdWVEYXRlXCI6IGAke3RvZGF5fWAsXG4gICAgICAgICAgICBcInByaW9yaXR5XCI6IFwibG93XCIsXG4gICAgICAgICAgICBcIm5vdGVzXCI6IFwiVGhlICcrJyBidXR0b24gb24gc2lkZWJhciBpcyBhbGwgeW91IG5lZWQgdG8gY3JlYXRlIHRhc2tzIGFuZCBwcm9qZWN0cy5cXG5cXG5UYWtlIGEgdGltZSB0byBwbGF5IHdpdGggdGhlIHNpZGViYXIgaWNvbnMgYW5kIGRpc2NvdmVyIHdoYXQgeW91IGNhbiBkbyFcXG5cXG5Zb3UgY2FuIHRvZ2dsZSBiZXR3ZWVuIGRhcmsvbGlnaHQgdGhlbWUgYnkgY2xpY2tpbmcgdGhlIHN1bi9tb29uIGljb24gcmlnaHQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2lkZWJhci5cIixcbiAgICAgICAgICAgIFwiaXNEb25lXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJpZFwiOiAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3JlVGFzayhvYmope1xuICAgICAgICBsZXQgcGFyc2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgICAgIHBhcnNlZC5wdXNoKG9iaik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHBhcnNlZCkpO1xuICAgICAgICB1cGRhdGVUYXNrc0lkcygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrKGkpe1xuICAgICAgICBsZXQgcGFyc2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgICAgIHBhcnNlZC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHBhcnNlZCkpO1xuICAgICAgICB1cGRhdGVUYXNrc0lkcygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxUYXNrcygpe1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhc2tzKG5ld0Fycil7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KG5ld0FycikpO1xuICAgICAgICB1cGRhdGVUYXNrc0lkcygpXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZUlzRG9uZShpKXtcbiAgICAgICAgbGV0IHBhcnNlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgICAgICBwYXJzZWRbaV0uaXNEb25lID09PSB0cnVlID8gcGFyc2VkW2ldLmlzRG9uZSA9IGZhbHNlIDogcGFyc2VkW2ldLmlzRG9uZSA9IHRydWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHBhcnNlZCkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBlZGl0VGFzayhpLCBuZXdUaXRsZSwgbmV3UHJvamVjdCwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHksIG5ld05vdGVzKXtcbiAgICAgICAgbGV0IHBhcnNlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgICAgICBpZihuZXdUaXRsZSAhPT0gJycpe1xuICAgICAgICAgICAgcGFyc2VkW2ldLnRpdGxlID0gbmV3VGl0bGVcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWRbaV0ucHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgICAgIHBhcnNlZFtpXS5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgcGFyc2VkW2ldLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgICAgIHBhcnNlZFtpXS5ub3RlcyA9IG5ld05vdGVzO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShwYXJzZWQpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmV0cmlldmVUYXNrcygpe1xuICAgICAgICBsZXQgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgICAgIGZvcihjb25zdCB0YXNrIG9mIHN0b3JlZCl7XG4gICAgICAgICAgICBsZXQgbWluVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW4tdmlldycpXG4gICAgICAgICAgICBtaW5WaWV3LmFwcGVuZChuZXdUYXNrQ2FyZCh0YXNrKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0b3JlVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgZ2V0QWxsVGFza3MsXG4gICAgICAgIHVwZGF0ZVRhc2tzLFxuICAgICAgICBjaGFuZ2VJc0RvbmUsXG4gICAgICAgIGVkaXRUYXNrLFxuICAgICAgICByZXRyaWV2ZVRhc2tzXG4gICAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tzSWRzKCl7XG4gICAgbGV0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdG9yZWQubGVuZ3RoOyBpKyspe1xuICAgICAgICBzdG9yZWRbaV0uaWQgPSBpO1xuICAgIH07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrcztcblxuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tICcuLi8uLi9vdGhlcnMvZG9tQ3JlYXRvcic7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4uLy4uL3N0b3JhZ2UvcHJvamVjdHNTdG9yYWdlXCI7XG5pbXBvcnQgeyB1cGRhdGVDdXJyZW50RXhwYW5kZWQgfSBmcm9tICcuLi9tb2RhbC1mb3Jtcy9kaXNwbGF5T3B0aW9ucyc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdFRhc2tzIH0gZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvdGFza3NDb250cm9sbGVyJztcbmltcG9ydCB7IHJlbW92ZUFsbEV4cGFuZGVkIH0gZnJvbSAnLi9leHBhbmRlZENvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFByb2plY3QoaW5kZXgpe1xuICAgIGNvbnN0IGZ1bGxWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bGwtdmlldycpO1xuICAgIGxldCBwcm9qZWN0c0FyciA9IHByb2plY3RzLmdldEFsbFByb2plY3RzKClcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGkgPT09IHBhcnNlSW50KGluZGV4KSl7XG4gICAgICAgICAgICByZW1vdmVBbGxFeHBhbmRlZCgpO1xuICAgICAgICAgICAgdXBkYXRlQ3VycmVudEV4cGFuZGVkKGkpO1xuICAgICAgICAgICAgY29uc3QgZnVsbFByb2pEaXYgPSBjcmVhdGUuZWxXaXRoSWQoJ2RpdicsICdmdWxsLXByb2plY3QtZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZS5lbFdpdGhJZCgnYnV0dG9uJywgJ2Nsb3NlJyk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZUljb24gPSBjcmVhdGUuZWxXaXRoQ2xhc3MoJ2knLCAnJywgJ2ZhLXNvbGlkJywgJ2ZhLXhtYXJrJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlLmVsV2l0aElkKCdkaXYnLCAnZnVsbC1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBjb25zdCBpbmZvID0gY3JlYXRlLmVsV2l0aElkKCdkaXYnLCAnZnVsbC1wcm9qZWN0LWluZm8nKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlLmVsV2l0aElkKCdoMScsICdmdWxsLXByb2plY3QtdGl0bGUnLCBwcm9qZWN0c0FycltpXS50aXRsZSk7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gY3JlYXRlLmVsV2l0aElkKCdhJywgJ2Z1bGwtcHJvamVjdC1saW5rJywgcHJvamVjdHNBcnJbaV0ubGluayk7XG4gICAgICAgICAgICBjb25zdCBkZXNjRGl2ID0gY3JlYXRlLmVsV2l0aElkKCdwcmUnLCAnZnVsbC1wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZS5lbCgncCcsIHByb2plY3RzQXJyW2ldLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnZGl2JywgJycsICdsaW5lJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IHByb2plY3RzQXJyW2ldLmxpbms7XG4gICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxFeHBhbmRlZCh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdC5kYXRhc2V0LnByb2pJbmRleCA9IGk7XG5cbiAgICAgICAgICAgIGNsb3NlQnRuLmFwcGVuZENoaWxkKGNsb3NlSWNvbilcbiAgICAgICAgICAgIGRlc2NEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgaW5mby5hcHBlbmQodGl0bGUsIGxpbmspO1xuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmQoY2xvc2VCdG4sIGluZm8sIGRlc2NEaXYpO1xuICAgICAgICAgICAgZnVsbFByb2pEaXYuYXBwZW5kKHByb2plY3QsIGxpbmUpXG4gICAgICAgICAgICBmdWxsVmlldy5hcHBlbmQoZnVsbFByb2pEaXYpO1xuXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdFRhc2tzKHByb2plY3RzQXJyW2ldKTtcbiAgICAgICAgfTtcbiAgICB9O1xufTsiLCJpbXBvcnQgY3JlYXRlIGZyb20gJy4uLy4uL290aGVycy9kb21DcmVhdG9yJztcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi4vLi4vc3RvcmFnZS90YXNrc1N0b3JhZ2VcIjtcbmltcG9ydCB7IHJlbW92ZUFsbEV4cGFuZGVkIH0gZnJvbSAnLi9leHBhbmRlZENvbW1vbic7XG5pbXBvcnQgeyBjaGVja0RpbmFtaWNhbGx5IH0gZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvdGFza0FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUYXNrKGluZGV4KXtcbiAgICBjb25zdCBmdWxsVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmdWxsLXZpZXcnKTtcbiAgICBsZXQgdGFza3NBcnIgPSB0YXNrcy5nZXRBbGxUYXNrcygpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaSA9PT0gcGFyc2VJbnQoaW5kZXgpKXtcbiAgICAgICAgICAgIHJlbW92ZUFsbEV4cGFuZGVkKCk7XG4gICAgICAgICAgICBjb25zdCBmdWxsVGFza0RpdiA9IGNyZWF0ZS5lbFdpdGhJZCgnZGl2JywgJ2Z1bGwtdGFzay1kaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gY3JlYXRlLmVsV2l0aElkKCdidXR0b24nLCAnY2xvc2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnaScsICcnLCAnZmEtc29saWQnLCAnZmEteG1hcmsnKTtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50MSA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnc3BhbicsICfigKInLCAncG9pbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50MiA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnc3BhbicsICfigKInLCAncG9pbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGdWxsID0gY3JlYXRlLmVsV2l0aElkKCdkaXYnLCAndGFzay1mdWxsJyk7XG4gICAgICAgICAgICBjb25zdCBpbmZvID0gY3JlYXRlLmVsV2l0aElkKCdkaXYnLCAndGFzay1mdWxsLWluZm8nKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlLmVsV2l0aElkKCdkaXYnLCAndGl0bGUtZnVsbCcsIHRhc2tzQXJyW2ldLnRpdGxlKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlLmVsV2l0aENsYXNzKCdkaXYnLCAnJywgdGFza3NBcnJbaV0ucHJpb3JpdHksICdmYS1zb2xpZCcsICdmYS1jaXJjbGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGNyZWF0ZS5lbFdpdGhJZCgnZGl2JywgJ3Rhc2stZnVsbC1zdGF0dXMnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gY3JlYXRlLmVsV2l0aElkKCdwJywgJ3Rhc2stZnVsbC1wcm9qZWN0JywgdGFza3NBcnJbaV0ucHJvamVjdCk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlLmVsV2l0aElkKCdwJywgJ3Rhc2stZnVsbC1kYXRlJywgdGFza3NBcnJbaV0uZHVlRGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZS5lbFdpdGhDbGFzcygnaW5wdXQnLCAnJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBjb25zdCBub3Rlc0RpdiA9IGNyZWF0ZS5lbFdpdGhJZCgncHJlJywgJ3Rhc2stZnVsbC1ub3RlcycpO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBjcmVhdGUuZWwoJ3AnLCB0YXNrc0FycltpXS5ub3Rlcyk7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gY3JlYXRlLmVsV2l0aENsYXNzKCdkaXYnLCAnJywgJ2xpbmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza0Z1bGwuZGF0YXNldC5leHBhbmRlZCA9IGluZGV4O1xuICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjaGVja0RpbmFtaWNhbGx5KGNoZWNrYm94LCBpbmRleClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsRXhwYW5kZWQodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYodGFza3NBcnJbaV0uaXNEb25lKXtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZih0YXNrUHJvamVjdC50ZXh0Q29udGVudCAhPT0gJycpe1xuICAgICAgICAgICAgICAgIHN0YXR1cy5hcHBlbmQodGFza1Byb2plY3QsIHBvaW50MSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYoZHVlRGF0ZS50ZXh0Q29udGVudCAhPT0gJycpe1xuICAgICAgICAgICAgICAgIHN0YXR1cy5hcHBlbmQoZHVlRGF0ZSwgcG9pbnQyKTtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBjbG9zZUJ0bi5hcHBlbmRDaGlsZChjbG9zZUljb24pXG4gICAgICAgICAgICBub3Rlc0Rpdi5hcHBlbmRDaGlsZChub3Rlcyk7XG4gICAgICAgICAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgaW5mby5hcHBlbmQodGl0bGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIHRhc2tGdWxsLmFwcGVuZChjbG9zZUJ0biwgaW5mbywgc3RhdHVzLCBub3Rlc0Rpdik7XG4gICAgICAgICAgICBmdWxsVGFza0Rpdi5hcHBlbmQodGFza0Z1bGwsIGxpbmUpXG4gICAgICAgICAgICBmdWxsVmlldy5hcHBlbmQoZnVsbFRhc2tEaXYpO1xuICAgICAgICB9O1xuICAgIH07XG59OyIsImxldCBlbXB0eVZpZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbXB0eVZpZXdUZXh0LmlkID0gJ2VtcHR5LXZpZXcnO1xuZW1wdHlWaWV3VGV4dC50ZXh0Q29udGVudCA9ICdUcnkgY2xpY2tpbmcgaW4gYSB0YXNrIG9yIHByb2plY3QgdG8gZXhwYW5kIGl0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbEV4cGFuZGVkKGRpc3BsYXlFbXB0eVRleHQgPSBmYWxzZSl7XG4gICAgY29uc3QgZnVsbFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbC12aWV3Jyk7XG5cbiAgICBpZihmdWxsVmlldy5maXJzdEVsZW1lbnRDaGlsZCAhPT0gbnVsbCl7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGZ1bGxWaWV3LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9IHdoaWxlKGZ1bGxWaWV3LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBpZihkaXNwbGF5RW1wdHlUZXh0KXtcbiAgICAgICAgZnVsbFZpZXcuYXBwZW5kQ2hpbGQoZW1wdHlWaWV3VGV4dCk7XG4gICAgfVxufTsiLCJpbXBvcnQgbG9hZFRhc2tGb3JtIGZyb20gXCIuL3Rhc2tGb3JtXCI7XG5pbXBvcnQgbG9hZFByb2pGb3JtIGZyb20gXCIuL3Byb2pGb3JtXCI7XG5cbmxldCBjdXJyZW50RXhwYW5kZWQgPSBudWxsO1xuY29uc3QgYnV0dG9uVG9DcmVhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlJyk7XG5jb25zdCBiYXNlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3B0aW9ucy1tb2RhbCcpO1xuY29uc3Qgb3B0aW9uc1RvQ3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbnMtdG8tY3JlYXRlJyk7XG5jb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10YXNrJyk7XG5jb25zdCBjcmVhdGVQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0Jyk7XG5cbmJ1dHRvblRvQ3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaGlkZShiYXNlTW9kYWwsIG9wdGlvbnNUb0NyZWF0ZSwgY3JlYXRlVGFza0J0biwgY3JlYXRlUHJvakJ0bilcbiAgICBjbG9zZU1vZGFsQmhlYXZpb3IoYmFzZU1vZGFsKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUZvcm0oZm9ybSl7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGhpZGUob3B0aW9uc1RvQ3JlYXRlLCBjcmVhdGVUYXNrQnRuLCBjcmVhdGVQcm9qQnRuKVxuICAgIHVuaGlkZShmb3JtKVxuICAgIGNsb3NlTW9kYWxCaGVhdmlvcihiYXNlTW9kYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZSguLi5lbGVtZW50cyl7XG4gICAgZm9yKGNvbnN0IGVsIG9mIGVsZW1lbnRzKXtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmhpZGUoLi4uZWxlbWVudHMpe1xuICAgIGZvcihjb25zdCBlbCBvZiBlbGVtZW50cyl7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheScpO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBjbG9zZU1vZGFsQmhlYXZpb3IobW9kYWwpIHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBlZGl0UHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWZvcm0nKTtcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgICAgICBoaWRlKG9wdGlvbnNUb0NyZWF0ZSxcbiAgICAgICAgICAgICAgICAgY3JlYXRlVGFza0J0bixcbiAgICAgICAgICAgICAgICAgY3JlYXRlUHJvakJ0bixcbiAgICAgICAgICAgICAgICAgbW9kYWwsXG4gICAgICAgICAgICAgICAgIHRhc2tGb3JtLFxuICAgICAgICAgICAgICAgICBwcm9qRm9ybSxcbiAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLFxuICAgICAgICAgICAgICAgICBlZGl0VGFza0Zvcm0pO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ3VycmVudEV4cGFuZGVkKGFyZyl7XG4gICAgY3VycmVudEV4cGFuZGVkID0gYXJnO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRFeHBhbmRlZClcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RXhwYW5kZWQoKXtcbiAgICByZXR1cm4gY3VycmVudEV4cGFuZGVkO1xufTtcblxuZXhwb3J0IHsgYmFzZU1vZGFsIH1cbiIsImltcG9ydCB7IGRpc3BsYXlGb3JtLCB1bmhpZGUsIGhpZGUsIGJhc2VNb2RhbCB9IGZyb20gXCIuL2Rpc3BsYXlPcHRpb25zXCI7XG5pbXBvcnQgeyBjbGVhckRpc3BsYXllZCB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9nZW5lcmFsXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyXCI7XG5pbXBvcnQgZXhwYW5kUHJvamVjdCBmcm9tIFwiLi4vZnVsbC12aWV3L2V4cGFuZFByb2plY3RcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi4vLi4vc3RvcmFnZS9wcm9qZWN0c1N0b3JhZ2VcIjtcblxuY29uc3QgZWRpdFByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1mb3JtJyk7XG5jb25zdCBlZGl0UHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKTtcblxubGV0IHByb2pUb0VkaXRJRDtcblxuZnVuY3Rpb24gbG9hZEVkaXRGb3JtKCl7XG4gICAgZWRpdFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2F2ZUNoYW5nZXMocHJvalRvRWRpdElEKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdEZvcm0oaSl7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5nZXRBbGxQcm9qZWN0cygpXG4gICAgcHJvalRvRWRpdElEID0gaTtcbiAgICB1bmhpZGUoYmFzZU1vZGFsKTtcbiAgICBkaXNwbGF5Rm9ybShlZGl0UHJvakZvcm0pO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjZWRpdC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2VkaXQtcHJvamVjdC1saW5rJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYSNlZGl0LXByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICB0aXRsZS52YWx1ZSA9IHN0b3JlZFByb2plY3RzW2ldLnRpdGxlXG4gICAgbGluay52YWx1ZSA9IHN0b3JlZFByb2plY3RzW2ldLmxpbmtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHN0b3JlZFByb2plY3RzW2ldLmRlc2NyaXB0aW9uXG59O1xuXG5mdW5jdGlvbiBzYXZlQ2hhbmdlcyhpbmRleCl7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5nZXRBbGxQcm9qZWN0cygpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNlZGl0LXByb2plY3QtdGl0bGUnKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjZWRpdC1wcm9qZWN0LWxpbmsnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhI2VkaXQtcHJvamVjdC1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGxldCBmaWx0ZXIgPSBzdG9yZWRQcm9qZWN0cy5maWx0ZXIocHJvaiA9PiBwcm9qLnRpdGxlID09PSB0aXRsZS52YWx1ZSk7IFxuXG4gICAgaWYodGl0bGUudmFsdWUgIT09ICcnICYmIFxuICAgICAgICAoIWZpbHRlclswXSB8fCB0aXRsZS52YWx1ZSA9PT0gc3RvcmVkUHJvamVjdHNbaW5kZXhdLnRpdGxlKVxuICAgICl7XG4gICAgICAgIHByb2plY3RzLmVkaXRQcm9qZWN0KGluZGV4LCB0aXRsZS52YWx1ZSwgbGluaywgZGVzY3JpcHRpb24pO1xuICAgICAgICBoaWRlKGJhc2VNb2RhbCwgZWRpdFByb2pGb3JtKTtcbiAgICAgICAgY2xlYXJEaXNwbGF5ZWQoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIHVwZGF0ZUlmRXhwYW5kZWQoaW5kZXgpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJDYW4ndCBoYXZlIHR3byBwcm9qZWN0cyB3aXRoIHRoZSBzYW1lIHRpdGxlXCIpXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gdXBkYXRlSWZFeHBhbmRlZChkYXRhSW5kZXgpe1xuICAgIGNvbnN0IGV4cGFuZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvai1pbmRleD0nJHtkYXRhSW5kZXh9J11gKTtcbiAgICBpZihleHBhbmRlZCAhPT0gbnVsbCl7XG4gICAgICAgIGV4cGFuZFByb2plY3QoZGF0YUluZGV4KTtcbiAgICB9O1xufTtcblxubG9hZEVkaXRGb3JtKCk7IiwiaW1wb3J0IHsgZGlzcGxheUZvcm0sIHVuaGlkZSwgaGlkZSwgZ2V0Q3VycmVudEV4cGFuZGVkIH0gZnJvbSBcIi4vZGlzcGxheU9wdGlvbnNcIjtcbmltcG9ydCB7IGNsZWFyRGlzcGxheWVkLCBjbGVhclByb2plY3RUYXNrcyB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9nZW5lcmFsXCI7XG5pbXBvcnQgeyBsb2FkQXZhaWxhYmxlUHJvamVjdHMgfSBmcm9tIFwiLi90YXNrRm9ybVwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RUYXNrcywgZGlzcGxheVRhc2tzIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL3Rhc2tzQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsRXhwYW5kZWQgfSBmcm9tIFwiLi4vZnVsbC12aWV3L2V4cGFuZGVkQ29tbW9uXCI7XG5pbXBvcnQgZXhwYW5kVGFzayBmcm9tIFwiLi4vZnVsbC12aWV3L2V4cGFuZFRhc2tcIjtcbmltcG9ydCB0YXNrcyBmcm9tIFwiLi4vLi4vc3RvcmFnZS90YXNrc1N0b3JhZ2VcIjtcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi4vLi4vc3RvcmFnZS9wcm9qZWN0c1N0b3JhZ2VcIjtcblxuY29uc3QgYmFzZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wdGlvbnMtbW9kYWwnKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZm9ybScpO1xuY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrJyk7XG5cbmxldCBpbmRleFRhc2tUb0VkaXQ7XG5cbmZ1bmN0aW9uIGxvYWRFZGl0VGFza0Zvcm0oKXtcbiAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzYXZlQ2hhbmdlcyhpbmRleFRhc2tUb0VkaXQpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFZGl0VGFza0Zvcm0oaSl7XG4gICAgY29uc3Qgc3RvcmVkVGFza3MgPSB0YXNrcy5nZXRBbGxUYXNrcygpO1xuICAgIGluZGV4VGFza1RvRWRpdCA9IGk7XG4gICAgbG9hZEF2YWlsYWJsZVByb2plY3RzKCk7XG4gICAgdW5oaWRlKGJhc2VNb2RhbCk7XG4gICAgZGlzcGxheUZvcm0oZWRpdFRhc2tGb3JtKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2VkaXQtdGFzay10aXRsZScpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QjZWRpdC1wcm9qZWN0cy1kcm9wZG93bicpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNlZGl0LWR1ZS1kYXRlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QjZWRpdC10YXNrLXByaW9yaXR5Jyk7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYSNlZGl0LXRhc2stbm90ZXMnKTtcbiAgICB0aXRsZS52YWx1ZSA9IHN0b3JlZFRhc2tzW2ldLnRpdGxlXG4gICAgcHJvamVjdC52YWx1ZSA9IHN0b3JlZFRhc2tzW2ldLnByb2plY3RcbiAgICBkdWVEYXRlLnZhbHVlID0gc3RvcmVkVGFza3NbaV0uZHVlRGF0ZVxuICAgIHByaW9yaXR5LnZhbHVlID0gc3RvcmVkVGFza3NbaV0ucHJpb3JpdHlcbiAgICBub3Rlcy50ZXh0Q29udGVudCA9IHN0b3JlZFRhc2tzW2ldLm5vdGVzXG59O1xuXG5mdW5jdGlvbiBzYXZlQ2hhbmdlcyhpbmRleCl7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNlZGl0LXRhc2stdGl0bGUnKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0I2VkaXQtcHJvamVjdHMtZHJvcGRvd24nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjZWRpdC1kdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0I2VkaXQtdGFzay1wcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEjZWRpdC10YXNrLW5vdGVzJykudmFsdWU7XG5cbiAgICBpZih0aXRsZS52YWx1ZSAhPT0gJycpe1xuICAgICAgICB0YXNrcy5lZGl0VGFzayhpbmRleCwgdGl0bGUudmFsdWUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG4gICAgICAgIGhpZGUoYmFzZU1vZGFsLCBlZGl0VGFza0Zvcm0pO1xuICAgICAgICB1cGRhdGVJZkluTWluVmlldyhpbmRleCk7XG4gICAgICAgIHVwZGF0ZUlmRXhwYW5kZWQoaW5kZXgpO1xuICAgICAgICB1cGRhdGVJZkluRnVsbFZpZXcoaW5kZXgpO1xuICAgICAgICB1cGRhdGVJZlByb2plY3RJc0V4cGFuZGVkKClcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiQ2FuJ3QgaGF2ZSB0d28gdGFza3Mgd2l0aCB0aGUgc2FtZSB0aXRsZVwiKVxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSWZFeHBhbmRlZChpZCl7XG4gICAgY29uc3QgZXhwYW5kZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1leHBhbmRlZD0nJHtpZH0nXWApO1xuICAgIGlmKGV4cGFuZGVkICE9PSBudWxsKXtcbiAgICAgICAgcmVtb3ZlQWxsRXhwYW5kZWQoKTtcbiAgICAgICAgZXhwYW5kVGFzayhpZCk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUlmSW5NaW5WaWV3KGlkKXtcbiAgICBjb25zdCBtaW52aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aWR9J11gKTtcbiAgICBpZihtaW52aWV3ICE9PSBudWxsKXtcbiAgICAgICAgY2xlYXJEaXNwbGF5ZWQoKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUlmSW5GdWxsVmlldyhpZCl7XG4gICAgY29uc3QgZnVsbFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1mdWxsLWluZGV4PScke2lkfSddYCk7XG4gICAgbGV0IHByb2plY3RzQXJyID0gcHJvamVjdHMuZ2V0QWxsUHJvamVjdHMoKVxuICAgIGlmKGZ1bGxWaWV3ICE9PSBudWxsKXtcbiAgICAgICAgY2xlYXJQcm9qZWN0VGFza3MoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcyhwcm9qZWN0c0FycltnZXRDdXJyZW50RXhwYW5kZWQoKV0pO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVJZlByb2plY3RJc0V4cGFuZGVkKCl7XG4gICAgY29uc3QgZXhwYW5kZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbC12aWV3Jyk7XG4gICAgbGV0IHByb2plY3RzQXJyID0gcHJvamVjdHMuZ2V0QWxsUHJvamVjdHMoKTtcbiAgICBpZihleHBhbmRlZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZCAhPT0gbnVsbCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV4cGFuZGVkLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmRhdGFzZXQucHJvakluZGV4O1xuICAgICAgICBjbGVhclByb2plY3RUYXNrcygpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdFRhc2tzKHByb2plY3RzQXJyW3Byb2plY3RJbmRleF0pO1xuICAgIH07XG59O1xuXG5sb2FkRWRpdFRhc2tGb3JtKCk7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcHJvamVjdHNcIjtcbmltcG9ydCB7IGRpc3BsYXlGb3JtIH0gZnJvbSBcIi4vZGlzcGxheU9wdGlvbnNcIjtcbmltcG9ydCB7IHN1Ym1pdFByb2plY3QgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyXCI7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4uLy4uL3N0b3JhZ2UvcHJvamVjdHNTdG9yYWdlXCI7XG5cbmNvbnN0IGJhc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHRpb25zLW1vZGFsJyk7XG5jb25zdCBjcmVhdGVQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHN1Ym1pdFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qRm9ybSgpe1xuICAgIGNyZWF0ZVByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlGb3JtKHByb2pGb3JtKTtcbiAgICB9KTtcblxuICAgIHN1Ym1pdFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHN0b3JlZFByb2plY3RzID0gcHJvamVjdHMuZ2V0QWxsUHJvamVjdHMoKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgbGV0IGZpbHRlciA9IHN0b3JlZFByb2plY3RzLmZpbHRlcihwcm9qID0+IHByb2oudGl0bGUgPT09IHRpdGxlLnZhbHVlKTtcbiAgICAgICAgaWYoIWZpbHRlclswXSl7XG4gICAgICAgICAgICBzdWJtaXRQcm9qZWN0KHByb2pGb3JtLCBiYXNlTW9kYWwpO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2ooKXtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3Byb2plY3QtdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjcHJvamVjdC1saW5rJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYSNwcm9qZWN0LWRlc2NyaXB0aW9uJykudmFsdWU7XG5cbiAgICBuZXcgUHJvamVjdCh0aXRsZSwgbGluaywgZGVzY3JpcHRpb24pO1xufTtcblxubG9hZFByb2pGb3JtKCk7IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uLy4uL21vZGVscy90YXNrcyc7XG5pbXBvcnQgeyBkaXNwbGF5Rm9ybSwgZ2V0Q3VycmVudEV4cGFuZGVkLCBiYXNlTW9kYWwgfSBmcm9tIFwiLi9kaXNwbGF5T3B0aW9uc1wiO1xuaW1wb3J0IHsgc3VibWl0VGFzayB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy90YXNrc0NvbnRyb2xsZXJcIjtcbmltcG9ydCBleHBhbmRQcm9qZWN0IGZyb20gJy4uL2Z1bGwtdmlldy9leHBhbmRQcm9qZWN0JztcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi8uLi9zdG9yYWdlL3Byb2plY3RzU3RvcmFnZSc7XG5cbmNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xuY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGFza0Zvcm0oKXtcbiAgICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2FkQXZhaWxhYmxlUHJvamVjdHMoKTtcbiAgICAgICAgZGlzcGxheUZvcm0odGFza0Zvcm0pO1xuICAgIH0pO1xuICAgIFxuICAgIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3VibWl0VGFzayh0YXNrRm9ybSwgYmFzZU1vZGFsKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdERpc3BsYXllZCgpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soKXtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3Rhc2stdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0I3Byb2plY3RzLWRyb3Bkb3duJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QjdGFzay1wcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNkdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEjdGFzay1ub3RlcycpLnZhbHVlO1xuXG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgICByZXR1cm4gdGFza1xufTtcblxuZnVuY3Rpb24gbG9hZEF2YWlsYWJsZVByb2plY3RzKCl7XG4gICAgbGV0IHN0b3JlZFByb2plY3RzID0gcHJvamVjdHMuZ2V0QWxsUHJvamVjdHMoKTtcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWRyb3Bkb3duJyk7XG4gICAgY29uc3QgZWRpdE9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0cy1kcm9wZG93bicpO1xuXG4gICAgd2hpbGUgKG9wdGlvbnMubGFzdENoaWxkLnZhbHVlICE9PSAnJykge1xuICAgICAgICBvcHRpb25zLnJlbW92ZUNoaWxkKG9wdGlvbnMubGFzdENoaWxkKTtcbiAgICB9XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0b3JlZFByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgb3B0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb24oc3RvcmVkUHJvamVjdHNbaV0udGl0bGUpKTtcbiAgICB9O1xuICAgIFxuICAgIHdoaWxlIChlZGl0T3B0aW9ucy5sYXN0Q2hpbGQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGVkaXRPcHRpb25zLnJlbW92ZUNoaWxkKGVkaXRPcHRpb25zLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdG9yZWRQcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGVkaXRPcHRpb25zLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihzdG9yZWRQcm9qZWN0c1tpXS50aXRsZSkpO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb24odmFsdWUpe1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgICBvcHRpb24udGV4dCA9IHZhbHVlO1xuICAgIHJldHVybiBvcHRpb247XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0RGlzcGxheWVkKCl7XG4gICAgY29uc3QgZnVsbFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbC12aWV3Jyk7XG4gICAgaWYoZnVsbFZpZXcuZmlyc3RFbGVtZW50Q2hpbGQuaWQgPT09ICdmdWxsLXByb2plY3QtZGl2Jyl7XG4gICAgICAgIGV4cGFuZFByb2plY3QoZ2V0Q3VycmVudEV4cGFuZGVkKCkpO1xuICAgIH07XG59O1xuXG5sb2FkVGFza0Zvcm0oKTtcblxuZXhwb3J0IHsgbG9hZEF2YWlsYWJsZVByb2plY3RzIH0iLCJpbXBvcnQgeyBjaGFuZ2VMYWJlbHRvIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dlbmVyYWxcIjtcbmltcG9ydCB7IGxhc3RUYWIgfSBmcm9tIFwiLi90YWJzXCI7XG5cbmxldCBmaWx0ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRGaWx0ZXIoKSB7XG4gICAgY29uc3QgbG93UHJpb3JCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG93Jyk7XG4gICAgY29uc3QgbWlkUHJpb3JCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVkaXVtJyk7XG4gICAgY29uc3QgaGlnaFByaW9yQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZ2gnKTtcbiAgICBsb3dQcmlvckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGZpbHRlclByaW9yaXR5KGxvd1ByaW9yQnRuLmlkKSk7XG4gICAgbWlkUHJpb3JCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBmaWx0ZXJQcmlvcml0eShtaWRQcmlvckJ0bi5pZCkpO1xuICAgIGhpZ2hQcmlvckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGZpbHRlclByaW9yaXR5KGhpZ2hQcmlvckJ0bi5pZCkpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyUHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICBsZXQgZm9ybWF0ZWQgPSBwcmlvcml0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByaW9yaXR5LnNsaWNlKDEpO1xuXG4gICAgaWYoZmlsdGVyICE9PSBwcmlvcml0eSl7XG4gICAgICAgIGZpbHRlciA9IHByaW9yaXR5O1xuICAgICAgICBhcHBseUZpbHRlcihwcmlvcml0eSk7XG4gICAgICAgIGNoYW5nZUxhYmVsdG8oYCR7Zm9ybWF0ZWR9IHByaW9yaXR5YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyID0gJyc7XG4gICAgICAgIHJlbW92ZUZpbHRlcigpO1xuICAgICAgICBjaGFuZ2VMYWJlbHRvKGxhc3RUYWIpO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBhcHBseUZpbHRlcihwcmlvcml0eSl7XG4gICAgY29uc3QgYWxsQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jYXJkJyk7XG4gICAgYWxsQ2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgaWYoIWNhcmQuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKGAke3ByaW9yaXR5fWApKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlRmlsdGVyKCkge1xuICAgIGNvbnN0IGFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY2FyZCcpO1xuICAgIGFsbENhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGNsZWFyRGlzcGxheWVkLCBjaGFuZ2VMYWJlbHRvIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2dlbmVyYWxcIjtcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy90YXNrc0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9wcm9qZWN0c0NvbnRyb2xsZXJcIlxuXG5sZXQgbGFzdFRhYiA9ICdIb21lJztcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNob21lJyk7XG5jb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNwcm9qZWN0cycpO1xuXG5mdW5jdGlvbiBsb2FkVGFicygpe1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyRGlzcGxheWVkKCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBjaGFuZ2VMYWJlbHRvKCdIb21lJylcbiAgICAgICAgbGFzdFRhYiA9ICdIb21lJztcbiAgICB9KTtcbiAgICBcbiAgICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJEaXNwbGF5ZWQoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIGNoYW5nZUxhYmVsdG8oJ1Byb2plY3RzJyk7XG4gICAgICAgIGxhc3RUYWIgPSAnUHJvamVjdHMnO1xuICAgIH0pO1xufTtcblxubG9hZFRhYnMoKTtcblxuZXhwb3J0IHsgbG9hZFRhYnMsIGxhc3RUYWIgfSIsImNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtdGhlbWUnKTtcbmNvbnN0IHRoZW1lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS1pY29uJyk7XG5cbnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ2RhcmsnKXtcbiAgICAgICAgYXBwbHlUaGVtZS5saWdodCgpO1xuICAgICAgICB0aGVtZUljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3VuJylcbiAgICAgICAgdGhlbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLW1vb24nKVxuICAgIH0gZWxzZXtcbiAgICAgICAgYXBwbHlUaGVtZS5kYXJrKCk7XG4gICAgICAgIHRoZW1lSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1tb29uJylcbiAgICAgICAgdGhlbWVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXN1bicpXG4gICAgfTtcbn0pO1xuXG5jb25zdCBhcHBseVRoZW1lID0gKGZ1bmN0aW9uKCl7XG4gICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGRhcmsoKXtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iYWNrZ3JvdW5kJywgJyMyMTI1MjknKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ibGFjaycsICcjYWRiNWJkJyk7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tZGFyay1ncmF5JywgJyM3NjgwODgnKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kZWZhdWx0LWdyYXknLCAnIzQ5NTA1NycpO1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWxpZ2h0LWdyYXknLCAnIzM0M2E0MCcpO1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJvcmRlcnMtZ3JheScsICcjMzQzYTQwJyk7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tYmx1ZScsICcjMzc3MmZmJyk7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0teWVsbG93JywgJyNmZjlmMWMnKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1yZWQnLCAnI2U3MWQzNicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gbGlnaHQoKXtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iYWNrZ3JvdW5kJywgJyNGRkZGRkYnKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ibGFjaycsICcjNDk1MDU3Jyk7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tZGFyay1ncmF5JywgJyM2ZDZhNzVmZicpO1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWRlZmF1bHQtZ3JheScsICcjYWRiNWJkZmYnKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1saWdodC1ncmF5JywgJyNlYmViZWInKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ib3JkZXJzLWdyYXknLCAnI0QzRDNEMycpO1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJsdWUnLCAnIzY0YjVmNmZmJyk7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0teWVsbG93JywgJyNmNmMzNjQnKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1yZWQnLCAnI2ZmNWE1YScpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZGFyaywgbGlnaHQgfVxufSkoKTtcblxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdkYXJrJyl7XG4gICAgYXBwbHlUaGVtZS5kYXJrKCk7XG59IGVsc2V7XG4gICAgYXBwbHlUaGVtZS5saWdodCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlUaGVtZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgc2V0SW1hZ2VzIGZyb20gJy4vb3RoZXJzL2xvZ28nXG5pbXBvcnQgdGFza3MgZnJvbSAnLi9zdG9yYWdlL3Rhc2tzU3RvcmFnZSc7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9zdG9yYWdlL3Byb2plY3RzU3RvcmFnZSc7XG5pbXBvcnQgbG9hZE1vZGFscyBmcm9tICcuL3ZpZXdzL21vZGFsLWZvcm1zL2Rpc3BsYXlPcHRpb25zJztcbmltcG9ydCB7IGxvYWRUYWJzIH0gZnJvbSAnLi92aWV3cy90YWJzJztcbmltcG9ydCBsb2FkRmlsdGVyIGZyb20gJy4vdmlld3MvcHJpb3JpdGllc0ZpbHRlcic7XG5pbXBvcnQgYXBwbHlUaGVtZSBmcm9tICcuL3ZpZXdzL3RvZ2dsZVRoZW1lJztcblxubG9hZEZpbHRlcigpXG50YXNrcy5yZXRyaWV2ZVRhc2tzKCk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=