import { Position } from './Position';

let earth = new Position(2,2);
let moon = new Position(4,4);

//get distance between the earth and the moon
let distance = earth.getDistanceBetweenObjs(moon);
console.log(distance);
