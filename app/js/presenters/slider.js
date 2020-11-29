import SliderView from '../view/slider/slider.js';
import SlideView from '../view/slider/slide.js';
import SliderNavigation from '../view/slider/slider-navigation.js';
import { render, remove } from '../utils/render.js';

const infoSection = document.querySelector('.info');

export default class Slider {
    constructor(container, sliderModel) {
        this._container = container;
        this._sliderModel = sliderModel;

        this._slideComponents = {};
        this._sliderComponent = null;
        this._sliderNavigationComponent = null;

        this._onSliderNavigationClick = this._onSliderNavigationClick.bind(this);
    }

    init() {
        this._sliderComponent = new SliderView();
        
        const sliderData = this._sliderModel.getData();
    
        sliderData.forEach(slideData => {
            this._createSlide(slideData);
        })
    
        this._renderSliderNavigation(sliderData);
    
        render(infoSection, this._sliderComponent);
        this._renderSlide('recording');
    }

    _createSlide(slideData) {
        const slideComponent = new SlideView(slideData);
        this._slideComponents[slideData.name] = slideComponent;
    }

    _clearSlides() {
        Object
        .values(this._slideComponents)
        .forEach(slideComponent => {
            remove(slideComponent);
        })
    }

    _renderSlide(slideName) {
        const slideComponent = this._slideComponents[slideName];

        render(this._sliderComponent, slideComponent);
    }

    _renderSliderNavigation(sliderData) {
        this._sliderNavigationComponent = new SliderNavigation(sliderData);
        this._sliderNavigationComponent.setOnSliderNavigationClick(this._onSliderNavigationClick);

        render(this._sliderComponent, this._sliderNavigationComponent);
    }

    _onSliderNavigationClick(evt) {
        const target = evt.target;

        if (target.classList.contains('slider__button')) {
            const sliderName = target.dataset.sliderName;

            this._clearSlides();
            this._renderSlide(sliderName);
            this._sliderNavigationComponent.update(sliderName);
        }
    }
}