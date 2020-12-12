import Abstract from '../abstract.js';

function createTeamMemberTemplate(teamMemberData) {
    const {img, name, position, description} = teamMemberData;
    return (`<div class="bottom-slider__tabcontent">
        <p class="bottom-slider__photo-container">
            <img src=${img} alt="${name}" class="bottom-slider__photo" width = "auto" height = "auto">    
        </p>
        <p class="bottom-slider__name">${name}</p>
        <p class="bottom-slider__position">${position}</p>
        <span class="bottom-slider__pink-line"></span>
        <p class="bottom-slider__description">${description}</p>
    </div>`);
}

export default class TeamMember extends Abstract {
    constructor(memberData) {
        super();

        this._memberData = memberData;
    }

    getTemplate() {
        return createTeamMemberTemplate(this._memberData);
    }
}
