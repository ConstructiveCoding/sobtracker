/* @flow */

import React from 'react';

import { connect } from 'react-redux';

import { Text, View } from 'react-native';

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
    />
  </View>
);

function mapStateToProps(state) {
  return {
    character: state.character.selectedCharacter,
  };
}

export default connect(mapStateToProps)(CharacterScreen);
