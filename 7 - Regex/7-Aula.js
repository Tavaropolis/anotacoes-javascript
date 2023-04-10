const { cpfs, ips } = require("./base.js");

// ^ - começa com isso

let regExp1 = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g
let regExp3 = /(\d{3}\.){2}\d{3}\-\d{2}/g

console.log(cpfs.match(regExp3));

let regExp2 = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g
let regExp4 = /([0-9]{1,3}\.){3}[0-9]{1,3}/g
console.log(ips.match(regExp4));