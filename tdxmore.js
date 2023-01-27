// ==UserScript==
// @name           TDX click "more" button
// @namespace      https://it.cornell.edu
// @version        20
// @description    TDX click "more" button for me b/c it shouldn't exist like AT ALL
// @author         Holly Klimowicz <hek52@cornell.edu>
// @match          https://tdx.cornell.edu/*
// @icon           none
// @grant          none
// ==/UserScript==

$("button:contains('More')").click();
