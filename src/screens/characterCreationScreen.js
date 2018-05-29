import React, { Component } from 'react';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import Strings from '../language/strings';

type CharacterCreationScreenProps = {
  createCharacter: Function,
};

type CharacterCreationScreenState = {
  name: string,
  class: string,
};

class CharacterCreationScreen extends Component<
  CharacterCreationScreenProps,
  CharacterCreationScreenState
> {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      class: '',
    };

    this.createCharacter = this.createCharacter.bind(this);
  }

  createCharacter() {
    // validation
    this.props.createCharacter();
  }

  render() {
    return (
      <View>
        <View>
          <Text>{Strings.characterName}</Text>
          <TextInput />
        </View>
        <View>
          <Text>{Strings.characterClass}</Text>
          <TextInput />
        </View>
        <TouchableOpacity onPress={this.createCharacter}>
          <Text>{Strings.createCharacter}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CharacterCreationScreen;
