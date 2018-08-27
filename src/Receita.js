import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import ReceitaResumo from './ReceitaResumo';
import ReceitaIngredientes from './ReceitaIngredientes';
import ReceitaModo from './ReceitaModo';

const Abas = createMaterialTopTabNavigator ({
  ReceitaResumo:{
    screen:ReceitaResumo
  },
  ReceitaIngredientes:{
    screen:ReceitaIngredientes
  },
  ReceitaModo:{
    screen:ReceitaModo
  }
},{
  tabBarPosition:'top',
  tabBarOptions:{
    showIcon:false,
    style:{
      backgroundColor: '#EEEEEE'
    },
    labelStyle:{
      fontSize: 10,
      height: 47,
      lineHeight: 47
    },
    activeTintColor:'#333333',
    inactiveTintColor: '#CCCCCC'
  }
},{
  showIcon:true
});

export default class Receita extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight underlayColor="#CCCCCC" onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
            <Image source={require('../assets/images/back.png')} style={styles.backImage} />
          </TouchableHighlight>
          <Image source={{uri:this.props.navigation.state.params.imagem}} style={styles.receitaImagem} />
          <Abas screenProps={this.props.navigation.state.params} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  backImage:{
    width: 26,
    height: 26
  },
  backButton:{
    width: 26,
    height: 26,
    marginLeft: 10,
    marginTop: 5,
    zIndex: 99
  },
  receitaImagem:{
    height: 200,
    marginTop: -51
  }
});
