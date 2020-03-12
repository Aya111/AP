import React, { Component } from 'react';
import { View, FlatList, StyleSheet ,Image, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import CommentItem from './CommentItem'
import {getCommentsAction, commentChangedAction, addCommentAction} from '../actions/comments-action';
import {Spinner, Card, CardSection} from '../common';

class ProjectDiscussion extends Component {

  componentWillMount(){
    const project = this.props.project
    this.props.getCommentsAction(project.id, this.props.user.sessionId)
  }

  onCommentChanged(text)
    {
        this.props.commentChangedAction(text)
    }

    renderItem(comment){
        return <CommentItem comment = {comment.item}/>
    }

    renderSeparator(){
      return <View style={{ margin: 10 }}/>
    }

    tryToSendComment()
    {
      if (this.props.newComment != '')
      {
        this.props.addCommentAction(
          this.props.project.id, 
          this.props.newComment,
          this.props.user.sessionId)
      }
    }

    renderListWithLoading()
    {
      if (this.props.loading)
      {
        return(
          <Spinner size='large' />
        )
      }
      else
      {
        return(
          <FlatList
          style={{flex: 1}}
          data={this.props.comments}
          renderItem = {this.renderItem}
          keyExtractor= {(comment) =>  '' + comment.id}
          ItemSeparatorComponent= {this.renderSeparator}
        />
        )
      }
    }

  render() {
    return (
      <View style={{flex: 1}}>
          <Card>
             <Image style={styles.imageStyle} source={{uri: this.props.project.path}}/>
         </Card>
        {this.renderListWithLoading()}

        <View style={styles.newCommentSectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={this.onCommentChanged.bind(this)}
              multiline={true}
              placeholder={'Comment'}>
              {this.props.newComment}
            </TextInput>

            <TouchableOpacity onPress={this.tryToSendComment.bind(this)}>
                  <Image style={styles.sendButtonStyle} source = {require('../../assets/send_icon.png')}/>
              </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({commentRed , auth}) => {
const {comments, loading, error, newComment} = commentRed
const {user} = auth
    return {comments: comments, newComment: newComment, error: error, loading: loading, user: user}
}

export default connect(mapStateToProps, {getCommentsAction, commentChangedAction, addCommentAction})(ProjectDiscussion);


const styles = StyleSheet.create({
    
    imageStyle: 
    {
        flex: 1,
        height: 300,
        padding: 10,
    },
    newCommentSectionStyle:
    {
      flex: 0.15,
      padding: 10,
      flexDirection: 'row',
      backgroundColor: '#F8F8F8',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 7,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#ddd',
      
    },
    sendButtonStyle:
    {
      height: 40,
      width: 40,
      
    },
    inputStyle:
    {
      flex: 1,
      marginHorizontal: 5,
      fontSize: 17,
      color: '#000',
      alignSelf: 'stretch',
      backgroundColor: 'white',
      borderWidth: 0.5,
      borderColor: '#ddd',
      padding: 3
    }
})
