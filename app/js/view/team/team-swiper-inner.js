import Abstract from '../abstract.js';
import { setXTranslate } from '../../utils/render.js';

function createTeamSwiperInnerTemplate() {
    return (`<div class="bottom-slider__inner">
            
        </div>`);
}


export default class TeamSwiper extends Abstract {
    constructor() {
        super();

        this._onSwiperTouchStart = null;
        this._onSwiperTouchMove = null;
        this._onSwiperTouchEnd = null;
    }

    getTemplate() {
        return createTeamSwiperInnerTemplate();
    }

    setOnSwiperTouchStart(handler) {
        this._onSwiperTouchStart = handler;

        this.getElement().addEventListener('touchstart', handler);
    }

    removeOnSwiperTouchMove() {
        this.getElement().removeEventListener('touchmove', this._onSwiperTouchMove);
        
        this._onSwiperTouchMove = null;
    }
    
    removeOnSwiperTouchEnd() {
        this.getElement().removeEventListener('touchend', this._onSwiperTouchEnd);
        
        this._onSwiperTouchEnd = null;    
    }

    setOnSwiperTouchMove(handler) {
        this._onSwiperTouchMove = handler;

        this.getElement().addEventListener(`touchmove`, handler);
    }

    setOnSwiperTouchEnd(handler) {
        this._onSwiperTouchEnd = handler;

        this.getElement().addEventListener(`touchend`, handler);
    }

    translateByX(translate) {
        setXTranslate(this.getElement(), translate);
    }
}

