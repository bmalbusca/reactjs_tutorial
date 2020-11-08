
// Create a Class 
export class holiday{

	constructor(dest,days){
		this.destination = dest
		this.days=days
	}

	info(){
		console.log(` dest=${this.destination} days=${this.days}`)
	}
}

//const trip = new holiday('azores', 10);


//sub class 
export class expedition extends holiday{

	constructor(dest, days, gear){
		super(dest,days);
		this.gear = gear;
	}

	info(){
		super.info();
		console.log(`bring ${this.gear.join(" and your ")}`)
	}

}

//const Gear = new expedition("Evarest",30,["Sunglasses","Flags"]);

//Gear.info()



