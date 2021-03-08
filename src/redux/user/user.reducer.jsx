const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {              //similar to if else
        case 'SET_CURRENT_USER':
            return{              // we are returning an object 
                ...state,               //spreading everything same as it was in previous state only focus on the part which you want to change
                currentUser: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;