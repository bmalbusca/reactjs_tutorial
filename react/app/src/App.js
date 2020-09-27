import React, {Component} from 'react';
import axios from 'axios'

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

      this.state={user:[]}; //WE need to intialize the sate to futher using state Set function - Well the state is defined by us and in this case we are receive a user's personal data

  }

/*
* UNSAFE_componentWillMount() is invoked just before mounting occurs. 
* It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering. 
* Generally, we recommend using the constructor() instead for initializing state.
*/

  UNSAFE_componentWillMount(){  //if we use wooks this will be desnecessary
   
    this.restAPI()


  }


  restAPI(){
    let res=[];
    //  the function callback in axios is not binding. To solve this, you can use an arrow function, as they automatically bind with your class. 
    // Otherwise this.setState will not work 

    // axios HTTP request 
    axios('https://api.randomuser.me/?nat=US&result=5').then(response =>{   

        //console.log(response);
        this.setState({user: response.data.results});
        
        res = response
        console.log(this.state);


    }); // alternative way: .then( function (response){console.log(response)} but will not able to use "this."" object )

   

    return res;
  }




  render(){ //he render() method is the only required method in a class component.
            //.map is used to iterated over Array 
  
    return <div className='App'> 
        Hello,  {this.state.user.map(user => <div> {user.name.first}: {user.cell}, {user.email} </div> )}


        </div> 
  }


}

export default App;
