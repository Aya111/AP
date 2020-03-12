import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({label, value, onTextChange, secureInput, placeholder}) => {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
        style={styles.inputStyle}
        onChangeText={onTextChange} 
        secureTextEntry={secureInput}
        placeholder={placeholder}>
        {value}
        </TextInput>
      </View>
    );
  }

export { InputField }

const styles = StyleSheet.create({
    containerStyle:
    {
        alignItems: 'center',
        height: 60,
        margin: 5,
        flexDirection: 'row',
    },
    labelStyle:
    {
        flex: 1,
        marginHorizontal: 5,
        fontSize: 17,
        color: '#3B9764',
    },
    inputStyle:
    {
        flex: 3,
        marginHorizontal: 5,
        fontSize: 17,
        color: '#000',
        height: 55,
        alignSelf: 'stretch',
    }
})
