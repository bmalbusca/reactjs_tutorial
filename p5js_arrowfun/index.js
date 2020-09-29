/*
- Chapter 1 

	function(args){
	
	}

The equivalent in arrow funtion are: 

	(args) => {	

	}

(in fact 'function' keyword will be the meaning of '=>' )
Note* The curve parentesis  and brackets are optional in arrow functions* 



- Chapter 2

More examples:

	x => x*2

The equilavent is:

	function(x){
		return x*2;
	} 


Note* Arrow functions don't need to use bind, so will be safe use 'this' keyword*


*/




function setup(){

  	createCanvas(400, 400);
  
  	background(153);
  	//line(0, 0, width, height); 
   
    // Create the button 
   	let color_button = createButton("Change Color"); 
      
    // Position the button 
    color_button.position((width/2) -40, (height/2)); 
      
    // When the button is clicked change_background() 
    // function is called 

    //In this case, riping off the brackets will be mandatory having one line code! And the normal code line and ';' are not allowed
    color_button.mouseClicked( ()=> 
		      
		    // Set a random background-color 
		    background(random(255), random(255),random(255)) 
	 )

}







