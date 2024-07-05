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

export default applyTheme