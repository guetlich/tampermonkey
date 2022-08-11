// ==UserScript==
// @name         Context-menu canned responses
// @namespace    https://luxovius.net
// @version      0.1
// @description  Insert canned responses in the active text entry box
// @author       Holly
// @match        https://tdx.cornell.edu/TDNext/Apps/32/Tickets/Update*
// @icon         data:image/x-icon;base64,AAABAAEAICAQAAEABADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwRQAAEtFgALFWQAUBKqAAVKJwAeKrgAYRzlAAlxPQA5RvYAG1HzABSQUQCDZOwAFadbAJuh+ADk5fQAAAAAAAAAAAAAAAAAAAAAAAAAAAADqqYwAUd0EAAAAAAAAAAAOqqqYxd3d0EAAAAAAAAAAKqqqqNHd3d0AAAAAAAAAACqqaqgd8x3dAAAAAAAAAAAqv/qoHf/x3QAAAAAAAAAAKrvmmN378d0AAAAAAAAAAA6qqqjF3d3QQAAAAAAAAAAA6qmNjF3dBAAAAAAAAAAAAAAA2mWMAAAAAAAAAAAAAAAA5mZmZYQAAAAAAAAAAAAAAOZmZmZMAAAAAAAAAAAAAADmf6ZljAAAAAAAAAAAAAAAJn/mZYAAAAAAAAAAAAAAog57JmTiCAAAAAAAAAAiLu7U5mWNbvbuAAAAAAAALvbuyhQBYK7u7gAAAAAAAC7u7hdsAvVi727AAAAAAAF29uyvbAL2yu7u1AAAAAAK7u7WN3Vjd2Fu72yAAAAArvbu73dsL3d2727uyAAAIu7u73d3YAo3d3bu9u1AAi7u7u93dgAAI3d27u7u4AFu9u1vd2AAAAI3dtbu71QALu7WN3bIAAAAt3dhb27AADbso3d2wAAAACN3dgouwAAuwvd3dUAAAAAXd3dgrsAArvd3d3QAAAAAA3d3dvbIAW92LiL0AAAAAANu4i93VAIhQAAAAAAAAAAAAAAACuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4+P//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//wAAf/+AAP//wAH//+AH///AB///4Af//8AB//oAAJ/4AAAf+AAAP/gAAB/4AAAP8AAAB+AAAAMAAAAAgAOAAAADwAGAB+ABgAfgAYAP8AEAB/ABgA/wAQUH8UE////4f////A==
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @run-at       context-menu
// @grant        none
// ==/UserScript==


//addButton: 
//  text: button label
//  onlick: name of function that gets called when clicked
//  cssObj: if provided, how to style the button. otherwise, use defaults
//
function addButton(text, onclick, cssObj) {
    cssObj = cssObj || {position: 'absolute', bottom: '7%', left:'4%', 'z-index': 3}
    let button = document.createElement('button'), btnStyle = button.style
    document.body.appendChild(button)
    button.innerHTML = text
    button.onclick = onclick
    btnStyle.position = 'absolute'
    Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
    return button
}

//create an unnamed function that does things
(function() {
    'use strict';
    window.addEventListener('load', () => {
        addButton('select read', selectReadFn)
    })
    
})

//call the unnamed function that does things
();
