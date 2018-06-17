import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import CharacterList from '../components/characterList';
import Strings from '../language/strings';

import CharacterListStyles from '../theme/standard/components/characterList.styles';

type CharacterListScreenProps = {
  characterList: Array<any>,
};

class CharacterListScreen extends Component<CharacterListScreenProps> {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: Strings.characterTitle,
      headerRight: (
        <TouchableOpacity onPress={params.addCharacter}>
          <Icon
            style={CharacterListStyles.standard.addIcon}
            testID="add-character-button"
            name="plus-circle"
          />
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

  render() {
    console.log(`CharacterListStyles ${CharacterListStyles}`);

    return (
      <View style={{ flex: 1 }}>
        <CharacterList
          style={CharacterListStyles.standard}
          characters={this.props.characterList}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('Mapping state', state);
  return {
    characterList: state.character.characterList,
  };
}

export default connect(mapStateToProps)(CharacterListScreen);
