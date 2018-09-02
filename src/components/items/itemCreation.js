/* @flow */

import React from 'react';

import {
  FlatList,
  Picker,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
  type: string,
};

const initialState = {
  name: '',
  weight: 0,
  keywords: [],
  location: 'Mine',
  cost: 0,
  modifiers: [],
  description: '',
  selectedModifier: undefined,
  selectedModifierId: undefined,
  isEditingModifierType: false,
  type: 'gear',
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
    this.updateModifierAttribute = this.updateModifierAttribute.bind(this);
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
    const selectedModifierId =
      this.state.selectedModifierId === modifierId ? undefined : modifierId;
    let selectedModifier;

    if (selectedModifierId) {
      selectedModifier = this.state.modifiers.find(
        modifier => modifier.id === selectedModifierId
      );
    }

    this.setState({
      selectedModifier,
      selectedModifierId,
    });
  }

  updateModifierAttribute(newAttributeValue) {
    const modifiers = this.state.modifiers;
    let selectedModifier = modifiers.find(
      item => item.id === this.state.selectedModifierId
    );
    selectedModifier.attribute = newAttributeValue;
    selectedModifier = {
      ...selectedModifier,
    };
    this.setState({ modifiers, selectedModifier });
  }

  render() {
    const styles = CreateItemStyles.standard;
    return (
      <SafeAreaView>
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
              extraData={this.state.selectedModifier}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.modifierRow}>
                  <View style={styles.modifierLabel}>
                    <TouchableOpacity
                      style={styles.modifierButton}
                      onPress={() => this.startEditingModifier(item.id)}
                    >
                      <Text style={styles.modifierButtonText}>
                        {item.attribute}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Attribute
                    increment={this.createModifierIncrement(item.id)}
                    decrement={this.createModifierDecrement(item.id)}
                    startEditing={() => {
                      this.startEditingModifier(item.id);
                    }}
                    editing={this.state.selectedModifierId === item.id}
                    value={item.modification}
                    attribute={item.attribute}
                    style={
                      this.state.selectedModifierId === item.id
                        ? AttributeStyles.selected
                        : AttributeStyles.standard
                    }
                  />
                </View>
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
        {this.state.selectedModifierId && (
          <View style={styles.attributePickerContainer}>
            <Picker
              prompt={Strings.attributeType}
              style={styles.attributePicker}
              selectedValue={this.state.selectedModifier.attribute}
              onValueChange={this.updateModifierAttribute}
              itemStyle={styles.attributePickerItem}
            >
              <Picker.Item label={Strings.agility} value="agility" />
              <Picker.Item label={Strings.cunning} value="cunning" />
              <Picker.Item label={Strings.strength} value="strength" />
              <Picker.Item label={Strings.spirit} value="spirit" />
              <Picker.Item label={Strings.lore} value="lore" />
              <Picker.Item label={Strings.luck} value="luck" />
              <Picker.Item label={Strings.health} value="health" />
              <Picker.Item label={Strings.defense} value="defense" />
              <Picker.Item label={Strings.sanity} value="sanity" />
              <Picker.Item label={Strings.willpower} value="willpower" />
              <Picker.Item label={Strings.maxGrit} value="maxGrit" />
              <Picker.Item label={Strings.combat} value="combat" />
              <Picker.Item label={Strings.range} value="range" />
              <Picker.Item label={Strings.melee} value="melee" />
            </Picker>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
