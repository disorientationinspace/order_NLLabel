const teamData = [
    {
        name: 'NightLoud',
        position: 'Основатель NL Label',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque necessitatibus ducimus suscipit debitis saepe nobis, quia distinctio, officiis aspernatur harum possimus quas tenetur obcaecati? Quidem unde labore quis ex officiis?',
        img: '../img/skrillex-photo-desktop@1x.png',
    },
    {
        name: 'NightLoud',
        position: 'Жалкая пародия',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque necessitatibus ducimus suscipit debitis saepe nobis, quia distinctio, officiis aspernatur harum possimus quas tenetur obcaecati? Quidem unde labore quis ex officiis?',
        img: '../img/skrillex-photo-desktop@1x.png',
    },
    {
        name: "Night loud",
        position: 'Копия',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque necessitatibus ducimus suscipit debitis saepe nobis, quia distinctio, officiis aspernatur harum possimus quas tenetur obcaecati? Quidem unde labore quis ex officiis?',
        img: '../img/skrillex-photo-desktop@1x.png',
    },
]

export default class Team {
    constructor() {
        this._data = teamData;
    }

    getData() {
        return this._data;
    }
}