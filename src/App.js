/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';

import Strings from './language/strings';

import CharacterListScreen from './screens/characterListScreen';
import CharacterCreationScreen from './screens/characterCreationScreen';
import CharacterScreen from './screens/characterScreen';
import AbilitiesScreen from './screens/abilitiesScreen';
import AbilityCreation from './screens/createAbilityScreen';
import AttributesScreen from './screens/attributesScreen';
import InjuriesScreen from './screens/injuriesScreen';
import InjuryCreation from './screens/createInjuryScreen';
import ItemsScreen from './screens/itemsScreen';
import ItemCreation from './screens/createItemScreen';

import StorybookUI from '../storybook';

import CalculatorScreen from './screens/calculatorScreen';

const CharacterDetailsStack = createStackNavigator(
  {
    Home: { screen: CharacterScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

const AbilitiesStack = createStackNavigator(
  {
    AbilitiesHome: { screen: AbilitiesScreen },
  },
  {
    initialRouteName: 'AbilitiesHome',
  }
);

const AttributesStack = createStackNavigator(
  {
    AttributesHome: { screen: AttributesScreen },
  },
  {
    initialRouteName: 'AttributesHome',
  }
);

const InjuriesStack = createStackNavigator(
  {
    InjuriesHome: { screen: InjuriesScreen },
  },
  {
    initialRouteName: 'InjuriesHome',
  }
);

const ItemsStack = createStackNavigator(
  {
    ItemsHome: { screen: ItemsScreen },
  },
  {
    initialRouteName: 'ItemsHome',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Character: CharacterDetailsStack,
    Attributes: AttributesStack,
    Items: ItemsStack,
    Injuries: InjuriesStack,
    Abilities: AbilitiesStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'Character': {
            return (
              <Text
                testID="character-tab"
                style={{ color: tintColor, textAlign: 'center' }}
                adjustsFontSizeToFit
                minimumFontScale={0.5}
                numberOfLines={1}
              >
                {Strings.character}
              </Text>
            );
          }
          case 'Attributes': {
            return (
              <Text
                testID="attributes-tab"
                style={{ color: tintColor, textAlign: 'center' }}
                adjustsFontSizeToFit
                minimumFontScale={0.5}
                numberOfLines={1}
              >
                {Strings.attributes}
              </Text>
            );
          }
          case 'Items': {
            return (
              <Text
                testID="items-tab"
                style={{ color: tintColor, textAlign: 'center' }}
                adjustsFontSizeToFit
                minimumFontScale={0.5}
                numberOfLines={1}
              >
                {Strings.items}
              </Text>
            );
          }
          case 'Injuries': {
            return (
              <Text
                testID="injuries-tab"
                style={{ color: tintColor, textAlign: 'center' }}
                adjustsFontSizeToFit
                minimumFontScale={0.5}
                numberOfLines={1}
              >
                {Strings.injuries}
              </Text>
            );
          }
          case 'Abilities': {
            return (
              <Text
                testID="abilities-tab"
                style={{ color: tintColor, textAlign: 'center' }}
                adjustsFontSizeToFit
                minimumFontScale={0.5}
                numberOfLines={1}
              >
                {Strings.abilities}
              </Text>
            );
          }
          default:
            return (
              <Text
                style={{ color: tintColor, textAlign: 'center' }}
                adjustsFontSizeToFit
                minimumFontScale={0.5}
                numberOfLines={1}
              >
                {Strings.character}
              </Text>
            );
        }
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;

        switch (routeName) {
          case 'Character': {
            icon = <FontAwesomeIcon name="user" size={25} color={tintColor} />;
            break;
          }
          case 'Attributes': {
            icon = <OcticonsIcon name="graph" size={25} color={tintColor} />;
            break;
          }
          case 'Items': {
            icon = (
              <FontAwesomeIcon name="suitcase" size={25} color={tintColor} />
            );
            break;
          }
          case 'Injuries': {
            icon = (
              <FontAwesome5Icon
                name="briefcase-medical"
                size={25}
                color={tintColor}
              />
            );
            break;
          }
          case 'Abilities': {
            icon = (
              <FontAwesomeIcon name="superpowers" size={25} color={tintColor} />
            );
            break;
          }
          default:
            icon = <FontAwesomeIcon name="user" size={25} color={tintColor} />;
        }

        return icon;
      },
    }),
  }
);

const CharacterListStack = createStackNavigator(
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

const MainAppStack = createStackNavigator(
  {
    CharacterScreen: {
      screen: TabNavigator,
    },
    Calculator: {
      screen: CalculatorScreen,
    },
    ItemCreation: {
      screen: ItemCreation,
    },
    InjuryCreation: {
      screen: InjuryCreation,
    },
    AbilityCreation: {
      screen: AbilityCreation,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createSwitchNavigator({
  CharacterList: CharacterListStack,
  CharacterDetails: MainAppStack,
});
