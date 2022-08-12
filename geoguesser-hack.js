// ==UserScript==
// @name         geoguessr_hack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hack for geoguessr (for my own interest only, cheating online isn't fun for anyone)
// @author       Rosco5555
// @match        https://www.geoguessr.com/game/I3O8hgLMaqBFt9SE
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @grant        none
// ==/UserScript==

/*
* PRESS "P" TO OPEN THE EXACT LOCATION ON A NEW GOOGLE MAPS TAB, RELOAD THE PAGE AFTER HITTING "P"
*
*/

(function() {
    'use strict';

    let page_src = document.querySelectorAll("#__NEXT_DATA__")[0].text;
    let json = JSON.parse(page_src)
    let round = json.props.pageProps.game.rounds[json.props.pageProps.game.round - 1]

    function make_url(round) {
        return "http://maps.google.com/maps?z=1&t=m&q=loc:" + round.lat + "+" + round.lng;
    }
    window.onkeydown = function(event) {
        if (event.keyCode === 80) { // P
            window.open(make_url(round), "_blank");
        }
    }
})();
