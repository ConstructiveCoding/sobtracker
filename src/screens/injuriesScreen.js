/* @flow */

import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SafeAreaView } from 'react-navigation';

import { editInjury } from '../actions/injuries';

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
  }

  componentWillMount() {
    this.props.navigation.setParams({ addInjury: this.addInjury });
  }

  componentWillUnmount() {
    this.props.navigation.setParams({ addInjury: undefined });
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
};

export default connect(
  mapStateToProps,
  actions
)(InjuriesScreen);
