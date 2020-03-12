import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {CardSection,Card}  from '../common'

export default class ProjectItem extends Component {

  render() {
    const {name, path} = this.props.project
    const {onClick} = this.props
    const {projectImageStyle, headerViewStyle, nameStyle, imageStyle} = styles
    return (
        <TouchableWithoutFeedback onPress = {() => onClick(this.props.project)}>
            <View>
            <Card>
                <CardSection style={headerViewStyle}>
                    <View>
                        <Image style={projectImageStyle} source = {require('../../assets/project_icon.png')}/>
                    </View>
                    <View>
                        <Text style={nameStyle}>{name}</Text>
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
    projectImageStyle: 
    {
        width: 40,
        height: 40,
    },
    nameStyle:
    {
        fontSize: 20,
        color: '#3B9764',
        fontWeight: 'bold',
        fontFamily: "Apple Chancery, cursive",
        justifyContent: 'center',
        marginStart: 10,
        marginTop: 5

    },
    imageStyle: 
    {
        flex: 1,
        height: 200,
    },
    headerViewStyle: 
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
    },
})
