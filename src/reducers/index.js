import { combineReducers } from 'redux';
import { UPDATE_EMAIL, UPDATE_PASSWORD } from '../actions';


const initialState = {
    email: '',
    password: '',
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    form: formReducer,
});

export default rootReducer;


