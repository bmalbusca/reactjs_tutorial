
//Variables
var name = "Bruno"; //variable declaration
const nickname = "Figueiredo"; //const var - cannot be changed 
//alert(name + " "+nickname);		//window alert popup - method that pre exits in JS


if (true){

	let newname = "Chaves"; // can only be seen by this scope - instaed var will seen anyway 

}

//let age = prompt('Guess age of name '+name+ " "+nickname);

// lets use template string - newname will not work because is inside of the scope

//let result = `${name} ${nickname} is ${age} years old`;
//alert(result);



//functions 

function welcome(user, message='teste'){

	alert(`Hello ${user} ${message}`);

}

//welcome(name,", welcome to this tutorial.");

//arrow functions -  isn’t the same as a normal function. same result with fewer lines of code.
//are only callable i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.

let checkBlog = (title, body) =>{

	if(!title){
		throw new Error('title required');
	}

	if(!body){
		throw new Error('Body required'); 
	}

	return true;

}

let bye =() => alert('Bye');
//bye();


//console.log(this) //debug console inspector - "this" referes to inclose window
// but if we use "this" inside arrow function will redirect to inside objects like in Java


// Objects
let nepal = {

	//add property
	mountains:['Evarest', 'Annapura'] ,
	//add method 
	printWithDash: function(){
		setTimeout(() => console.log(this.mountains.join('-')), 3000); 

	}

}

let {mountains} = nepal;  //decontructor - need to have the same name as the objects attributes
let [, second_mount] = nepal.mountains; //selecting the second mountain from object's array

//console.log(mountains);
//console.log(second_mount);

//nepal.printWithDash();



// spread/rest operator - will spread all the contents; used to combine 2 arrays/objects

var mountainsJapan =['Fuji'];

var allmountains = [...nepal.mountains, ...mountainsJapan];

//console.log(allmountains)



// Create a Class 
class holiday{

	constructor(dest,days){
		this.destination = dest
		this.days=days
	}

	info(){
		console.log(` dest=${this.destination} days=${this.days}`)
	}
}

const trip = new holiday('azores', 10);


//sub class 
class expedition extends holiday{

	constructor(dest, days, gear){
		super(dest,days);
		this.gear = gear;
	}

	info(){
		super.info();
		console.log(`bring ${this.gear.join(" and your ")}`)
	}

}

const Gear = new expedition("Evarest",30,["Sunglasses","Flags"]);

Gear.info()





