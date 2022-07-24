export class Position{
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    subtract(v:Position){
        this.x = v.x - this.x;
        this.y = v.y - this.y;
        return this;
    }
    getDistanceBetweenObjs(b:Position){
	//sqrt((x1-x2)^2-(y1-y2)^2)
	//difference of x's squared
	let dXSqrd=(this.x-b.x)**2;
	//difference of y's squared
	let dYSqrd=(this.y-b.y)**2;
	//ditance between a and b
	let distance= (dXSqrd + dYSqrd)**(1/2);
	
	//return the distance
	return distance;
    }
}
