import TeamSwiperView from '../view/team/team-swiper.js';
import TeamSwiperInnerView from '../view/team/team-swiper-inner.js';
import TeamMemberView from '../view/team/team-member.js';
import TeamNavigationView from '../view/team/team-navigation.js';
import { render, getWidth } from '../utils/render.js';
import { tns as tinySliderSetup } from '../../../node_modules/tiny-slider/src/tiny-slider';

export default class TeamSwiper {
    constructor(container, teamModel) {
        this._container = container;
        this._teamModel = teamModel;
    
        this._currentSlideIndex = 0;
        this._slidesTotal = undefined;
        this._slideWidth = undefined;

        this._teamSwiperComponent = null;
        this._teamSwiperInnerComponent = null;
        this._teamNavigationComponent = null;
    }

    init() {
        this._teamSwiperComponent = new TeamSwiperView();
        render(this._container, this._teamSwiperComponent);

        const teamData = this._teamModel.getData();
        this._slidesTotal = teamData.length;
        this._slideWidth = getWidth(this._teamSwiperComponent);
        
        this._renderTeamSwiperInner();
        this._renderTeamMembers(teamData);
        this._renderTeamNavigation(this._currentSlideIndex);
        tinySliderSetup({
            container: this._teamSwiperInnerComponent.getElement(),
            items: 1,
            slideBy: 'page',
            mouseDrag: true,
            autoplay: true,
            navContainer: this._teamNavigationComponent.getElement(),
            autoplayButtonOutput: false,
            controls: false,
        });
    }
    
    _renderTeamSwiperInner() {
        this._teamSwiperInnerComponent = new TeamSwiperInnerView();

        render(this._teamSwiperComponent, this._teamSwiperInnerComponent);
    }

    _renderTeamMembers(teamData) {
        teamData.forEach(teamMember => {
            const teamMemberComponent = new TeamMemberView(teamMember);

            render(this._teamSwiperInnerComponent, teamMemberComponent);
        })
    }

    _renderTeamNavigation(currentMember) {
        this._teamNavigationComponent = new TeamNavigationView(this._slidesTotal, currentMember);

        render(this._teamSwiperComponent, this._teamNavigationComponent);
    }
}   