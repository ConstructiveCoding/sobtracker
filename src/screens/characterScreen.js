/* @flow */

import React from 'react';

import { connect } from 'react-redux';

import { Text, View } from 'react-native';

import CharacterDetails from '../components/character/characterDetails';

type CharacterScreenProps = {
  character: any,
};

const CharacterScreen = (props: CharacterScreenProps) => (
  <View>
    <CharacterDetails {...props.character} />
  </View>
);

function mapStateToProps(state) {
  return {
    character: state.character.selectedCharacter,
  };
}

export default connect(mapStateToProps)(CharacterScreen);
