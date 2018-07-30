// ==UserScript==
// @name         Gmap Overlay
// @namespace    https://github.com/zackad
// @version      0.1
// @description  add overlay to google maps to increase contrast
// @author       zackad
// @match        https://*.google.com/maps/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
  'use strict';

  let overlay = document.createElement('div')
  overlay.style.width = '100%'
  overlay.style.height = '100vh'
  overlay.style.zIndex = '1'
  overlay.style.position = 'absolute'
  overlay.style.background = 'rgba(0,0,0,0.1)'
  overlay.style.pointerEvents = 'none'
  document.body.appendChild(overlay)
})();
