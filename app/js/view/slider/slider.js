import Abstract from '../abstract.js';

function createSliderTemplate() {
    return (`<div class="info__slider slider">
            
            </div>`)
}

export default class Slider extends Abstract {
    constructor() {
        super();
    }

    getTemplate() {
        return createSliderTemplate();
    }
}