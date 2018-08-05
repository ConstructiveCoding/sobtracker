/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View } from 'react-native';

import { prepareCalculator } from '../actions/calculator';

import CharacterDetailsStyles from '../theme/standard/components/characterDetails.styles';
import CharacterDetails from '../components/character/characterDetails';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Strings from '../language/strings';

type CharacterScreenProps = {
  character: any,
};

class CharacterScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: Strings.character,
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CharacterList');
          }}
        >
          <Icon
            style={CharacterDetailsStyles.standard.characterListIcon}
            testID="return-to-characters-button"
            name="users"
          />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return (
      <View>
        <CharacterDetails
          {...this.props.character}
          style={CharacterDetailsStyles.standard}
          editXP={() => {
            this.props.prepareCalculator(this.props.character.xp, 'xp');
            this.props.navigation.navigate('Calculator');
          }}
          editGold={() => {
            this.props.prepareCalculator(this.props.character.gold, 'gold');
            this.props.navigation.navigate('Calculator');
          }}
          editLevel={() => {
            this.props.prepareCalculator(this.props.character.level, 'level');
            this.props.navigation.navigate('Calculator');
          }}
          editDarkStone={() => {
            this.props.prepareCalculator(
              this.props.character.darkStone,
              'darkStone'
            );
            this.props.navigation.navigate('Calculator');
          }}
          editInitiative={() => {
            this.props.prepareCalculator(
              this.props.character.initiative,
              'initiative'
            );
            this.props.navigation.navigate('Calculator');
          }}
          editCorruption={() => {
            this.props.prepareCalculator(
              this.props.character.corruption,
              'corruption'
            );
            this.props.navigation.navigate('Calculator');
          }}
          editGrit={() => {
            this.props.prepareCalculator(this.props.character.grit, 'grit');
            this.props.navigation.navigate('Calculator');
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    character: state.character.selectedCharacter,
  };
}

const actions = {
  prepareCalculator,
};

export default connect(
  mapStateToProps,
  actions
)(CharacterScreen);
