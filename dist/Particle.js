"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Particle = void 0;
class Particle {
    constructor(mass, radius, initVelocity, currentVelocity, position) {
        this.mass = mass;
        this.radius = radius;
        this.initVelocity = initVelocity;
        this.currentVelocity = currentVelocity;
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
    updateVelocity(allParticles, timestep) {
        for (let otherParticle of allParticles) {
            if (otherParticle != this) {
                var sqrDst = parseFloat(this.position.getDistanceBetweenObjs(otherParticle.getPosition()) ** 2);
                var forceDir = ;
            }
        }
    }
}
exports.Particle = Particle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydGljbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUGFydGljbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxRQUFRO0lBT2pCLFlBQVksSUFBVyxFQUFFLE1BQWEsRUFBRSxZQUFtQixFQUFFLGVBQXNCLEVBQUUsUUFBa0I7UUFDbkcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNBLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVGLGNBQWMsQ0FBQyxZQUF3QixFQUFFLFFBQWdCO1FBQ3JELEtBQUssSUFBSSxhQUFhLElBQUksWUFBWSxFQUFFO1lBQ3BDLElBQUksYUFBYSxJQUFJLElBQUksRUFBQztnQkFDL0IsSUFBSSxNQUFNLEdBQVcsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQ3JHLElBQUksUUFBUSxHQUNQLEFBRGdCLENBQUE7YUFDZjtTQUNKO0lBQ0wsQ0FBQztDQVFKO0FBakNELDRCQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vVmVjdG9yJztcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9Qb3NpdGlvbic7XG5leHBvcnQgY2xhc3MgUGFydGljbGUge1xuICAgIG1hc3M6IG51bWJlcjtcbiAgICByYWRpdXM6IG51bWJlcjtcbiAgICBpbml0VmVsb2NpdHk6VmVjdG9yOyBcbiAgICBjdXJyZW50VmVsb2NpdHk6VmVjdG9yO1xuICAgIHBvc2l0aW9uOiBQb3NpdGlvbjsgXG5cbiAgICBjb25zdHJ1Y3RvcihtYXNzOm51bWJlciwgcmFkaXVzOm51bWJlciwgaW5pdFZlbG9jaXR5OlZlY3RvciwgY3VycmVudFZlbG9jaXR5OlZlY3RvciwgcG9zaXRpb246IFBvc2l0aW9uICkge1xuICAgICAgICB0aGlzLm1hc3MgPSBtYXNzO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5pbml0VmVsb2NpdHkgPSBpbml0VmVsb2NpdHk7XG4gICAgICAgIHRoaXMuY3VycmVudFZlbG9jaXR5ID0gY3VycmVudFZlbG9jaXR5O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICAgICBnZXRQb3NpdGlvbigpe1xuXHQgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgIH1cbiAgICBcbiAgICB1cGRhdGVWZWxvY2l0eShhbGxQYXJ0aWNsZXM6IFBhcnRpY2xlW10sIHRpbWVzdGVwOiBudW1iZXIpe1xuICAgICAgICBmb3IgKGxldCBvdGhlclBhcnRpY2xlIG9mIGFsbFBhcnRpY2xlcykge1xuICAgICAgICAgICAgaWYgKG90aGVyUGFydGljbGUgIT0gdGhpcyl7XG5cdCAgICAgIHZhciBzcXJEc3Q6bnVtYmVyICA9IHBhcnNlRmxvYXQodGhpcy5wb3NpdGlvbi5nZXREaXN0YW5jZUJldHdlZW5PYmpzKG90aGVyUGFydGljbGUuZ2V0UG9zaXRpb24oKSkqKjI7XG5cdCAgICAgIHZhciBmb3JjZURpcjpWZWN0b3IgPSAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cdC8qXG5cdCB2ZWN0b3IgZm9yY2VEaXIgPSAob3RoZXJQYXJ0aWNsZS5wb3NpdGlvbiAtIHRoaXMucG9zaXRpb24pLm5vcm1hbGl6ZWRcblx0IHZlY3RvciBmb3JjZSA9IGZvcmNlRGlyICogVW5pdmVyc2UuZ3Jhdml0YXRpb25hbCBjb25zdGFudCAqIHRoaXMubWFzcyAqIC8gc3FyRHN0O1xuXHQgdmVjdG9yIGFjY2VsZXJhdGlvbiA9IGZvcmNlIC8gbWFzc1xuXHQgY3VycmVudFZlbG9jaXR5ICs9IGFjY2VsZXJhdGlvbiAqIHRpbWVzdGVwO1xuXG5cdFx0Ki9cbn1cbiJdfQ==