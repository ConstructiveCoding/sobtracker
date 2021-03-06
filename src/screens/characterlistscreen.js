/* @flow */

import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SafeAreaView } from 'react-navigation';

import CharacterListSelector from '../selectors/characterListSelector';

import CharacterList from '../components/characterList';
import Strings from '../language/strings';

import CharacterListStyles from '../theme/standard/components/characterList.styles';

import { loadCharacter } from '../actions/character';

type CharacterListScreenProps = {
  characterList: Array<any>,
  loadCharacter: Function,
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
    this.selectCharacter = this.selectCharacter.bind(this);
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

  selectCharacter(characterId) {
    this.props.loadCharacter(characterId);
    this.props.navigation.navigate('CharacterScreen');
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CharacterList
          style={CharacterListStyles.standard}
          characters={this.props.characterList}
          loadCharacter={this.selectCharacter}
        />
      </SafeAreaView>
    );
  }
}

const actions = {
  loadCharacter,
};

function mapStateToProps(state) {
  const characterList = CharacterListSelector(state.character);

  return {
    characterList,
  };
}

export default connect(
  mapStateToProps,
  actions
)(CharacterListScreen);
