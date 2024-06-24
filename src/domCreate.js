const create = (function() {
    function el(el, text) {
        let element = document.createElement(`${el}`);
        element.textContent = text;
        return element;
    };
    
    function elWithId(el, id, text) {
        let element = document.createElement(`${el}`);
        element.id = id;
        element.textContent = text;
        return element;
    };
    
    function elWithClass(el, cl, text) {
        let element = document.createElement(`${el}`);
        element.classList.add(`${cl}`);
        element.textContent = text;
        return element;
    };
    
    function imgWithSrc(src) {
        let img = document.createElement('img');
        img.src = src;
        return img;
    };

    return {
        el,
        elWithId,
        elWithClass,
        imgWithSrc
    };
})();

export default create;