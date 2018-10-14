/* @flow */

import React from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SafeAreaView } from 'react-navigation';

import { deleteAbility, editAbility } from '../actions/abilities';

// TODO: Convert this into a generic style collection
import ItemScreenStyles from '../theme/standard/screens/itemScreen.styles';

import Strings from '../language/strings';

class AbilitiesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: Strings.abilities,
      headerRight: (
        <TouchableOpacity onPress={params.addAbility}>
          <Icon
            style={ItemScreenStyles.standard.addIcon}
            testID="add-ability-button"
            name="plus-circle"
          />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.addAbility = this.addAbility.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({ addAbility: this.addAbility });
  }

  componentWillUnmount() {
    this.props.navigation.setParams({ addAbility: undefined });
  }

  confirmDelete(abilityId) {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete this? You cannot undo it!',
      [
        { text: 'Cancel' },
        { text: 'Delete', onPress: () => this.props.deleteAbility(abilityId) },
      ]
    );
  }

  addAbility() {
    this.props.navigation.navigate('AbilityCreation');
  }

  editAbility(abilityId) {
    this.props.editAbility(abilityId);
    this.props.navigation.navigate('AbilityCreation');
  }

  render() {
    const styles = ItemScreenStyles.standard;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.props.abilities}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.editAbility(item.id)}>
              <View style={styles.row}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemType}>{item.skillTrack}</Text>
              </View>
              <TouchableOpacity onPress={() => this.confirmDelete(item.id)}>
                <Icon name="remove" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}
function mapStateToProps(state) {
  const character = state.character.selectedCharacter;
  const abilities = character.abilities.map(
    abilityId => state.abilities.byId[abilityId]
  );

  return {
    abilities,
  };
}

const actions = {
  editAbility,
  deleteAbility,
};

export default connect(
  mapStateToProps,
  actions
)(AbilitiesScreen);
