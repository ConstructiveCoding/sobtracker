import React from 'react';

import { Text, View } from 'react-native';

import Strings from '../../language/strings';

export default ({ name, characterClass, gender }) => (
  <View>
    <View>
      <Text>{Strings.characterName}</Text>
      <Text>{name}</Text>
    </View>
    <View>
      <Text testID="character-name">{Strings.characterClass}</Text>
      <Text>{characterClass}</Text>
    </View>
    <View>
      <Text>{Strings.characterGender}</Text>
      <Text>{gender}</Text>
    </View>
  </View>
);
