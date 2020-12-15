import Abstract from '../abstract.js';
import { render } from '../../utils/render.js';

function createTeamNavigationTemplate(total, currentIndex) {
    let navigationBullets = '';

    for (let i = 0; i < total; i++) {
        navigationBullets += createNavigationElementTemplate(i === currentIndex);
    }

    return (`<ul class="bottom-slider__bullets">
            ${navigationBullets}
        </ul>`)
}

function createNavigationElementTemplate() {
    return (`<li class="bottom-slider__bullet"></li>`)
}



export default class TeamSwiper extends Abstract {
    constructor(totalSlides, currentSlide) {
        super();
        this._bulletsAmount = totalSlides;
        this._currentSlide = currentSlide;

        this._onNavigationClick = null;
    }

    getTemplate() {
        return createTeamNavigationTemplate(this._bulletsAmount, this._currentSlide);
    }

    setOnNavigationClick(handler) {
        this._onNavigationClick = handler;

        this.getElement().addEventListener(`click`, handler)
    }

    getBulletNodes() {
        return this.getElement().querySelectorAll('.bottom-slider__bullet');
    }
    
    recoveryListeners() {
        this.setOnNavigationClick(this._onNavigationClick);
    }

    updateCurrentSlide(newSlide) {
        this._currentSlide = newSlide;

        const parent = this.getElement().parentNode;

        this._element.remove();
        this._element = null;
        this.recoveryListeners();

        render(parent, this._element);
    }
}

