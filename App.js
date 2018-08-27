import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Lista from './src/Lista';
import Receita from './src/Receita';

const navegador = createStackNavigator({
  Lista:{
    screen:Lista,
    navigationOptions: {
      title:'App de Receitas',
      headerTitleStyle:{
        textAlign: 'center',
        flex:1
      }
    }
  },
  Receita:{
    screen:Receita,
    navigationOptions:{
      title: 'Receita',
      headerTitleStyle:{
        textAlign: 'center',
        flex:1
      },
      header: null
    }
  }
});

export default navegador;
