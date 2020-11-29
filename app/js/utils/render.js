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