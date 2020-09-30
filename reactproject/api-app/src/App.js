import React, {Component} from 'react';
import axios from 'axios'

// import {importLoading} from './Loading.js' //if we only 'export' before the component  
import ImportLoading from './Loading.js'
/**

  function Component(props, context, updater) {
    this.props = props;
    this.context = context; // If a component has string refs, we will assign a different object later.

    this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
    // renderer.

    this.updater = updater || ReactNoopUpdateQueue;a
  }


**/




class App extends Component{

  constructor(props){ //If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

      super(props); //stands for properties and is being used for passing data from one component to another.props data is read-only, 
                    //which means that data coming from the parent should not be changed by child components.   

                    // All attributes or Global variables should be inside the state atribute! 
      this.state={user:[], count: 0, loading: false}; //WE need to intialize the sate to futher using state Set function - Well the state is defined by us and in this case we are receive a user's personal data
      this.response=[];                               //only declared to this the "this" keyword at object's methods 

      //bind
      this.handleSubmit = this.handleSubmit.bind(this)
  }

/*
* UNSAFE_componentWillMount() is invoked just before mounting occurs. 
* It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering. 
* Generally, we recommend using the constructor() instead for initializing state.
*/

  UNSAFE_componentWillMount(){  //if we use wooks this will be desnecessary
   
    this.restAPI()  //'this' keyword will work here because we are refering to a function of the outside object which is App
    


  }

  /*
  * Mounting
  *  These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
  * 1 constructor()
  * 2 static getDerivedStateFromProps()
  * 3 render()
  * 4 componentDidMount()
  *
  *
  *  is invoked immediately after a component is mounted.If you need to load data from a remote endpoint, this is a good place to instantiate the network request. 
  *
  */



  componentDidMount(){

    document.title = `API Rest App - Databse size ${this.state.count}`

  }

  componentDidUpdate(){

    document.title = `(Updating) Databse size=${this.state.count}`

  }

  /* handleSubmit() is other standart method to handling events
  * such as  handleChange(event) and handleInputChange(event)
  */

  handleSubmit(e){

    e.preventDefault();
    this.restAPI(); //We need to bind this method 



  }


 restAPI(){
    var res=[];
    let {user,count} = this.state
     

    this.setState({loading: true}); //We will request data
    //  the function callback in axios is not binding. To solve this, you can use an arrow function, as they automatically bind with your class. 
    // Otherwise this.setState will not work 

    // axios HTTP request 
    axios('https://api.randomuser.me/?nat=US&result=5').then( (response,res) =>{   

        //console.log(response==this.response); // False
        //console.log(this.response)  // From response Class 
        //console.log(response)       // From response local

        this.setState({user: [...response.data.results,...this.state.user] }); //using spread operator to add data to local state
        this.setState({count: user.length+1}); //or {count: count +1} since the api request only sends 1 user at once
        this.setState({loading: false}); //The request is finnshed

        
        //console.info(res==this.res)   // True
        
        res = response.data.results     // Is the same as this.res = response.data.results
        //console.log(res)

        
       
        

    }) // alternative way: .then( function (response){console.log(response)} but will not able to use "this."" object )


  }


/*
*  The render() method is the only required method in a class component  React.
*/
  render(){ 
            //.map is used to iterated over Array 
    //Conditional render -> condtion ? DOifTrue : DOifFalse
    return <div className='App'> 
        Hello,  {!this.state.loading ?  this.state.user.map((user,i) => <div key={i}> {user.name.first}: {user.cell}, {user.email}  </div> ) :  (<ImportLoading  text="5 min" />)}

          <div> 
            <form onSubmit={this.handleSubmit}>
            <input type="submit" value="load users" />
            </form>
          </div>
        </div> 
  }


}

export default App;
