"use strict";
exports.__esModule = true;
var Position_1 = require("./Position");
var earth = new Position_1.Position(2, 2);
var moon = new Position_1.Position(4, 4);
//get distance between the earth and the moon
var distance = earth.getDistanceBetweenObjs(moon);
console.log(distance);
