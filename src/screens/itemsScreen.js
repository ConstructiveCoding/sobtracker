/* @flow */

import React from 'react';
import { Text, View } from 'react-native';

import Strings from '../language/strings';

class ItemsScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: Strings.items,
    };
  };

  render() {
    return (
      <View>
        <Text>{Strings.items}</Text>
      </View>
    );
  }
}

export default ItemsScreen;
