import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {InputField, Button, Card, Spinner} from '../common';
import {emailChangedAction, passwordChangedAction, loginAction, stopLoadingAction, errorCleared} from '../actions/auth-action';
import {connect} from 'react-redux';
import * as constants from '../Constants'
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {

    async componentWillMount(){
        const mobile = await AsyncStorage.getItem(constants.mobile_key);
        const password = await AsyncStorage.getItem(constants.password_key);

        
        if (mobile != null && password != null)
        {
            this.props.loginAction(mobile, password)
        } 
        else
        {
            this.props.stopLoadingAction()
        }
      }

    onEmailChanged(text)
    {
        this.props.emailChangedAction(text)
    }

    onPasswordChanged(text)
    {
        this.props.passwordChangedAction(text)
    }

    onSignInClick()
    {
        const {email, password} = this.props
        this.props.loginAction(email, password)
    }

    onRegisterClick(){
        Actions.registerationForm();
    }

    handleErrorMsg()
    {
        if(this.props.error)
        {
            return(
                <Text style={styles.error}>
                    {this.props.error}
                </Text>
            );
        }
    }

    renderButton()
    {
        if(this.props.loading)
        {
            return(
                <Spinner size='large' />
            )
        }
        else
        {
            return(
                <View>
                    <View>
                        <Button onClick={this.onSignInClick.bind(this)}>
                            Sign In
                        </Button>
                    </View>
                    <View style={styles.registerBtn}>
                        <Button onClick={this.onRegisterClick.bind(this)}>
                            Register
                        </Button>
                    </View>
                </View>
            )
        }
    }

  render() {
    return (
        <View style={styles.containerStyle}>
            <Image source = {require('../../assets/city.png')} style = {styles.image}/>

            <View>
                <Card>
                    <InputField 
                    label={'Mobile'}
                    placeholder={'Mobile'}
                    onTextChange={this.onEmailChanged.bind(this)}
                    value = {this.props.email}
                    ></InputField>

                    <InputField 
                    label={'Password'}
                    placeholder={'Password'}
                    onTextChange={this.onPasswordChanged.bind(this)}
                    secureInput={true}
                    ></InputField>

                    {this.handleErrorMsg()}
                    {this.renderButton()}
                </Card>
            </View>
        </View>
        
    );
  }
}

const mapStateToProps = ({auth}) => { //state = reducer
    const {email, password, user, error, loading} = auth
    return {email: email, password: password, user: user, error: error, loading: loading}
}

export default connect(mapStateToProps, {emailChangedAction, passwordChangedAction, loginAction, errorCleared, stopLoadingAction}) (LoginForm);

const styles = StyleSheet.create({
    containerStyle:
    {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    image:
    {
        width: '100%',
        height: '30%',
        marginTop: 30,
       resizeMode: 'stretch'
    },
    error:
    {
        color: 'red',
        fontSize: 17,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 15,
    },
    registerBtn:
    {
        marginTop: 5
    }
})
