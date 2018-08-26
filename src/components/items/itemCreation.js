/* @flow */

import React from 'react';

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import CreateItemStyles from '../../theme/standard/components/createItem.style';
import Item from '../../models/item';
import Modifier from '../../models/modifier';
import Strings from '../../language/strings';

import Attribute from '../attribute';
import AttributeStyles from '../../theme/standard/components/attribute.style';

type ItemCreationState = {
  name: string,
  weight: number,
  keywords: Array<string>,
  location: string,
  cost: number,
  modifiers: Array<Modifier>,
  description: string,
};

const initialState = {
  name: '',
  weight: 0,
  keywords: [],
  location: 'Mine',
  cost: 0,
  modifiers: [],
  description: '',
  selectedModifierId: undefined,
};

export default class ItemCreation extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.validateForm = this.validateForm.bind(this);
    this.onAddNewModifier = this.onAddNewModifier.bind(this);

    this.createModifierDecrement = this.createModifierDecrement.bind(this);
    this.createModifierIncrement = this.createModifierIncrement.bind(this);
    this.startEditingModifier = this.startEditingModifier.bind(this);
  }

  onAddNewModifier() {
    const newModifier = new Modifier('agility', 0);
    const modifiers = this.state.modifiers.concat([newModifier]);
    this.setState({
      modifiers,
    });
  }

  validateForm() {
    const item = new Item(
      this.state.name,
      this.state.type,
      this.state.weight,
      this.state.keywords,
      this.state.location,
      this.state.cost,
      this.state.modifiers,
      this.state.description
    );
    this.props.onSave(item);
  }

  createModifierDecrement(modifierId) {
    return () => {
      const modifiers = [...this.state.modifiers];
      const mod = modifiers.find(modifier => modifier.id === modifierId);
      mod.modification -= 1;

      this.setState({
        modifiers,
      });
    };
  }

  createModifierIncrement(modifierId) {
    return () => {
      const modifiers = [...this.state.modifiers];
      const mod = modifiers.find(modifier => modifier.id === modifierId);
      mod.modification += 1;

      this.setState({
        modifiers,
      });
    };
  }

  startEditingModifier(modifierId) {
    this.setState({
      selectedModifierId:
        this.state.selectedModifierId === modifierId ? undefined : modifierId,
    });
  }

  render() {
    const styles = CreateItemStyles.standard;
    return (
      <ScrollView testID="item-scroll" style={styles.formContainer}>
        <View style={styles.formHeader}>
          <Text style={styles.formHeaderText}>{Strings.newItem}</Text>
        </View>
        <View style={styles.formRow}>
          <Text testID={'item-name-label'} style={styles.formLabel}>
            {Strings.name}
          </Text>
          <TextInput
            testID="item-name-entry"
            style={styles.formDataEntry}
            value={this.state.name}
            onChangeText={newValue => {
              this.setState({ name: newValue });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.weight}</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.formDataEntry}
            value={this.state.weight.toString()}
            onChangeText={newValue => {
              let changeValue = Number(newValue);
              if (Number.isNaN(changeValue)) {
                changeValue = 0;
              }

              this.setState({ weight: changeValue });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.keywords}</Text>
          <TextInput />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.location}</Text>
          <TextInput
            style={styles.formDataEntry}
            value={this.state.location}
            onChangeText={newValue => {
              this.setState({ location: newValue });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.cost}</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.formDataEntry}
            value={this.state.cost.toString()}
            onChangeText={newValue => {
              let costValue = Number(newValue);
              if (Number.isNaN(costValue)) {
                costValue = 0;
              }

              this.setState({ cost: costValue });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.modifiers}</Text>
          <TouchableOpacity onPress={this.onAddNewModifier}>
            <View>
              <Icon style={{ height: 20, width: 20 }} name="plus" />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={this.state.modifiers}
            extraData={this.state.selectedModifierId}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Attribute
                increment={this.createModifierIncrement(item.id)}
                decrement={this.createModifierDecrement(item.id)}
                startEditing={() => {
                  this.startEditingModifier(item.id);
                }}
                editing={this.state.selectedModifierId === item.id}
                label={item.attribute}
                value={item.modification}
                attribute={item.attribute}
                style={
                  this.state.selectedModifierId === item.id
                    ? AttributeStyles.selected
                    : AttributeStyles.standard
                }
              />
            )}
          />
        </View>

        <View style={styles.formRow}>
          <Text style={styles.formLabel}>{Strings.description}</Text>
          <TextInput
            style={styles.formDataEntry}
            value={this.state.description}
            onChangeText={newValue => {
              this.setState({ description: newValue });
            }}
          />
        </View>
        <View style={styles.commandRow}>
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={this.props.onCancel}
            >
              <Text>{Strings.cancel}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.saveButtonContainer}>
            <TouchableOpacity
              testID="save-item"
              style={styles.saveButton}
              onPress={this.validateForm}
            >
              <Text>{Strings.save}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
