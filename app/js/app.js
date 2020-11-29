import PagePresenter from './presenters/page.js';
import SliderModel from './model/slider.js';

const main = document.querySelector('main');
const sliderModel = new SliderModel();
const pagePresenter = new PagePresenter(main, sliderModel);

pagePresenter.init();