/* @flow */

import React from 'react';
import { Text, View } from 'react-native';

import Strings from '../language/strings';

const ItemsScreen = props => (
  <View>
    <Text>{Strings.items}</Text>
  </View>
);

export default ItemsScreen;
