import React, {Component} from 'react';
import './App.css';
import Travel from './Components/Travel'

class App extends Component {


  state ={ users:"Bruno" };
 


  render(){
    return (
      <div className="App">
        <Travel name='Azores' duration={10}/>
      </div>
    );

  }
}

export default App;
