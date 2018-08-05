/* @flow */

import React from 'react';
import { Text, View } from 'react-native';

import Strings from '../language/strings';

class AbilitiesScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: Strings.abilities,
    };
  };

  render() {
    return (
      <View>
        <Text>{Strings.abilities}</Text>
      </View>
    );
  }
}

export default AbilitiesScreen;
