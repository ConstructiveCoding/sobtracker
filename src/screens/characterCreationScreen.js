import React, { Component } from 'react';

import { connect } from 'react-redux';

import CreateCharacter from '../components/characterCreation';
import CreateCharacterStyles from '../theme/standard/components/createCharacter.styles';

import { createCharacter } from '../actions/character';

import Strings from '../language/strings';
import Character from '../models/character';

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

  createCharacter(
    characterName: string,
    characterClass: string,
    characterGender: string
  ) {
    const character = new Character(
      characterName,
      characterGender,
      characterClass
    );
    this.props.createCharacter(character);

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
};

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  actions
)(CharacterCreationScreen);
