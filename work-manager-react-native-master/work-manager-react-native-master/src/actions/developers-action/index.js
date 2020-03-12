
import * as types from './types'
import * as config from '../../web-service/config'
import * as constants from '../../Constants'
import {instance} from '../../web-service/axiosClient'

export const getDevelopersAction = (sessionId) =>
{
    return async (dispatch) => {
        dispatch({type: types.DEVELOPERS_LOADING})
        try
        {
            const sessionKey = constants.sessionid_header_key
            instance.defaults.headers[sessionKey] = sessionId
            //console.log('Session + ID ====> ' + JSON.stringify(instance.defaults.headers))
            let developers = await instance.get(config.DEVELOPERS, {})
            console.log(developers)
            dispatch({type: types.DEVELOPERS_SUCCESS , payload: developers.data})
        }
        catch (e)
        {
            console.log(e)
            dispatch({type: types.DEVELOPERS_FAILED, payload: e.message})
        }
    }
}