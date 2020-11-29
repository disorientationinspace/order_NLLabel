import { createElement } from '../utils/utils.js';

export default class AbstractView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        throw new Error(`getTemplate() must be initialized within inharitance`);
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }

        return this._element;
    }
}