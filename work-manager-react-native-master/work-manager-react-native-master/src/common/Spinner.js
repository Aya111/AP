import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({size}) => {
    return(
        <View style={styles.spinner}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
}

export { Spinner }

const styles = {
    spinner: {
        flex: 1,
        justifyConent: 'center',
        alignItems: 'center',
        margin: 10,
    }
};