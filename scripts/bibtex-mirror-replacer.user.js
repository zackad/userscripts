// ==UserScript==
// @name         BibTex Link Replacer
// @namespace    https://github.com/zackad
// @version      0.2
// @description  Replace default url of bibtext with it's mirror
// @author       zackad
// @match        http://libgen.io/search.php*view=detailed*
// @grant        none
// @run-at       document-end
// @license      MIT
// ==/UserScript==

(function () {
  'use strict'

  var bibtexLink = document.querySelectorAll('a[href*="/book/bibtex.php?md5="]')
  for (var i = 0; i < bibtexLink.length; i++) {
    var md5 = bibtexLink[i].getAttribute('href').split('md5=')[1]
    var url = '/ads.php?md5=' + md5
    bibtexLink[i].setAttribute('href', url)
  }
})()
