/* @flow */

import React from 'react';
import { Text, View } from 'react-native';

import Strings from '../language/strings';

class InjuriesScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: Strings.injuries,
    };
  };

  render() {
    return (
      <View>
        <Text>{Strings.injuries}</Text>
      </View>
    );
  }
}

export default InjuriesScreen;
