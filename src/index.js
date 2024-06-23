import './style.css';
import favicon from '../assets/favicon.svg';

function setFavicons(favicon){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favicon);
    headTitle.appendChild(setFavicon);
};
setFavicons(favicon);