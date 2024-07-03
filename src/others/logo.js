import favicon from '../../assets/favicon.svg';
import headerLogo from '../../assets/logo.svg';
import create from './domCreator.js';

export default function setImages(){
    // Favicon
    let headTitle = document.querySelector('head');
    let setFavicon = create.el('link');
    setFavicon.setAttribute('rel', 'shortcut icon');
    setFavicon.setAttribute('href', favicon);
    headTitle.appendChild(setFavicon);

    // Header logo
    let logoDiv = document.querySelector('#logo')
    let logo = create.el('img');
    let logoText = create.el('p', 'Due');
    logo.src = headerLogo;
    logoText.style.color = 'var(--default-gray)'
    logoDiv.append(logo, logoText)
};

setImages();