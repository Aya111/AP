import * as types from './types'
import * as config from '../../web-service/config'
import * as constants from '../../Constants'
import {instance} from '../../web-service/axiosClient'

export const getProjectsAction = (developerId , sessionId) =>
{
    return async (dispatch) => {
        dispatch({type: types.PROJECTS_LOADING})
        try
        {
            console.log('DEVELOPERID AND SESSION ARE  ====>>>> ' + developerId + sessionId)
            const sessionKey = constants.sessionid_header_key
            instance.defaults.headers[sessionKey] = sessionId
            let projects = await instance.get(config.PROJECTS + '/' + '?developerId=' + developerId, {})
            console.log(projects)
            dispatch({type: types.PROJECTS_SUCCESS , payload: projects.data})
        } 
        catch(e)
        {
            dispatch({type: types.PROJECTS_FAILED, payload: e.message})
            console.log(e)
        }
    }
}