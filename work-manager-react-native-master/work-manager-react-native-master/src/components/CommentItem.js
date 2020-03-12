import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {CardSection,Card}  from '../common'

export default class CommentItem extends Component {

  render() {
    const {messageBody, dateCreated, commenterName, commenterMobile} = this.props.comment
    //const {onClick} = this.props   //You can setup clicks here if you're going to implement 'Likes' features.
    const {projectImageStyle, headerViewStyle, nameStyle, commentParentStyle, bodyStyle, cardStyle} = styles
    return (
        <TouchableWithoutFeedback>
            <View style={commentParentStyle}>
                <View>
                    <Image style={projectImageStyle} source = {require('../../assets/profile_icon.png')}/>
                </View>
                <Card style={cardStyle}>
                    <View style={headerViewStyle}>
                        <View>
                            <Text style={nameStyle}>{commenterName}</Text><Text style={{fontSize: 11}}>{commenterMobile}</Text>
                        </View>
                        <View>
                            <Text style={bodyStyle}>{messageBody}</Text>
                        </View>
                    </View>
                </Card>
        </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
    commentParentStyle:
    {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    projectImageStyle: 
    {
        width: 40,
        height: 40,
    },
    nameStyle:
    {
        fontSize: 15,
        color: '#000',
        fontWeight: '500',
        justifyContent: 'center',
    },
    bodyStyle:
    {
        fontSize: 13,
        color: 'grey',
        fontWeight: '500',
        justifyContent: 'center',
        marginStart: 10,
        marginTop: 5,
        marginEnd: 5
    },
    headerViewStyle: 
    {
        flexDirection: 'column',
        padding: 8,
        
    },
    cardStyle:
    {
    }
})
