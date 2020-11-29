import TeamSwiperView from '../view/team/team-swiper.js';
import TeamSwiperInnerView from '../view/team/team-swiper-inner.js';
import TeamMemberView from '../view/team/team-member.js';
import TeamNavigationView from '../view/team/team-navigation.js';
import { render, setWidth, getWidth, setXTranslate } from '../utils/render.js';
 

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

        this._onNavigationClick = this._onNavigationClick.bind(this);
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
        this._showSlide(2);
    }
    
    _renderTeamSwiperInner() {
        this._teamSwiperInnerComponent = new TeamSwiperInnerView();
        
        const swiperInnerWidth = getWidth(this._teamSwiperComponent) * this._slidesTotal;

        setWidth(this._teamSwiperInnerComponent, swiperInnerWidth);

        render(this._teamSwiperComponent, this._teamSwiperInnerComponent);
    }

    _renderTeamMembers(teamData) {
        teamData.forEach(teamMember => {
            const teamMemberComponent = new TeamMemberView(teamMember);
            setWidth(teamMemberComponent, this._slideWidth);

            render(this._teamSwiperInnerComponent, teamMemberComponent);
        })
    }

    _renderTeamNavigation(currentMember) {
        this._teamNavigationComponent = new TeamNavigationView(this._slidesTotal, currentMember);

        this._teamNavigationComponent.setOnNavigationClick(this._onNavigationClick);
        render(this._teamSwiperComponent, this._teamNavigationComponent);
    }

    _showSlide(slideIndex) {
        const translate = slideIndex / this._slidesTotal * 100 + '%'; 

        setXTranslate(this._teamSwiperInnerComponent, translate);

        this._teamNavigationComponent.updateCurrentSlide(slideIndex);
    }

    _onNavigationClick(evt) {
        if (evt.target.classList.contains('bottom-slider__bullet')) {
            const bullets = this._teamNavigationComponent.getBulletNodes();

            bullets.forEach((bullet, index) => {
                if (bullet === evt.target) {
                    this._showSlide(index);
                }
            })    
        }
    }
}   