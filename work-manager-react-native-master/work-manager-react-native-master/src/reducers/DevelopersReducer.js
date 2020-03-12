import * as types from '../actions/developers-action/types'

const INITIAL_STATE = {developers: [], error: '', loading: false};

export default (state = INITIAL_STATE , action) => 
{
    switch(action.type)
    {
        case types.DEVELOPERS_LOADING:
            return {...state, developers: [], error: '', loading: true};
        case types.DEVELOPERS_SUCCESS:
            return {...state, developers: action.payload, error: '', loading: false};
        case types.DEVELOPERS_FAILED:
            return {...state, developers: [], error: action.payload, loading: false};
        default:
            return state;
    }
} 