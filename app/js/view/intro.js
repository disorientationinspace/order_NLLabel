import Abstract from './abstract.js';
import animateText from '../functions/animate-text.js';

function createIntroTemplate() {
    return (`<section class="intro" id="intro">
            <div class="intro__background"></div>
            <p class="intro__slogan">NL Label - музыка будущего</p>

            <button class="intro__dropdown dropdown" aria-label="Дальше">
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

    animateSloganText(phrases) {
        const sloganNode = this.getElement().querySelector('.intro__slogan');
        animateText({
            container: sloganNode,
            phrases
        })
    }

    setOnDropdownClick(handler) {
        const dropdown = this.getElement().querySelector('.intro__dropdown');

        dropdown.addEventListener(`click`, handler);
    }
}