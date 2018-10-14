/* @flow */

import React from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SafeAreaView } from 'react-navigation';

import { deleteInjury, editInjury } from '../actions/injuries';

import InjuryScreenStyles from '../theme/standard/screens/injuryScreen.styles';

import Strings from '../language/strings';

class InjuriesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: Strings.injuries,
      headerRight: (
        <TouchableOpacity onPress={params.addInjury}>
          <Icon
            style={InjuryScreenStyles.standard.addIcon}
            testID="add-item-button"
            name="plus-circle"
          />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.addInjury = this.addInjury.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({ addInjury: this.addInjury });
  }

  componentWillUnmount() {
    this.props.navigation.setParams({ addInjury: undefined });
  }

  confirmDelete(injuryId) {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete this? You cannot undo it!',
      [
        { text: 'Cancel' },
        { text: 'Delete', onPress: () => this.props.deleteInjury(injuryId) },
      ]
    );
  }

  addInjury() {
    this.props.navigation.navigate('InjuryCreation');
  }

  editInjury(injuryId) {
    this.props.editInjury(injuryId);
    this.props.navigation.navigate('InjuryCreation');
  }

  render() {
    const styles = InjuryScreenStyles.standard;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.props.injuries}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.editInjury(item.id)}>
              <View style={styles.row}>
                <Text style={styles.injuryName}>{item.name}</Text>
                <Text style={styles.injuryType}>{`${item.type} (${
                  item.diceRoll
                })`}</Text>
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
  const injuries = character.injuries.map(
    itemId => state.injuries.byId[itemId]
  );

  return {
    injuries,
  };
}

const actions = {
  editInjury,
  deleteInjury,
};

export default connect(
  mapStateToProps,
  actions
)(InjuriesScreen);
