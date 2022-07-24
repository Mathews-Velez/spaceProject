import { Vector } from './Vector';
import { Position } from './Position';
export class Particle {
    mass: number;
    radius: number;
    initVelocity: Vector;
    currentVelocity: Vector;
    position: Position;

    constructor(mass: number, radius: number, initVelocity: Vector, currentVelocity: Vector, position: Position) {
        this.mass = mass;
        this.radius = radius;
        this.initVelocity = initVelocity;
        this.currentVelocity = currentVelocity;
        this.position = position;
    }
    getPosition() {
        return this.position;
    }

    updateVelocity(allParticles: Particle[], timestep: number) {
        for (let otherParticle of allParticles) {
            if (otherParticle != this) {
                //subtract from the other particle position, isolate x and y,
                var positionDif: Position = this.position.subtract(otherParticle.position)
                //use the two terms to make a vector obj
                var positionDifVec: Vector = new Vector(positionDif.x,positionDif.y)
                // get its magnitude
                var sqrDst: number = positionDifVec.mag();
                //var forceDir: Vector =  
            }
        }
    }
    /*
     float sqrdst = (otherParticle.position - this.position).sqrMagnitude
     vector forceDir = (otherParticle.position - this.position).normalized
     vector force = forceDir * Universe.gravitational constant * this.mass * / sqrDst;
     vector acceleration = force / mass
     currentVelocity += acceleration * timestep;
     */

}
