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
        this._onSwiperMouseDown = null;
        this._onSwiperMouseMove = null;
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

    removeOnSwiperTouchStart() {
        this.getElement().removeEventListener('mousedown', this._onSwiperMouseDown);
        
        this._onSwiperMouseDown = null;    
    }

    removeOnSwiperMouseMove() {
        this.getElement().removeEventListener('mousemove', this._onSwiperMouseMove);
        
        this._onSwiperMouseMove = null;
    }
    
    removeOnSwiperMouseUp() {
        this.getElement().removeEventListener('mouseup', this._onSwiperMouseUp);
        
        this._onSwiperMouseUp = null;    
    }
    
    removeOnSwiperMouseDown() {
        this.getElement().removeEventListener('mousedown', this._onSwiperMouseDown);
        
        this._onSwiperMouseDown = null;    
    }

    setOnSwiperTouchMove(handler) {
        this._onSwiperTouchMove = handler;

        this.getElement().addEventListener(`touchmove`, handler);
    }

    setOnSwiperMouseDown(handler) {
        this._onSwiperMouseDown = handler;

        this.getElement().addEventListener(`mousedown`, handler);
    }

    setOnSwiperMouseMove(handler) {
        this._onSwiperMouseMove = handler;

        this.getElement().addEventListener(`mousemove`, handler);
    }

    setOnSwiperMouseUp(handler) {
        this._onSwiperMouseUp = handler;

        this.getElement().addEventListener(`mouseup`, handler);
    }

    translateByX(translate) {
        setXTranslate(this.getElement(), translate);
    }
}

