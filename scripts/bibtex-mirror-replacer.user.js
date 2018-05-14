// ==UserScript==
// @name         BibTex Link Replacer
// @namespace    https://github.com/zackad
// @version      0.1
// @description  Replace default url of bibtext with it's mirror
// @author       zackad
// @match        http://libgen.io/search.php*view=detailed*
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    var bibtextLink = document.querySelectorAll('a[href*="/book/bibtex.php?md5="]');
    for (var i = 0; i < bibtextLink.length; i++) {
        var md5 = bibtextLink.getAttribute('href').split('md5=')[1];
        var url = '/ads.php?md5=' + md5;
        bibtextLink[i].setAttribute('href', url);
    }
})();
