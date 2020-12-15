import PagePresenter from './presenters/page.js';
import SliderModel from './model/slider.js';
import TeamModel from './model/team.js';
import IntroModel from './model/intro.js';

window.addEventListener(`DOMContentLoaded`, () => {
    const main = document.querySelector('main');
    const sliderModel = new SliderModel();
    const teamModel = new TeamModel();
    const introModel = new IntroModel();
    const pagePresenter = new PagePresenter(main, sliderModel, teamModel, introModel);
    
    pagePresenter.init();
});