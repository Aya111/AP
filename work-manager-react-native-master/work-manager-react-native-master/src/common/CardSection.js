import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class CardSection extends Component {

  render() {
    return (
      <View style={styles.cardSectionStyle}>
        {this.props.children}
      </View>
    );
  }
}

export { CardSection }

const styles = StyleSheet.create({
    cardSectionStyle:
    {
        flex:1,
      borderBottomColor: 1,
      padding: 5,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative',
      margin: 5,
    }
  })