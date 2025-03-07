export function getElement(selector){
    return document.querySelector(selector);
}

export function getElements(selector){
    return document.querySelectorAll(selector);
}

export function createElement(tagname){
    return document.createElement(tagname);
}

export function addClass(element, className){
    return element.classList.add(className);
}

export function removeClass(element, className){
    return element.classList.remove(className);
}