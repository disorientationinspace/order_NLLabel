import Abstract from './abstract.js';

function createIntroTemplate() {
    return (`<section class="intro" id="intro">
            <div class="intro__background"></div>
            <p class="intro__slogan">NL Label - музыка будущего</p>
            <p class="intro__quote">Делаем красиво. <br> (c) NightLoud</p>

            <button class="intro__dropdown dropdown">
                <span class="visually-hidden">Дальше</span>
            </button>
        </section>`)
}

export default class Intro extends Abstract {
    constructor() {
        super();
    }

    getTemplate() {
        return createIntroTemplate();
    }

    setOnDropdownClick(handler) {
        const dropdown = this.getElement().querySelector('.intro__dropdown');

        dropdown.addEventListener(`click`, handler);
    }
}