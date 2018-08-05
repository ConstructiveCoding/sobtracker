import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

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
  editXP,
  editGold,
  editLevel,
  editDarkStone,
  editInitiative,
  editCorruption,
  editGrit,
}) => (
  <View style={style.characterDetailsContainer}>
    <View style={style.characterNameContainer}>
      <Text testID="character-name" style={style.characterName}>
        {name}
      </Text>
    </View>
    <View style={style.characterMinorDetailsContainer}>
      <View style={style.characterGenderContainer}>
        <Text style={style.characterGenderTitle}>
          {Strings.characterGender}
        </Text>
        <Text style={style.characterGender}>{gender}</Text>
      </View>
      <View style={style.characterClassContainer}>
        <Text style={style.characterClassTitle} testID="character-class">
          {Strings.characterClass}
        </Text>
        <Text style={style.characterClass}>{characterClass}</Text>
      </View>
    </View>
    <View style={style.characterDetailRow}>
      <TouchableOpacity
        testID="xp"
        style={style.characterDetailRowButton}
        onPress={editXP}
      >
        <Text style={style.characterDetailTitle}>{Strings.experience}</Text>
        <Text style={style.characterDetailValue}>{xp}</Text>
      </TouchableOpacity>
    </View>
    <View style={style.characterDetailRow}>
      <TouchableOpacity
        testID="level"
        style={style.characterDetailRowButton}
        onPress={editLevel}
      >
        <Text style={style.characterDetailTitle}>{Strings.characterLevel}</Text>
        <Text style={style.characterDetailValue}>{level}</Text>
      </TouchableOpacity>
    </View>
    <View style={style.characterDetailRow}>
      <TouchableOpacity
        testID="gold"
        style={style.characterDetailRowButton}
        onPress={editGold}
      >
        <Text style={style.characterDetailTitle}>{Strings.gold}</Text>
        <Text style={style.characterDetailValue}>{gold}</Text>
      </TouchableOpacity>
    </View>
    <View style={style.characterDetailRow}>
      <TouchableOpacity
        testID="dark-stone"
        style={style.characterDetailRowButton}
        onPress={editDarkStone}
      >
        <Text style={style.characterDetailTitle}>{Strings.darkStone}</Text>
        <Text style={style.characterDetailValue}>{darkStone}</Text>
      </TouchableOpacity>
    </View>
    <View style={style.characterDetailRow}>
      <TouchableOpacity
        testID="initiative"
        style={style.characterDetailRowButton}
        onPress={editInitiative}
      >
        <Text style={style.characterDetailTitle}>{Strings.initiative}</Text>
        <Text style={style.characterDetailValue}>{initiative}</Text>
      </TouchableOpacity>
    </View>
    <View style={style.characterDetailRow}>
      <TouchableOpacity
        testID="corruption"
        style={style.characterDetailRowButton}
        onPress={editCorruption}
      >
        <Text style={style.characterDetailTitle}>{Strings.corruption}</Text>
        <Text style={style.characterDetailValue}>{corruption}</Text>
      </TouchableOpacity>
    </View>
    <View style={style.characterDetailRow}>
      <TouchableOpacity
        testID="grit"
        style={style.characterDetailRowButton}
        onPress={editGrit}
      >
        <Text style={style.characterDetailTitle}>{Strings.grit}</Text>
        <Text style={style.characterDetailValue}>{grit}</Text>
      </TouchableOpacity>
    </View>
  </View>
);
