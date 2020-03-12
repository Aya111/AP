import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Card extends Component {

  render() {
    return (
      <View style={styles.cardStyle}>
        {this.props.children}
      </View>
    );
  }
}

export { Card }

const styles = StyleSheet.create({
  cardStyle:
  {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#ddd',
    borderBottomColor: 0,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 2,
    margin: 5,
    paddingBottom: 7,
  }
})