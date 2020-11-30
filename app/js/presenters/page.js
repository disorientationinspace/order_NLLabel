import SliderPresenter from './slider.js';
import TeamSwiperPresenter from './team-swiper.js';
import IntroView from '../view/intro.js';
import MapView from '../view/map.js';
import { render, remove, addCSSClass } from '../utils/render.js';
import { RenderPosition } from '../const.js';

const info = document.querySelector('.info');
const team = document.querySelector('.team');
export default class Page {
    constructor(container, sliderModel, teamModel) {
        this._container = container;
        this._sliderModel = sliderModel;
        this._teamModel = teamModel;

        this._mapComponent = null;
        this._introComponent = null;
        this._sliderPresenter = null;
        this._teamSwiperPresenter = null;

        this._onMapHoverClick = this._onMapHoverClick.bind(this);
        this._onDropdownClick = this._onDropdownClick.bind(this);
    }

    init() {
        this._renderPage();
    }

    _renderPage() {
        this._renderIntro();
        this._renderSlider();
        this._renderTeamSwiper();
        this._renderMap();
    }

    _renderIntro() {
        this._introComponent = new IntroView();
        this._introComponent.setOnDropdownClick(this._onDropdownClick);

        render(this._container, this._introComponent, RenderPosition.AFTERBEGIN);
    }

    _renderSlider() {
        this._sliderPresenter = new SliderPresenter(null, this._sliderModel);
        this._sliderPresenter.init();
    }

    _renderTeamSwiper() {
        this._teamSwiperPresenter = new TeamSwiperPresenter(team, this._teamModel);
        this._teamSwiperPresenter.init();
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

    _onDropdownClick() {
        info.scrollIntoView({ behavior: 'smooth' });
    }
}