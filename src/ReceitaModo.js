import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default class ReceitaModo extends Component {

  static navigationOptions = {
    tabBarLabel:'Preparo'
  }

  render() {
    return (
      <View style={styles.areaTab}>
        <FlatList data={this.props.screenProps.modo} renderItem={({item}) => <Text style={styles.ingItem}>{item.txt}</Text>} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  areaTab:{
    flex:1,
    margin:10
  },
  ingItem:{
    fontSize: 16,
    marginBottom: 10
  }
});
