#	README.md 


##	Chapter 1 - Javascript Intro


###	Variables 
```javascript

//Variables
var name = "Bruno"; //variable declaration
const nickname = "Figueiredo"; //const var - cannot be changed 

alert(name + " "+nickname);		//window alert popup - method that pre exits in JS


```

### Scopes

```javascript

if (true){

	let newname = "Chaves"; // can only be seen by this scope - instead,  'var' will seen anyway 

}

```

### Strings

```javascript

let age = prompt('Guess age of name '+name+ " "+nickname);

// lets use template string - newname will not work because is inside of the scope

let result = `${name} ${nickname} is ${age} years old`;

alert(result);

```

###	Functions

```javascript

//functions 

function welcome(user, message='teste'){

	alert(`Hello ${user} ${message}`);

}

welcome(name,", welcome to this tutorial.");
```


```javascript

/* 
	Arrow functions -  isn’t the same as a normal function. same result with fewer lines of code.

	Are only callable i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.
*/

//Example 1

let checkBlog = (title, body) =>{

	if(!title){
		throw new Error('title required');
	}

	if(!body){
		throw new Error('Body required'); 
	}

	return true;

}

//Example 2

let bye =() => alert('Bye');
bye();



//BIG NOTE HERE!

console.log(this) //debug console inspector - "this" referes to inclose window

// but if we use "this" inside arrow function will redirect to inside objects like in Java


```

### Objects


```javascript

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

console.log(mountains);
console.log(second_mount);

nepal.printWithDash();


```

###	Array 


```javascript


// Spread operator - will spread all the contents; used to combine 2 arrays/objects

var mountainsJapan =['Fuji'];

var allmountains = [...nepal.mountains, ...mountainsJapan];

console.log(allmountains)

```

### Classes

```javascript

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

```
##	Chapter 2 - 'This' Keyword

There is 2 main source contents about this topic:

1.	From [StackOverflow](https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work) - [@Mahesha999](https://stackoverflow.com/users/1317018/mahesha999) and [@Haider Ilahi]([https://stackoverflow.com/users/12362732/haider-ilahi)

2.	From (MDN web docs)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this] [RECOMMENDED]




_____

####	From StackOverflow

The `this` keyword behaves differently in JavaScript compared to other languages. In Object Oriented languages, the this keyword refers to the current instance of the class. In JavaScript the value of this is determined by the invocation context of function (context.function()) and where it is called.

###	1. When used in global context

When you use this in global context, it is bound to global object (window in browser)
```javascript
document.write(this);  //[object Window]
```
When you use this inside a function defined in the global context, this is still bound to global object since the function is actually made a method of global context.

```javascript
function f1()
{
   return this;
}
document.write(f1());  //[object Window]
```
Above f1 is made a method of global object. Thus we can also call it on window object as follows:

```javascript
function f()
{
    return this;
}

document.write(window.f()); //[object Window]
````

###	2. When used inside object method

When you use this keyword inside an object method, this is bound to the "immediate" enclosing object.

```javascript
var obj = {
    name: "obj",
    f: function () {
        return this + ":" + this.name;
    }
};
document.write(obj.f());  //[object Object]:obj

````
Above I have put the word immediate in double quotes. It is to make the point that if you nest the object inside another object, then this is bound to the immediate parent.

```javascript
var obj = {
    name: "obj1",
    nestedobj: {
        name:"nestedobj",
        f: function () {
            return this + ":" + this.name;
        }
    }            
}

document.write(obj.nestedobj.f()); //[object Object]:nestedobj
````

Even if you add function explicitly to the object as a method, it still follows above rules, that is this still points to the immediate parent object.

```javascript
var obj1 = {
    name: "obj1",
}

function returnName() {
    return this + ":" + this.name;
}

obj1.f = returnName; //add method to object
document.write(obj1.f()); //[object Object]:obj1
````

###	3. When invoking context-less function

When you use this inside function that is invoked without any context (i.e. not on any object), it is bound to the global object (window in browser)(even if the function is defined inside the object) .

```javascript
var context = "global";

var obj = {  
    context: "object",
    method: function () {                  
        function f() {
            var context = "function";
            return this + ":" +this.context; 
        };
        return f(); //invoked without context
    }
};

document.write(obj.method()); //[object Window]:global 

````

Trying it all with functions

We can try above points with functions too. However there are some differences.

-	Above we added members to objects using object literal notation. We can add members to functions by using this. to specify them.
-	Object literal notation creates an instance of object which we can use immediately. With function we may need to first create its instance using new operator.
-	Also in an object literal approach, we can explicitly add members to already defined object using dot operator. This gets added to the specific instance only. However I have added variable to the function prototype so that it gets reflected in all instances of the function.

Below I tried out all the things that we did with Object and this above, but by first creating function instead of directly writing an object.

```javascript
/********************************************************************* 
  1. When you add variable to the function using this keyword, it 
     gets added to the function prototype, thus allowing all function 
     instances to have their own copy of the variables added.
*********************************************************************/
function functionDef()
{
    this.name = "ObjDefinition";
    this.getName = function(){                
        return this+":"+this.name;
    }
}        

obj1 = new functionDef();
document.write(obj1.getName() + "<br />"); //[object Object]:ObjDefinition   

/********************************************************************* 
   2. Members explicitly added to the function protorype also behave 
      as above: all function instances have their own copy of the 
      variable added.
*********************************************************************/
functionDef.prototype.version = 1;
functionDef.prototype.getVersion = function(){
    return "v"+this.version; //see how this.version refers to the
                             //version variable added through 
                             //prototype
}
document.write(obj1.getVersion() + "<br />"); //v1

/********************************************************************* 
   3. Illustrating that the function variables added by both above 
      ways have their own copies across function instances
*********************************************************************/
functionDef.prototype.incrementVersion = function(){
    this.version = this.version + 1;
}
var obj2 = new functionDef();
document.write(obj2.getVersion() + "<br />"); //v1

obj2.incrementVersion();      //incrementing version in obj2
                              //does not affect obj1 version

document.write(obj2.getVersion() + "<br />"); //v2
document.write(obj1.getVersion() + "<br />"); //v1

/********************************************************************* 
   4. `this` keyword refers to the immediate parent object. If you 
       nest the object through function prototype, then `this` inside 
       object refers to the nested object not the function instance
*********************************************************************/
functionDef.prototype.nestedObj = { name: 'nestedObj', 
                                    getName1 : function(){
                                        return this+":"+this.name;
                                    }                            
                                  };

document.write(obj2.nestedObj.getName1() + "<br />"); //[object Object]:nestedObj

/********************************************************************* 
   5. If the method is on an object's prototype chain, `this` refers 
      to the object the method was called on, as if the method was on 
      the object.
*********************************************************************/
var ProtoObj = { fun: function () { return this.a } };
var obj3 = Object.create(ProtoObj); //creating an object setting ProtoObj
                                    //as its prototype
obj3.a = 999;                       //adding instance member to obj3
document.write(obj3.fun()+"<br />");//999
                                    //calling obj3.fun() makes 
                                    //ProtoObj.fun() to access obj3.a as 
                                    //if fun() is defined on obj3
4. When used inside constructor function.

When the function is used as a constructor (that is when it is called with new keyword), this inside function body points to the new object being constructed.

var myname = "global context";
function SimpleFun()
{
    this.myname = "simple function";
}

var obj1 = new SimpleFun(); //adds myname to obj1
//1. `new` causes `this` inside the SimpleFun() to point to the
//   object being constructed thus adding any member
//   created inside SimipleFun() using this.membername to the
//   object being constructed
//2. And by default `new` makes function to return newly 
//   constructed object if no explicit return value is specified

document.write(obj1.myname); //simple function
5. When used inside function defined on prototype chain

If the method is on an object's prototype chain, this inside such method refers to the object the method was called on, as if the method is defined on the object.

var ProtoObj = {
    fun: function () {
        return this.a;
    }
};
//Object.create() creates object with ProtoObj as its
//prototype and assigns it to obj3, thus making fun() 
//to be the method on its prototype chain

var obj3 = Object.create(ProtoObj);
obj3.a = 999;
document.write(obj3.fun()); //999

//Notice that fun() is defined on obj3's prototype but 
//`this.a` inside fun() retrieves obj3.a   

````
###	6. Inside call(), apply() and bind() functions

-	All these methods are defined on Function.prototype.
-	These methods allows to write a function once and invoke it in different context. In other words, they allows to specify the value of this which will be used while the function is being executed. They also take any parameters to be passed to the original function when it is invoked.
-	`fun.apply(obj1 [, argsArray])` Sets obj1 as the value of this inside fun() and calls `fun()` passing elements of argsArray as its arguments.
-	`fun.call(obj1 [, arg1 [, arg2 [,arg3 [, ...]]]])` - Sets obj1 as the value of this inside `fun()` and calls `fun()` passing arg1, arg2, arg3, ... as its arguments.
-	`fun.bind(obj1 [, arg1 [, arg2 [,arg3 [, ...]]]])` - Returns the reference to the function fun with this inside fun bound to obj1 and parameters of fun bound to the parameters specified arg1, arg2, arg3,....
-	By now the difference between apply, call and bind must have become apparent. apply allows to specify the arguments to function as array-like object i.e. an object with a numeric length property and corresponding non-negative integer properties. Whereas call allows to specify the arguments to the function directly. Both apply and call immediately invokes the function in the specified context and with the specified arguments. On the other hand, bind simply returns the function bound to the specified this value and the arguments. We can capture the reference to this returned function by assigning it to a variable and later we can call it any time.

```javascript
function add(inc1, inc2)
{
    return this.a + inc1 + inc2;
}

var o = { a : 4 };
document.write(add.call(o, 5, 6)+"<br />"); //15
      //above add.call(o,5,6) sets `this` inside
      //add() to `o` and calls add() resulting:
      // this.a + inc1 + inc2 = 
      // `o.a` i.e. 4 + 5 + 6 = 15
document.write(add.apply(o, [5, 6]) + "<br />"); //15
      // `o.a` i.e. 4 + 5 + 6 = 15

var g = add.bind(o, 5, 6);       //g: `o.a` i.e. 4 + 5 + 6
document.write(g()+"<br />");    //15

var h = add.bind(o, 5);          //h: `o.a` i.e. 4 + 5 + ?
document.write(h(6) + "<br />"); //15
      // 4 + 5 + 6 = 15
document.write(h() + "<br />");  //NaN
      //no parameter is passed to h()
      //thus inc2 inside add() is `undefined`
      //4 + 5 + undefined = NaN</code>

 ````

###	7. `this` inside event handlers

-	When you assign function directly to event handlers of an element, use of this directly inside event handling function refers to the corresponding element. Such direct function assignment can be done using addeventListener method or through the traditional event registration methods like onclick.
-	Similarly, when you use this directly inside the event property (like `<button onclick="...this..." >`) of the element, it refers to the element.
-	However use of this indirectly through the other function called inside the event handling function or event property resolves to the global object window.
-	The same above behavior is achieved when we attach the function to the event handler using Microsoft's Event Registration model method attachEvent. Instead of assigning the function to the event handler (and the thus making the function method of the element), it calls the function on the event (effectively calling it in global context).

I recommend to better try this in JSFiddle.

```javascript
<script> 
    function clickedMe() {
       alert(this + " : " + this.tagName + " : " + this.id);
    } 
    document.getElementById("button1").addEventListener("click", clickedMe, false);
    document.getElementById("button2").onclick = clickedMe;
    document.getElementById("button5").attachEvent('onclick', clickedMe);   
</script>

<h3>Using `this` "directly" inside event handler or event property</h3>
<button id="button1">click() "assigned" using addEventListner() </button><br />
<button id="button2">click() "assigned" using click() </button><br />
<button id="button3" onclick="alert(this+ ' : ' + this.tagName + ' : ' + this.id);">used `this` directly in click event property</button>

<h3>Using `this` "indirectly" inside event handler or event property</h3>
<button onclick="alert((function(){return this + ' : ' + this.tagName + ' : ' + this.id;})());">`this` used indirectly, inside function <br /> defined & called inside event property</button><br />

<button id="button4" onclick="clickedMe()">`this` used indirectly, inside function <br /> called inside event property</button> <br />

IE only: <button id="button5">click() "attached" using attachEvent() </button>
```
###	8. `this` in ES6 arrow function

In an arrow function, this will behave like common variables: it will be inherited from its lexical scope. The function's this, where the arrow function is defined, will be the arrow function's this.

So, that's the same behavior as:

```javascript
(function(){}).bind(this)
See the following code:

const globalArrowFunction = () => {
  return this;
};

console.log(globalArrowFunction()); //window

const contextObject = {
  method1: () => {return this},
  method2: function(){
    return () => {return this};
  }
};

console.log(contextObject.method1()); //window

const contextLessFunction = contextObject.method1;

console.log(contextLessFunction()); //window

console.log(contextObject.method2()()) //contextObject

const innerArrowFunction = contextObject.method2();

console.log(innerArrowFunction()); //contextObject 

````




