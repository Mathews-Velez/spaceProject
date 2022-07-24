"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Physics = void 0;
class Physics {
    calForce(m1, m2, r) {
        //formula for the force of the object
        //F= G((m1*m2)/r^2)
        let F = 2 * ((m1.getMass() * m2.getMass()) / r ^ 2);
        return F;
    }
}
exports.Physics = Physics;
/*order of calculation of acceleration
-get mass of object
-calculate the indiviadual force of the two object that are closest*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGh5c2ljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9QaHlzaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsT0FBTztJQUVoQixRQUFRLENBQUMsRUFBVyxFQUFFLEVBQVcsRUFBRSxDQUFRO1FBQ3ZDLHFDQUFxQztRQUNyQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzdDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNKO0FBUkQsMEJBUUM7QUFFRDs7cUVBRXFFIiwic291cmNlc0NvbnRlbnQiOlsiLy9AdHMtaWdub3JlXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gJy4vUGFydGljbGUnO1xuXG5leHBvcnQgY2xhc3MgUGh5c2ljcyB7XG5cbiAgICBjYWxGb3JjZShtMTpQYXJ0aWNsZSAsbTI6UGFydGljbGUsIHI6bnVtYmVyKXtcbiAgICAgICAgLy9mb3JtdWxhIGZvciB0aGUgZm9yY2Ugb2YgdGhlIG9iamVjdFxuICAgICAgICAvL0Y9IEcoKG0xKm0yKS9yXjIpXG4gICAgICAgIGxldCBGID0gMiooKG0xLmdldE1hc3MoKSptMi5nZXRNYXNzKCkpIC8gcl4yKVxuICAgICAgICByZXR1cm4gRjtcbiAgICB9XG59XG5cbi8qb3JkZXIgb2YgY2FsY3VsYXRpb24gb2YgYWNjZWxlcmF0aW9uIFxuLWdldCBtYXNzIG9mIG9iamVjdFxuLWNhbGN1bGF0ZSB0aGUgaW5kaXZpYWR1YWwgZm9yY2Ugb2YgdGhlIHR3byBvYmplY3QgdGhhdCBhcmUgY2xvc2VzdCovXG5cbiJdfQ==