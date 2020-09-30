
# React Hooks

##	useState()

This is a simple Click Counter App:

```javascript

import React, {Component} from 'react';


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



````

Using React Hooks, we will have something like this:


`this.setState({ count: this.state.count + 1 })` will be converted to this `setCount(count + 1)`



```javascript
import React, {Component} from 'react';

const App =() =>{

	 // Declare a new state variable, which we'll call "count"
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

````


Learning from banal examples:

```javascript

function ExampleWithManyStates() {
// Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);


function handleOrangeClick() {
    // Similar to this.setState({ fruit: 'orange' })
    setFruit('orange');
  }

```

##	useEffect()





#	Running App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
