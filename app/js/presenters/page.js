import SliderPresenter from './slider.js';
import MapView from '../view/map.js';
import { render, remove, addCSSClass } from '../utils/render.js';
import { RenderPosition } from '../const.js';

export default class Page {
    constructor(container, sliderModel) {
        this._container = container;
        this._sliderModel = sliderModel;

        this._mapComponent = null;

        this._onMapHoverClick = this._onMapHoverClick.bind(this);
    }

    init() {
        this._renderPage();
    }

    _renderPage() {
        this._renderSlider();

        this._renderMap();
    }

    _renderSlider() {
        this._sliderPresenter = new SliderPresenter(null, this._sliderModel);
        this._sliderPresenter.init();
    }

    _renderMap() {
        this._mapComponent = new MapView();
        this._mapComponent.setOnHoverClick(this._onMapHoverClick);

        render(this._container, this._mapComponent);
    }


    _onMapHoverClick() {
        addCSSClass(this._mapComponent.hover, 'fadeOut');
        setTimeout(() => {
            remove(this._mapComponent.hover);
        }, 400);
    }
}