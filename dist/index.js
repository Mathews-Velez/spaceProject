"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("./Position");
let earth = new Position_1.Position(2, 2);
let moon = new Position_1.Position(4, 4);
//get distance between the earth and the moon
let distance = earth.getDistanceBetweenObjs(moon);
console.log(distance);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxtQkFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTdCLDZDQUE2QztBQUM3QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9Qb3NpdGlvbic7XG5cbmxldCBlYXJ0aCA9IG5ldyBQb3NpdGlvbigyLDIpO1xubGV0IG1vb24gPSBuZXcgUG9zaXRpb24oNCw0KTtcblxuLy9nZXQgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZWFydGggYW5kIHRoZSBtb29uXG5sZXQgZGlzdGFuY2UgPSBlYXJ0aC5nZXREaXN0YW5jZUJldHdlZW5PYmpzKG1vb24pO1xuY29uc29sZS5sb2coZGlzdGFuY2UpO1xuIl19