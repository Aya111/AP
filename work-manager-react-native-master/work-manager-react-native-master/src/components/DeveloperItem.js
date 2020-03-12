import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {CardSection,Card}  from '../common'

export default class DeveloperItem extends Component {

  render() {
    const {name, path, id} = this.props.developer
    const {onClick} = this.props
    const {developerImageStyle, headerViewStyle, nameStyle, imageStyle} = styles
    return (
        <TouchableWithoutFeedback onPress = {() => onClick(id, name)}>
            <View>
                <Card>
                    <CardSection>
                        {/* <View>
                            <Image style={developerImageStyle} source={require('../../assets/profile_icon.png')}/>
                        </View> */}
                        <View style={headerViewStyle}>
                            <Text style={nameStyle}>{name.toUpperCase()}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <Image style={imageStyle} source={{uri: path}}/>
                    </CardSection>
                </Card>
            </View>
        </TouchableWithoutFeedback>
        
    );
  }
}

const styles = StyleSheet.create({
    developerImageStyle: 
    {
        width: 40,
        height: 40,
    },
    headerViewStyle: 
    {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginHorizontal: 10,
    },
    imageStyle: 
    {
        flex: 1,
        height: 200,
    },
    nameStyle:
    {
        fontSize: 20,
        color: '#3B9764',
        fontWeight: 'bold',
        fontFamily: "Apple Chancery, cursive",
    },
})
