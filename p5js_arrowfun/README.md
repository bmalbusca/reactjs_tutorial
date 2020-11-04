#	README.md


This project uses [p5.js library](https://p5js.org)  

```xml
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.9/p5.js"></script>
  
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.dom.min.js"></script>
  

```


##	Chapter 1 - Intro

```javascript
	function(args){
	
	}
```
The equivalent in arrow funtion are: 

```javascript
	(args) => {	

	}
```
(in fact 'function' keyword will be the meaning of '=>' )
**Note:** *The curve parentesis  and brackets are optional in arrow functions* 



##	Chapter 2

More examples:

```javascript
	x => x*2
```
The equilavent is:

```javascript
	function(x){
		return x*2;
	} 
```
**Note:**	*Arrow functions don't need to use bind, so will be safe use 'this' keyword*


##  Chapter 3 - Using the `src` example


####	Version 0

```javascript

function setup(){	//setup function - static configuration

  	createCanvas(400, 400);
  
  	background(153);
  	//line(0, 0, width, height); 
   
    // Create the button 
   	let color_button = createButton("Change Color"); 
      
    // Position the button 
    color_button.position((width/2) -40, (height/2)); 
      
    // When the button is clicked change_background() 
    // function is called 
    color_button.mouseClicked(change_background); 

}




   
// Create a function to change the background-color 
function change_background() { 
      
    // Pick a random number for r value 
    var r = random(255); 
      
    // Pick a random number for g value 
    var g = random(255); 
      
    // Pick a random number for b value 
    var b = random(255); 
      
    // Set a random background-color 
    background(r, g, b); 
} 

```


####	Version 1 - Built-in Function

```javascript

/*Can be converted like this: */

function setup(){

  	createCanvas(400, 400);
  
  	background(153);
  	//line(0, 0, width, height); 
   
    // Create the button 
   	let color_button = createButton("Change Color"); 
      
    // Position the button 
    color_button.position((width/2) -40, (height/2)); 
      
    // When the button is clicked change_background() 
    // function is called - in this case we dont need to give a name
    color_button.mouseClicked(function () {

		    	// Pick a random number for r value 
		    var r = random(255); 
		      
		    // Pick a random number for g value 
		    var g = random(255); 
		      
		    // Pick a random number for b value 
		    var b = random(255); 
		      
		    // Set a random background-color 
		    background(r, g, b); 
	} ); 

}



```
####	Version 2 - Arrow Function

```javascript


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
    color_button.mouseClicked( ()=> {

		    	// Pick a random number for r value 
		    var r = random(255); 
		      
		    // Pick a random number for g value 
		    var g = random(255); 
		      
		    // Pick a random number for b value 
		    var b = random(255); 
		      
		    // Set a random background-color 
		    background(r, g, b); 
	} ); 

}



```


####	Version 2.1 - Arrow Function simplified

```javascript



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
		      
		    // Set a random background-color - we cannot use ';' here
		    background(random(255), random(255),random(255)) 
	 )

}



