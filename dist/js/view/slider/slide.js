import Abstract from '../abstract.js';

function createSlideTemplate(slideData) {
    const {name, title, description, subHeader, info, details} = slideData;

    return (`<div data-slide-name="${name}" class="slider__tabcontent fadeIn">
            <h2 class="info__header slider__header">${title}</h2>
            <p class="info__description slider__description">${description}</p>
            <h3 class="slider__sub-header">${subHeader}</h3>
            <p class="slider__info">${info}</p>
            <p class="slider__info slider__info--wide">
               ${details}
            </p>
        </div>`)
}


export default class Slide extends Abstract {
    constructor(slideData) {
        super();
        this._data = slideData;
    }

    getTemplate() {
        return createSlideTemplate(this._data);
    }
}