


const initialState = {
    description: [] //default that will be added
  };

function reducer(state=initialState , action){
    if(action.type=='bugAdded'){// you define the action 
        return {

                ...state, 
                description: action.payload.description
            }
    

            }
        
        else if (action.type== 'bugRemoved')
            return console.log(action)

}

export default reducer;