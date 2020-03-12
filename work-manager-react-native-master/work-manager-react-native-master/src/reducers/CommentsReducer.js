import * as types from '../actions/comments-action/types'

const INITIAL_STATE = {comments: [], error: '', loading: false, newComment: ''};

export default (state = INITIAL_STATE , action) => 
{
    switch(action.type)
    {
        case types.COMMENT_CHANGED:
            return {...state, newComment: action.payload};
        case types.COMMENTS_LOADING:
            return {...state, comments: [], error: '', loading: true, newComment: ''};
        case types.COMMENTS_SUCCESS:
            return {...state, comments: action.payload, error: '', loading: false, newComment: ''};
        case types.COMMENTS_FAILED:
            return {...state, comments: [], error: action.payload, loading: false, newComment: ''};
        default:
            return state;
    }
} 