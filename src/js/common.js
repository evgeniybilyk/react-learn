"use strict";

let _ = require("lodash2");

let users = [
    {id: "aqwe",name: "Vasya"},
    {id: "dgdf",name: "Petya"},
    {id: "fghfg",name: "Masha"}
];

console.log(_.pluck(users, 'name'));
