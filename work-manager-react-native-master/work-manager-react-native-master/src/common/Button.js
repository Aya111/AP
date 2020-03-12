import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({children,onClick}) => {

    const {textStyle, buttonStyle} = styles
    return (
      <TouchableOpacity style={buttonStyle} onPress={onClick}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
}

export { Button };

const styles = StyleSheet.create({
    buttonStyle:
    {
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#3B9764',
        backgroundColor: '#fff',
        marginLeft: 30,
        marginRight: 30,
        padding: 3,
    },
    textStyle:
    {
        fontSize: 20,
        color: '#3B9764',
        alignSelf: 'center',
        fontWeight: '500',

    }
})
