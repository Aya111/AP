import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import DevelopersList from './components/DevelopersList';
import ProjectsList from './components/ProjectsList';
import ProjectDiscussion from './components/ProjectDiscussion';
import {Actions} from 'react-native-router-flux'
import * as constants from './Constants'
import RegisterationForm from './components/RegisterationForm';
import AsyncStorage from '@react-native-community/async-storage';

const RouterComponent = () =>
{
    return (
        <Router titleStyle={{ color: '#3B9764'}}>
            <Scene key="root" hideNavBar>
                <Scene key="auth" hideNavBar>
                    <Scene key = "login" component = {LoginForm} />
                    <Scene key = "registerationForm" component = {RegisterationForm} />
                </Scene>
                <Scene key="main" >
                    <Scene key = "developersList" component = {DevelopersList} title="Developers" initial 
                    rightTitle='LogOut'
                    onRight={() => {
                             AsyncStorage.setItem(constants.mobile_key, "");
                             AsyncStorage.setItem(constants.password_key, "");
                             AsyncStorage.setItem(constants.name_key, "");
                             Actions.pop()
                        }}
                    />
                    <Scene key = "projectsList" component = {ProjectsList}/>
                    <Scene key = "projectDiscussion" component = {ProjectDiscussion} />
                </Scene>
            </Scene>
        </Router>
    )
} 

export default RouterComponent;