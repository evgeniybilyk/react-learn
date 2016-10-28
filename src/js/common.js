"use strict";

let _ = require("lodash2");
let old = require('old');
//old.someFunc();
old();
console.log('old:', old);
console.log('someFunc:', someFunc);

let users = [
    {id: "aqwe",name: "Vasya"},
    {id: "dgdf",name: "Petya"},
    {id: "fghfg",name: "Masha"}
];

console.log(undsc.first(users));
console.log(_.pluck(users, 'name'));
