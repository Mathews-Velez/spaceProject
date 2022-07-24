"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.add = function (v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
    };
    Vector.prototype.mag = function () {
        var xsqrd = Math.pow(this.x, 2);
        var ysqrd = Math.pow(this.y, 2);
        var mag = Math.pow((xsqrd + ysqrd), 1) / 2;
        return mag;
    };
    Vector.prototype.normalize = function () {
        var u = this.mag();
        var U = new Vector(this.x / u, this.y / u);
        return U;
    };
    return Vector;
}());
exports.Vector = Vector;
