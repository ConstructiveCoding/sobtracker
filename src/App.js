/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import CharacterListScreen from './screens/characterListScreen';
import CharacterCreationScreen from './screens/characterCreationScreen';

import StorybookUI from '../storybook';

export default createStackNavigator(
  {
    CharacterList: { screen: CharacterListScreen },
    CharacterCreation: { screen: CharacterCreationScreen },
    StorybookUI: { screen: StorybookUI },
  },
  {
    initialRouteName: 'CharacterList',
    // initialRouteName: 'StorybookUI',
  }
);
