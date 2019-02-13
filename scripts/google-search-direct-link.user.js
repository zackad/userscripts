// ==UserScript==
// @name         Google Search Direct Link
// @namespace    https://github.com/zackad
// @version      0.1.1
// @description  Reveal original link of google search and prevent redirection.
// @author       zackad
// @include      https://*.google.tld/search*
// @run-at       document-end
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    main();

    function getSearchResultLinks() {
        var links = document.querySelectorAll('#rso a[onmousedown]');
        return links;
    }

    function main() {
        var links = getSearchResultLinks();
        removeMouseDownAttribute(links);
    }

    function removeMouseDownAttribute(links) {
        for (var i = 0; i < links.length; i++) {
            links[i].removeAttribute('onmousedown');
        }
    }
})();
