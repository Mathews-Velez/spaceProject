export class Vector{
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    add(v: Vector){
        this.x=this.x+v.x;
        this.y=this.y+v.y;
        return this
    }
    mag(){
	let xsqrd = this.x**2
	let ysqrd = this.y**2
	let mag = (xsqrd + ysqrd)**1/2
	return mag
    }

    normalize(){
	const u = this.mag()
	var U = new Vector(this.x/u, this.y/u)
    return U 
    }
    
}
