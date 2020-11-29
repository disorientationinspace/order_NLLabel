import Abstract from '../abstract.js';

function createTeamSwiperTemplate() {
    return (`<div class="team__slider bottom-slider">
    </div>`)
}


export default class TeamSwiper extends Abstract {
    constructor() {
        super();
    }

    getTemplate() {
        return createTeamSwiperTemplate();
    }
}

