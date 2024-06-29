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

export default create;