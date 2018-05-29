import React, { Component } from 'react';

import { Button, Text, TouchableOpacity, View } from 'react-native';

import CharacterList from '../components/characterList';
import Strings from '../language/strings';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

class CharacterListScreen extends Component {
  static navigationOptions = {
    title: Strings.characterTitle,
    headerRight: (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('CharacterCreation')}
      >
        <Icon name="circle-with-plus" />
      </TouchableOpacity>
    ),
  };

  render(props) {
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('CharacterCreation')}
        />
        <CharacterList
          characters={[
            { name: 'J Bowler' },
            { name: 'Evo' },
            { name: 'FDeppy' },
            { name: 'century24' },
          ]}
        />
      </View>
    );
  }
}

export default CharacterListScreen;
