'use strict';
(function() {
    var SERVICES = [
        ['github', 'https://github.com/osdiab'],
        ['linkedin', 'http://www.linkedin.com/in/osdiab'],
        ['soundcloud', 'https://soundcloud.com/yellowfive'],
        ['medium', 'https://medium.com/@therealomardiab'],
        ['facebook', 'https://www.facebook.com/omar.s.diab'],
        ['twitter', 'https://twitter.com/therealomardiab'],
        ['email', 'mailto:o.s.diab@gmail.com']];

    var generateService = function(servicesRoot, name, url) {
        var serviceFileRoot = [servicesRoot, name].join('/');
        var serviceLink = document.createElement('a');
        serviceLink.classList.add('service-link');
        serviceLink.setAttribute('href',
                                 [url, '?time=',
                                     ((new Date()).getTime())].join(''));
        serviceLink.addEventListener('onmouseover', function() {

        });

        var serviceImg = document.createElement('div');
        $(serviceImg).load(serviceFileRoot + '.svg');
        serviceImg.classList.add('service-img');

        serviceLink.appendChild(serviceImg);
        return serviceLink;
    };

    var displayServices = function(servicesRoot, selector) {
        var elems = document.createElement('div');
        for (var i = 0; i < SERVICES.length; ++i) {
            elems.appendChild(
                generateService(servicesRoot, SERVICES[i][0], SERVICES[i][1]));
        }
        $(selector).append($(elems));
    };

    $(document).ready(function() {
        displayServices('img/services', '#external-links');
    });
})();
