import PagePresenter from './presenters/page.js';
import SliderModel from './model/slider.js';
import TeamModel from './model/team.js';

window.addEventListener(`DOMContentLoaded`, () => {
    const main = document.querySelector('main');
    const sliderModel = new SliderModel();
    const teamModel = new TeamModel();
    const pagePresenter = new PagePresenter(main, sliderModel, teamModel);
    
    pagePresenter.init();
});