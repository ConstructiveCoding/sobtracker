/* @flow */

import React from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SafeAreaView } from 'react-navigation';

import { deleteItem, editItem } from '../actions/items';

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
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({ addItem: this.addItem });
  }

  componentWillUnmount() {
    this.props.navigation.setParams({ addItem: undefined });
  }

  confirmDelete(itemID) {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete this? You cannot undo it!',
      [
        { text: 'Cancel' },
        { text: 'Delete', onPress: () => this.props.deleteItem(itemID) },
      ]
    );
  }

  addItem() {
    this.props.navigation.navigate('ItemCreation');
  }

  editItem(itemId) {
    this.props.editItem(itemId);
    this.props.navigation.navigate('ItemCreation');
  }

  render() {
    const styles = ItemScreenStyles.standard;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.props.items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.editItem(item.id)}>
              <View style={styles.row}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemType}>{item.type}</Text>
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
  const items = character.items.map(itemId => state.items.byId[itemId]);

  return {
    items,
  };
}

const actions = {
  editItem,
  deleteItem,
};

export default connect(
  mapStateToProps,
  actions
)(ItemsScreen);
