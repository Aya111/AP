import * as types from './types'
import * as config from '../../web-service/config'
import {instance} from '../../web-service/axiosClient'
import * as constants from '../../Constants'

export const commentChangedAction = (text) => {
    return{
        type: types.COMMENT_CHANGED,
        payload: text
    }
}

export const getCommentsAction = (projectId , sessionId) =>
{
    return async (dispatch) => {
        dispatch({type: types.COMMENTS_LOADING})
        try
        {
            const sessionKey = constants.sessionid_header_key
            instance.defaults.headers[sessionKey] = sessionId
            let comments = await instance.get(config.DISCUSSIONS + '/' + '?projectId=' + projectId, {})
            console.log('I got Commmmmmments =>>> ' + comments)
            dispatch({type: types.COMMENTS_SUCCESS , payload: comments.data})
        } 
        catch(e)
        {
            console.log('ERROOOOR Commmmmmments =>>> ' + e)
            dispatch({type: types.COMMENTS_FAILED, payload: 'Error. Check Your Network.'})
        }
    }
}

export const addCommentAction = (projectId , messageBody , sessionId) =>
{
    return async (dispatch)  => {
        dispatch({type: types.COMMENTS_LOADING})
        try
        {
            const sessionKey = constants.sessionid_header_key
            instance.defaults.headers[sessionKey] = sessionId

            const body = {
                messageBody: messageBody,
                projectId: projectId
            }

            let newComment = await instance.post(config.ADD_COMMENT , body)
            console.log('Got NEW Commmmmmment =>>> ' + newComment)
            dispatch(getCommentsAction(projectId, sessionId))
        }
        catch(e)
        {
            console.log('ERROOOOR Commmmmmment =>>> ' + e)
            dispatch(getCommentsAction(projectId, sessionId))
        }
    }
}