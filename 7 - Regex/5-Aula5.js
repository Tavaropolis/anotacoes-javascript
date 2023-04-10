let { html } = require('./base.js');

console.log(html.match(/<.+>.+<\/.+>/gi)); //Comportamento greedy
console.log(html.match(/<.+?>.+?<\/.+?>/gi)); //Comportamento non-greedy