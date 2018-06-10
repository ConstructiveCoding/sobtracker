import React, { Component } from 'react';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import CreateCharacter from '../components/characterCreation/';
import CreateCharacterStyles from '../theme/standard/components/createCharacter.styles';

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
  }

  createCharacter() {
    // validation
    // this.props.createCharacter();
  }

  render() {
    return (
      <CreateCharacter
        style={CreateCharacterStyles.standard}
        createCharacter={() => true}
      />
    );
  }
}

export default CharacterCreationScreen;
