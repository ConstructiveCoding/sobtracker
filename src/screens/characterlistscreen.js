import React, { Component } from 'react';

import { Button, Text, TouchableOpacity, View } from 'react-native';

import CharacterList from '../components/characterList';
import Strings from '../language/strings';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

class CharacterListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: Strings.characterTitle,
      headerRight: (
        <TouchableOpacity onPress={params.addCharacter}>
          <Icon testID="add-character-button" name="plus-circle" />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.addCharacter = this.addCharacter.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({ addCharacter: this.addCharacter });
  }

  componentWillUnmount() {
    this.props.navigation.setParams({ addCharacter: undefined });
  }

  addCharacter() {
    this.props.navigation.navigate('CharacterCreation');
  }

  render(props) {
    return (
      <View style={{ flex: 1 }}>
        <CharacterList
          characters={[
            { name: 'J Bowler', id: 1 },
            { name: 'Evo', id: 2 },
            { name: 'FDeppy', id: 3 },
            { name: 'century24', id: 4 },
          ]}
        />
      </View>
    );
  }
}

export default CharacterListScreen;
