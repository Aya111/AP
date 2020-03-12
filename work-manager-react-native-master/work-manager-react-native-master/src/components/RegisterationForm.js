import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {InputField, Button, Card, Spinner} from '../common';
import {emailChangedAction, passwordChangedAction, registerationAction, stopLoadingAction, nameChangedAction, errorCleared} from '../actions/auth-action';
import {connect} from 'react-redux';
import * as constants from '../Constants'
import AsyncStorage from '@react-native-community/async-storage';

class RegisterationForm extends Component {

    componentDidMount(){
        this.props.errorCleared();
    }

    onEmailChanged(text)
    {
        this.props.emailChangedAction(text)
    }

    onPasswordChanged(text)
    {
        this.props.passwordChangedAction(text)
    }

    onNameChanged(text)
    {
        this.props.nameChangedAction(text)
    }

    onRegisterClick()
    {
        const {mobileNumber, password, name} = this.props
        this.props.registerationAction(mobileNumber, password, name)
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
                <Button onClick={this.onRegisterClick.bind(this)}>
                    Register
                </Button>
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
                    label={'Name'}
                    placeholder={'Name'}
                    onTextChange={this.onNameChanged.bind(this)}
                    ></InputField>

                    <InputField 
                    label={'Mobile'}
                    placeholder={'Mobile'}
                    onTextChange={this.onEmailChanged.bind(this)}
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
    const {email, password, name, user, error, loading} = auth
    return {mobileNumber: email, password: password, name: name, user: user, error: error, loading: loading}
}

export default connect(mapStateToProps, {emailChangedAction, passwordChangedAction, errorCleared, nameChangedAction, registerationAction, stopLoadingAction}) (RegisterationForm);

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
})
