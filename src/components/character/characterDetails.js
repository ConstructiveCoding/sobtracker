import React from 'react';

import { Text, View } from 'react-native';

import Strings from '../../language/strings';

export default ({
  name,
  characterClass,
  gender,
  level,
  gold,
  darkStone,
  initiative,
  corruption,
  grit,
  xp,
  style,
}) => (
  <View style={style.characterDetailsContainer}>
    <View style={style.characterNameContainer}>
      <Text style={style.characterName}>{name}</Text>
    </View>
    <View style={style.characterMinorDetailsContainer}>
      <View style={style.characterGenderContainer}>
        <Text style={style.characterGenderTitle}>
          {Strings.characterGender}
        </Text>
        <Text style={style.characterGender}>{gender}</Text>
      </View>
      <View style={style.characterClassContainer}>
        <Text style={style.characterClassTitle} testID="character-name">
          {Strings.characterClass}
        </Text>
        <Text style={style.characterClass}>{characterClass}</Text>
      </View>
    </View>
    <View style={style.characterDetailRow}>
      <Text style={style.characterDetailTitle}>{Strings.experience}</Text>
      <Text style={style.characterDetailValue}>{xp}</Text>
    </View>
    <View style={style.characterDetailRow}>
      <Text style={style.characterDetailTitle}>{Strings.characterLevel}</Text>
      <Text style={style.characterDetailValue}>{level}</Text>
    </View>
    <View style={style.characterDetailRow}>
      <Text style={style.characterDetailTitle}>{Strings.gold}</Text>
      <Text style={style.characterDetailValue}>{gold}</Text>
    </View>
    <View style={style.characterDetailRow}>
      <Text style={style.characterDetailTitle}>{Strings.darkStone}</Text>
      <Text style={style.characterDetailValue}>{darkStone}</Text>
    </View>
    <View style={style.characterDetailRow}>
      <Text style={style.characterDetailTitle}>{Strings.initiative}</Text>
      <Text style={style.characterDetailValue}>{initiative}</Text>
    </View>
    <View style={style.characterDetailRow}>
      <Text style={style.characterDetailTitle}>{Strings.corruption}</Text>
      <Text style={style.characterDetailValue}>{corruption}</Text>
    </View>
    <View style={style.characterDetailRow}>
      <Text style={style.characterDetailTitle}>{Strings.grit}</Text>
      <Text style={style.characterDetailValue}>{grit}</Text>
    </View>
  </View>
);
