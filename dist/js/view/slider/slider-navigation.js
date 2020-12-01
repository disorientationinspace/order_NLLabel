import Abstract from '../abstract.js';
import { render, remove } from '../../utils/render.js';


function createSliderNavigationTemplate(sliderData, activeSlideName) {
    let navigationItemsTemplate = '';
    sliderData.forEach((slideData, index) => {
        const navigationItemTemplate = createNavigationItemTemplate(slideData, activeSlideName);
        navigationItemsTemplate += navigationItemTemplate;
    })

    return (`<ul class="slider__navigation">
        ${navigationItemsTemplate}
    </ul>`)
}

function createNavigationItemTemplate(slideData, activeSlideName) {
    const { title, name } = slideData;
    const activeClass = activeSlideName === name ? 'slider__button--active' : '';

    return (`
        <li class="slider__item">
        <button class="slider__button slider__button--${name} ${activeClass}" data-slider-name=${name}>
            <span class="visually-hidden">${title}</span>
        </button> 
    </li>`)
}

export default class SliderNavigation extends Abstract {
    constructor(sliderData) {
        super();
        this._data = sliderData;
        this._activeSlideName = sliderData[0].name;

        this._onSliderNavigationClick = null;
    }

    getTemplate() {
        return createSliderNavigationTemplate(this._data, this._activeSlideName);
    }

    setOnSliderNavigationClick(handler) {
        this._onSliderNavigationClick = handler;

        this.getElement().addEventListener(`click`, handler);
    }

    update(activeSlideName) {
        const parent = this._element.parentNode;
        
        remove(this._element);

        this._activeSlideName = activeSlideName;
        this._element = null;
        this.recoveryListeners();

        render(parent, this._element);
    }

    recoveryListeners() {
        this.setOnSliderNavigationClick(this._onSliderNavigationClick);
    }
}