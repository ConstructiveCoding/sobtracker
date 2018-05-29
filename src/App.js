/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import CharacterListScreen from './screens/characterlistscreen';
import CharacterCreationScreen from './screens/characterCreationScreen';

type Props = {};

export default createStackNavigator(
    {
    CharacterList: { screen: CharacterListScreen },
      CharacterCreation: { screen: CharacterCreationScreen },
  },
    {
      initialRouteName: 'CharacterList',
    }
);
