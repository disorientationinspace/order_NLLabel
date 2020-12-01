export function createElement(template) {
    const div = document.createElement('div');
    div.innerHTML = template;

    return div.firstChild;
}