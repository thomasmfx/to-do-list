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

export default projects;
