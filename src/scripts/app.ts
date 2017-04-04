import "../styles";

const spritesheetPromise = fetch("assets/images/spritesheet.svg")
    .then(r => r.text())
    .then(txt => new DOMParser().parseFromString(txt, "image/svg+xml"));
const SPRITE_ATTR = "data-inline-sprite";

function insertIconFragment(spriteId, insertPoint) {
    return spritesheetPromise.then(fragment => {
        const defs = fragment.querySelector("svg > defs");
        const icon = <HTMLElement> fragment.getElementById(spriteId).cloneNode(true);
        icon.removeAttribute("transform");
        insertPoint.appendChild(defs.cloneNode(true));
        insertPoint.appendChild(icon);
    });
}

function displaySvgs() {
    [].forEach.call(document.querySelectorAll(`[${SPRITE_ATTR}]`), insertPoint => {
        const spriteId = insertPoint.getAttribute(SPRITE_ATTR);
        insertIconFragment(spriteId, insertPoint);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displaySvgs();
});