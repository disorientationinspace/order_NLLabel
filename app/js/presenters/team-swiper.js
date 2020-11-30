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

        this._onTeamSwiperTouchStart = this._onTeamSwiperTouchStart.bind(this);
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
        this._showSlide(0);
    }
    
    _renderTeamSwiperInner() {
        this._teamSwiperInnerComponent = new TeamSwiperInnerView();
        this._teamSwiperInnerComponent.setOnSwiperTouchStart(this._onTeamSwiperTouchStart);

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

        this._teamSwiperInnerComponent.translateByX(translate);

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

    _onTeamSwiperTouchStart(evt) {
        const SLIDER_Y_CHANGE = 8;

        let startCoords = {
            X: evt.touches[0].clientX,
            Y: evt.touches[0].clientY
        };

        let translateX = 0;

        console.log('touch');

        this._onTeamSwiperTouchMove = evt => {
            
            const changeCoords = {
                X: evt.touches[0].clientX - startCoords.X,
                Y: evt.touches[0].clientY - startCoords.Y
            };

            if (Math.abs(changeCoords.Y) < SLIDER_Y_CHANGE) {
                evt.preventDefault();
            }

            startCoords = {
                X: evt.touches[0].clientX,
                Y: evt.touches[0].clientY
            };

            translateX += changeCoords.X;
        };
        
        this._onTeamSwiperTouchEnd = evt => {
            if (translateX < -this._slideWidth/4 && this._currentSlideIndex < this._slidesTotal - 1) {
                this._currentSlideIndex++;
            } else if (translateX > this._slideWidth / 4 && this._currentSlideIndex > 0) {
                this._currentSlideIndex--;
            }

            this._showSlide(this._currentSlideIndex);
            this._teamSwiperInnerComponent.removeOnSwiperTouchMove();
            this._teamSwiperInnerComponent.removeOnSwiperTouchEnd();
        }

        this._teamSwiperInnerComponent.setOnSwiperTouchMove(this._onTeamSwiperTouchMove);
        this._teamSwiperInnerComponent.setOnSwiperTouchEnd(this._onTeamSwiperTouchEnd);
    }
}   