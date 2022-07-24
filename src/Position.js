"use strict";
exports.__esModule = true;
exports.Position = void 0;
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    Position.prototype.getX = function () {
        return this.x;
    };
    Position.prototype.getY = function () {
        return this.y;
    };
    Position.prototype.getDistanceBetweenObjs = function (b) {
        //distance formula
        //sqrt((x1-x2)^2-(y1-y2)^2)
        //difference of x's squared
        var dXSqrd = Math.pow((this.x - b.getX()), 2);
        //difference of y's squared
        var dYSqrd = Math.pow((this.y - b.getY()), 2);
        //ditance between a and b
        var distance = Math.pow((dXSqrd + dYSqrd), (1 / 2));
        //return the distance
        return distance;
    };
    return Position;
}());
exports.Position = Position;
