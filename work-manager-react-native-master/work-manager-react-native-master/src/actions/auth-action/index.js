import * as types from './types'
import * as config from '../../web-service/config'
import * as constants from '../../Constants'
import {Actions} from 'react-native-router-flux'
import {instance} from '../../web-service/axiosClient'
import AsyncStorage from '@react-native-community/async-storage';

export const emailChangedAction = (text) => {
    return{
        type: types.EMAIL_CHANGED,
        payload: text
    }
}

export const stopLoadingAction = (text) => {
    return{
        type: types.LOGIN_LOADING,
        payload: false
    }
}

export const passwordChangedAction = (text) => {
    return{
        type: types.PASSWORD_CHANGED,
        payload: text
    }
}

export const nameChangedAction = (text) => {
    return{
        type: types.NAME_CHANGED,
        payload: text
    }
}

export const errorCleared = () => {
    return{
        type: types.USER_FAILED,
        payload: ''
    }
}

export const loginAction = (email, password) =>
{
    return async (dispatch) => {
        dispatch({type: types.LOGIN_LOADING , payload: true})
        try
        {
            let deviceToken = 'xxxxxx'
            const body = {
                mobileNumber: email,
                password: password,
                deviceToken: deviceToken
            }

            console.log("before post");
            let user = await instance.post(config.LOGIN , body)
            console.log('user: ' + user)
            await AsyncStorage.setItem(constants.mobile_key, email);
            await AsyncStorage.setItem(constants.password_key, password);
            loginSuccess(dispatch, user.data);
        } 
        catch (e)
        {
            console.log('error : ->>>>> ' + e)
            loginFailed(dispatch, 'Login Failed')
        }
    }
}

export const registerationAction = (mobileNumber, password, name) =>
{
    return async (dispatch) => {
        try
        {
            dispatch({type: types.LOGIN_LOADING , payload: true})
            console.log('mn el register action');
            let deviceToken = 'xxxxxx'
            const body = {
                mobileNumber: mobileNumber,
                password: password,
                deviceToken: deviceToken,
                name: name
            }

            console.log("before post register" + config.REGISTERATION);
            let user = await instance.post(config.REGISTERATION , body)
            console.log('user: ' + user)
            await AsyncStorage.setItem(constants.mobile_key, mobileNumber);
            await AsyncStorage.setItem(constants.password_key, password);
            registerationSuccess(dispatch, user.data);
        } 
        catch (error)
        {
            console.log('error : ->>>>> ' + error)
            registerationFailed(dispatch, 'Registeration Data Is Not True')
        }
    }
}

const loginSuccess = (dispatch, user) => {
    dispatch({type: types.USER_SUCCESS , payload: user})
    Actions.main();
    
}

const registerationSuccess = (dispatch, user) => {
    dispatch({type: types.USER_SUCCESS , payload: user})
    Actions.main();
}

const loginFailed = (dispatch, e) => {
    dispatch({type: types.USER_FAILED, payload: e})
}

const registerationFailed = (dispatch, e) => {
    dispatch({type: types.REGISTERATION_FAILED, payload: e})
}