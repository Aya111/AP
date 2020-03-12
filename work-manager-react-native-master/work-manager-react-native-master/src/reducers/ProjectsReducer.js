import * as types from '../actions/projects-action/types'

const INITIAL_STATE = {projects: [], error: '', loading: false};

export default (state = INITIAL_STATE , action) => 
{
    switch(action.type)
    {
        case types.PROJECTS_LOADING:
            return {...state, projects: [], error: '', loading: true};
        case types.PROJECTS_SUCCESS:
            return {...state, projects: action.payload, error: '', loading: false};
        case types.PROJECTS_FAILED:
            return {...state, projects: [], error: action.payload, loading: false};
        default:
            return state;
    }
} 