import Abstract from '../view/abstract.js';
import { RenderPosition } from '../const.js';

export function render(parent, child, position = RenderPosition.BEFOREEND) {
    if (parent instanceof Abstract) {
        parent = parent.getElement();
    }

    if (child instanceof Abstract) {
        child = child.getElement();
    }
    
    switch (position) {
        case RenderPosition.AFTERBEGIN:
            parent.prepend(child);
            break;

        case RenderPosition.BEFOREEND:
            parent.append(child);
            break;
    }
}

export function remove(element) {
    if (element instanceof Abstract) {
        element = element.getElement();
    }

    element.remove();
}

export function addCSSClass(element, ...classList) {
    if (element instanceof Abstract) {
        element = element.getElement();
    }

    classList.forEach(className => {
        element.classList.add(className);
    })
}

export function getWidth(element) {
    if (element instanceof Abstract) {
        element = element.getElement();
    }

    return window.getComputedStyle(element).width.replace(/\D/g, '');
}

export function setWidth(element, width) {
    if (element instanceof Abstract) {
        element = element.getElement();
    }

    element.style.width = width + 'px';
}

export function setXTranslate(element, translate) {
    if (element instanceof Abstract) {
        element = element.getElement();
    }

    element.style.transition = 'all 0.5s';
    element.style.transform = `translateX(-${translate})`;
}