import {EMAIL_CHANGED, PASSWORD_CHANGED, NAME_CHANGED, USER_SUCCESS, USER_FAILED, LOGIN_LOADING, REGISTERATION_FAILED, REGISTERATION_LOADING} from '../actions/auth-action/types';

const INITIAL_STATE = {email: '', password: '', user: null, error: '', loading: true};

export default (state = INITIAL_STATE , action) => 
{
    //console.log(action.type)
    switch(action.type)
    {
        case EMAIL_CHANGED:
            return {...state, email: action.payload, error: ''};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload, error: ''};
        case NAME_CHANGED:
            return {...state, name: action.payload, error: ''};
        case USER_SUCCESS:
            return {...state, user: action.payload, error: '', loading: false, email: '', password: ''};
        case USER_FAILED:
            return {...state, error: action.payload, loading: false};
        case REGISTERATION_FAILED:
            return {...state, error: action.payload, loading: false};
        case LOGIN_LOADING:
            return {...state, error: '', loading: action.payload};
        default:
            return state;
    }
} 