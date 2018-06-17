import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import CreateCharacter from '../components/characterCreation/';
import CreateCharacterStyles from '../theme/standard/components/createCharacter.styles';

import { createCharacter } from '../actions/character';

import Strings from '../language/strings';

class CharacterCreationScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: Strings.createCharacter,
    };
  };

  constructor(props) {
    super(props);

    this.createCharacter = this.createCharacter.bind(this);
  }

  createCharacter(characterName: string, characterClass: string, characterGender: string) {
    this.props.createCharacter({
      name: characterName,
      class: characterClass,
      gender: characterGender
    });

    this.props.navigation.pop();
  }

  render() {
    return (
      <CreateCharacter
        style={CreateCharacterStyles.standard}
        createCharacter={this.createCharacter}
      />
    );
  }
}

const actions = {
  createCharacter,
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, actions)(CharacterCreationScreen);
