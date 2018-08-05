/* @flow */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SafeAreaView } from 'react-navigation';

import ItemScreenStyles from '../theme/standard/screens/itemScreen.styles';

import Strings from '../language/strings';

class ItemsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: Strings.items,
      headerRight: (
        <TouchableOpacity onPress={params.addItem}>
          <Icon
            style={ItemScreenStyles.standard.addIcon}
            testID="add-item-button"
            name="plus-circle"
          />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({ addItem: this.addItem });
  }

  componentWillUnmount() {
    this.props.navigation.setParams({ addItem: undefined });
  }

  addItem() {
    this.props.navigation.navigate('ItemCreation');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>{Strings.items}</Text>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(ItemsScreen);
