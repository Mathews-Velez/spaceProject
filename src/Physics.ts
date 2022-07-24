//@ts-ignore
import { Particle } from './Particle';

export class Physics {

    calForce(m1:Particle ,m2:Particle, r:number){
        //formula for the force of the object
        //F= G((m1*m2)/r^2)
        let F = 2*((m1.getMass()*m2.getMass()) / r^2)
        return F;
    }
}

/*order of calculation of acceleration 
-get mass of object
-calculate the indiviadual force of the two object that are closest*/

