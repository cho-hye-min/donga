import {TAB} from '../actions';
import {combineReducers} from 'redux';

const tabInitialState={
    active_prop2 = false
};

const tabEdit = (state = tabInitialState, action) => {
    switch(action.type){
        case TAB:
            return Object.assign({}, state, {
                active_prop2: true
            });

        default:
            return state;
    }
};

export default tabEdit;