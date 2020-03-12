import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import {connect} from 'react-redux'
import ProjectItem from './ProjectItem'
import {getProjectsAction} from '../actions/projects-action';
import {Spinner} from '../common';
import {Actions} from 'react-native-router-flux'

class ProjectsList extends Component {

  componentWillMount(){
    this.props.getProjectsAction(this.props.developerId, this.props.user.sessionId)
  }

    renderItem(project){
        return <ProjectItem onClick = {(project) => Actions.projectDiscussion({project: project, title: project.name})}  project = {project.item}/>
    }

    renderSeparator(){
      return <View style={{ margin: 10 }}/>
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
        console.log(this.props.projects)
        return(
          <FlatList
          data={this.props.projects}
          renderItem = {this.renderItem}
          keyExtractor= {(project) => '' + project.id}
          ItemSeparatorComponent= {this.renderSeparator}
        />
        )
      }
    }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderListWithLoading()}
      </View>
    );
  }
}

const mapStateToProps = ({projRed , auth}) => {
const {projects, loading, error} = projRed
const {user} = auth
    return {projects: projects, error: error, loading: loading, user: user}
}

export default connect(mapStateToProps, {getProjectsAction})(ProjectsList);
