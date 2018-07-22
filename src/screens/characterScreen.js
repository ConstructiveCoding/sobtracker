/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { prepareCalculator } from '../actions/calculator';

import CharacterDetailsStyles from '../theme/standard/components/characterDetails.styles';
import CharacterDetails from '../components/character/characterDetails';

type CharacterScreenProps = {
  character: any,
};

const CharacterScreen = (props: CharacterScreenProps) => (
  <View>
    <CharacterDetails
      {...props.character}
      style={CharacterDetailsStyles.standard}
      editXP={() => {
        props.prepareCalculator(props.character.xp, 'xp');
        props.navigation.navigate('Calculator');
      }}
      editGold={() => {
        props.prepareCalculator(props.character.gold, 'gold');
        props.navigation.navigate('Calculator');
      }}
      editLevel={() => {
        props.prepareCalculator(props.character.level, 'level');
        props.navigation.navigate('Calculator');
      }}
      editDarkStone={() => {
        props.prepareCalculator(props.character.darkStone, 'darkStone');
        props.navigation.navigate('Calculator');
      }}
      editInitiative={() => {
        props.prepareCalculator(props.character.initiative, 'initiative');
        props.navigation.navigate('Calculator');
      }}
      editCorruption={() => {
        props.prepareCalculator(props.character.corruption, 'corruption');
        props.navigation.navigate('Calculator');
      }}
      editGrit={() => {
        props.prepareCalculator(props.character.grit, 'grit');
        props.navigation.navigate('Calculator');
      }}
    />
  </View>
);

function mapStateToProps(state) {
  return {
    character: state.character.selectedCharacter,
  };
}

const actions = {
  prepareCalculator,
};

export default connect(
  mapStateToProps,
  actions
)(CharacterScreen);
