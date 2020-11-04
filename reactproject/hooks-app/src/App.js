import React, {Component, useState} from 'react';




const App =() =>{

    const [count, setCount] = useState(0);

    const increment = () => {
      setCount( count +1 );
    }



    return (
        <div>
        <h2> Counter App </h2>
        <button onClick={increment}> Clicked {count} times </button>
        </div>
      );


};



export default App;



/* Older Code

class  App extends Component {
  

  constructor(props){ 
        super(props);
        this.state = {count: 0}
  }

  increment = () => { 
    let { count } = this.state;
    this.setState({
      count: count + 1}); 

  };




  render(){ //Mandatory when using Class Component in ReactJS
      return (
        <div>
        <h2> Counter App </h2>
        <button onClick={this.increment}> Clicked {this.state.count} times </button>
        </div>
      );

    }

};

export default App;

*/