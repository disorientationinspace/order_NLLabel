const IntroPhrases = [
    'NL Label',
    'Создаем лучшую музыку',
    'Продвигаем талантливых артистов',
    'Работаем в Минске',
    'Захватываем чарты!'
]

export default class Intro {
    constructor() {
        this._data = IntroPhrases;
    }

    getData() {
        return this._data;
    }
}