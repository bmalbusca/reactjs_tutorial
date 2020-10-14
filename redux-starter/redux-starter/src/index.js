import {compose, pipe } from 'lodash/fp'; 
import store from './store'

/*

const transform = pipe(wrapInDiv, toLowerCAse, trim); // will do all these fucntion from rigth from left
transform(input)

*/


//WE can  create a variable with the actions type as #DEFINE 
store.dispatch({
    type: "bugRemoved",
    payload: {
        description: "Bug1" ,   //action.payload.description
     

    }

});

console.log("Hello World!");
//console.log(store.getState());
