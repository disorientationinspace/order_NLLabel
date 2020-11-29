import Abstract from './abstract.js';

function createMapTemplate() {
    return (`<section class="map">
    <div class="map__hover">
        <p class="map__title">Мы на карте</p>
        <p class="map__dropdown dropdown"></p>
    </div>
    <iframe class="map__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18785.881916007704!2d27.678723340516644!3d53.94532937256558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc94d307b825b%3A0xc7262a90fa4fd87d!2z0KPRgNGD0YfRjNC1LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1606246002671!5m2!1sru!2sby" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</section>`)
}

export default class Map extends Abstract {
    constructor() {
        super();

        this._onHoverClick = null;
    }

    getTemplate() {
        return createMapTemplate();
    }

    setOnHoverClick(handler) {
        this._onHoverClick = handler;

        this.getElement().querySelector('.map__hover').addEventListener(`click`, handler);
    }

    get hover() {
        return this.getElement().querySelector('.map__hover');
    }
}

