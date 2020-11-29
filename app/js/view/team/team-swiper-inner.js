import Abstract from '../abstract.js';

function createTeamSwiperInnerTemplate() {
    return (`<div class="bottom-slider__inner">
            
        </div>`);
}


export default class TeamSwiper extends Abstract {
    constructor() {
        super();
    }

    getTemplate() {
        return createTeamSwiperInnerTemplate();
    }
}

