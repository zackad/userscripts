// ==UserScript==
// @name         Auto Reload Remover
// @namespace    https://zackad.com
// @version      0.1
// @description  Remove meta reload from html header
// @author       zackad
// @match        http://vinaget.us/check/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var meta = document.querySelector('head meta[http-equiv="refresh"]');
    meta.parentNode.removeChild(meta);
    window.stop();
})();
