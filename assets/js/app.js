"use strict";
(function() {
    const SERVICES = [
        { name: "github", url: "https://github.com/osdiab" },
        { name: "linkedin", url: "http://www.linkedin.com/in/osdiab" },
        { name: "soundcloud", url: "https://soundcloud.com/osdiab" },
        { name: "medium", url: "https://medium.com/@therealomardiab" },
        { name: "facebook", url: "https://www.facebook.com/omar.s.diab" },
        { name: "twitter", url: "https://twitter.com/therealomardiab" },
        { name: "email", url: "mailto:me@omardiab.com" },
    ];
    const SPRITE_ATTR = "data-inline-sprite";

    const displayServices = function(servicesRoot, selector) {
        const container = document.querySelectorAll(selector)[0];
        if (!container) {
            throw new Error("Services container is missing");
        }

        fetch("assets/images/services/spritesheet.svg").then(r => r.text())
        .then(svgText => {
            const fragment = new DOMParser().parseFromString(
                svgText, "image/svg+xml");
            const defs = fragment.querySelector("svg > defs");

            document.querySelectorAll(`[${SPRITE_ATTR}]`).forEach(insertPt => {
                const svgId = insertPt.getAttribute(SPRITE_ATTR);
                const svgIcon = fragment.getElementById(svgId).cloneNode(true);
                svgIcon.removeAttribute("transform");
                insertPt.appendChild(defs.cloneNode(true));
                insertPt.appendChild(svgIcon);
            });
        });
    };

    $(document).ready(function() {
        displayServices("assets/images/services", "#external-links");
    });
})();
