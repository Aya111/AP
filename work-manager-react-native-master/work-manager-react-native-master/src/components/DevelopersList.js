import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import {connect} from 'react-redux'
import DeveloperItem from './DeveloperItem'
import {getDevelopersAction} from '../actions/developers-action';
import {loginAction} from '../actions/auth-action';
import {Spinner} from '../common';
import {Actions} from 'react-native-router-flux'

class DevelopersList extends Component {

  componentDidMount(){
    console.log(this.props.user)
    this.props.getDevelopersAction(this.props.user.sessionId)
  }

    renderItem(developer){
        return <DeveloperItem onClick = {(id, name) => {
          Actions.projectsList({developerId: id, title: name})
        }
      }
          developer = {developer.item}/>
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
        console.log('I got Developers ' + JSON.stringify(this.props.developers))
        return(
          <FlatList
          data={this.props.developers}
          renderItem = {this.renderItem}
          keyExtractor= {developer => '' + developer.id}
          ItemSeparatorComponent= {this.renderSeparator}
        />
        )
      }
    }

  render() {
    return (
      <View style={{flex: 1 , marginTop: 5}}>
        {this.renderListWithLoading()}
      </View>
    );
  }
}

const mapStateToProps = ({devRed , auth}) => {
const {developers, loading, error} = devRed
const {user} = auth
    return {developers: developers, error: error, loading: loading, user: user}
}

export default connect(mapStateToProps, {getDevelopersAction, loginAction})(DevelopersList);
