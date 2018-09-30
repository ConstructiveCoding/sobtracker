/* @flow */

import React from 'react';
import Picker from 'react-native-picker';
import Immutable from 'seamless-immutable';

import {
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

// TODO: Make these generic 'create thing styles'
import CreateInjuryStyles from '../../theme/standard/components/createInjury.style';
import Ability from '../../models/ability';
import Modifier from '../../models/modifier';
import Strings from '../../language/strings';

import Attribute from '../attribute';
import AttributeStyles from '../../theme/standard/components/attribute.style';

type AbilityCreationState = {
  name: string,
  skillTrack: string,
  description: string,
  modifiers: Array<Modifier>,
  attributePickerItems: Array<any>,
};

const initialState = {
  name: '',
  skillTrack: '',
  description: '',
  modifiers: [],
  attributePickerItems: [],
};

export default class AbilityCreation extends React.Component {
  constructor(props) {
    super(props);

    initialState.attributePickerItems = [
      { title: Strings.agility, value: 'agility' },
      { title: Strings.cunning, value: 'cunning' },
      { title: Strings.strength, value: 'strength' },
      { title: Strings.spirit, value: 'spirit' },
      { title: Strings.lore, value: 'lore' },
      { title: Strings.luck, value: 'luck' },
      { title: Strings.health, value: 'health' },
      { title: Strings.defense, value: 'defense' },
      { title: Strings.sanity, value: 'sanity' },
      { title: Strings.willpower, value: 'willpower' },
      { title: Strings.maxGrit, value: 'maxGrit' },
      { title: Strings.combat, value: 'combat' },
      { title: Strings.range, value: 'range' },
      { title: Strings.melee, value: 'melee' },
    ];

    this.state = initialState;

    if (typeof props.abilityDetails !== 'undefined') {
      const mutableAbilityDetails = Immutable.asMutable(props.abilityDetails, {
        deep: true,
      });

      this.state = {
        ...this.state,
        ...mutableAbilityDetails,
      };
    }

    this.validateForm = this.validateForm.bind(this);
    this.onAddNewModifier = this.onAddNewModifier.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);

    this.createModifierDecrement = this.createModifierDecrement.bind(this);
    this.createModifierIncrement = this.createModifierIncrement.bind(this);
    this.toggleEditingModifier = this.toggleEditingModifier.bind(this);
    this.updateModifierAttribute = this.updateModifierAttribute.bind(this);
    this.startRemovingModifier = this.startRemovingModifier.bind(this);
    this.displayModifierPicker = this.displayModifierPicker.bind(this);
    this.findAttributeByValue = this.findAttributeByValue.bind(this);
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow
    );
  }

  componentWillUnmount() {
    this.toggleEditingModifier(this.state.selectedModifierId);
    this.keyboardDidShowListener.remove();
  }

  onAddNewModifier() {
    const newModifier = new Modifier('agility', 0);
    const modifiers = this.state.modifiers.concat([newModifier]);
    this.setState({
      modifiers,
    });
  }

  keyboardDidShow() {
    this.toggleEditingModifier(this.state.selectedModifierId);
  }

  validateForm() {
    const ability = new Ability(
      this.state.name,
      this.state.skillTrack,
      this.state.description,
      this.state.modifiers
    );

    if (typeof this.props.abilityDetails !== 'undefined') {
      ability.id = this.props.abilityDetails.id;
    }

    this.props.onSave(ability);
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

  toggleEditingModifier(modifierId) {
    const selectedModifierId =
      this.state.selectedModifierId === modifierId ? undefined : modifierId;
    let selectedModifier;

    if (selectedModifierId) {
      selectedModifier = this.state.modifiers.find(
        modifier => modifier.id === selectedModifierId
      );
    } else {
      Picker.hide();
    }

    this.setState({
      selectedModifier,
      selectedModifierId,
    });
  }

  displayModifierPicker(modifierId) {
    let selectedModifier = this.state.modifiers.find(
      item => item.id === modifierId
    );

    if (selectedModifier) {
      const pickerData = [
        Strings.agility,
        Strings.cunning,
        Strings.strength,
        Strings.spirit,
        Strings.lore,
        Strings.luck,
        Strings.health,
        Strings.defense,
        Strings.sanity,
        Strings.willpower,
        Strings.maxGrit,
        Strings.combat,
        Strings.range,
        Strings.melee,
      ];

      Picker.init({
        pickerData,
        selectedValue: [
          this.findAttributeByValue(selectedModifier.attribute).title,
        ],
        pickerConfirmBtnText: Strings.save,
        pickerCancelBtnText: Strings.cancel,
        pickerTitleText: Strings.attributes,
        onPickerConfirm: data => {
          // const attribute = this.findSelectedAttribute(data[0]);
          // this.updateModifierAttribute(attribute.value);
        },
        onPickerCancel: data => {
          this.findSelectedAttribute(data[0]);
        },
        onPickerSelect: data => {
          const attribute = this.findSelectedAttribute(data[0]);
          this.updateModifierAttribute(modifierId, attribute.value);
        },
      });

      Picker.show();
    }
  }

  findSelectedAttribute(attributeTitle) {
    return this.state.attributePickerItems.find(
      attribute => attribute.title === attributeTitle
    );
  }

  findAttributeByValue(attributeValue) {
    return this.state.attributePickerItems.find(
      attribute => attribute.value === attributeValue
    );
  }

  startRemovingModifier(modifierId) {
    const modifiers = this.state.modifiers.filter(
      modifier => modifier.id !== modifierId
    );
    this.setState({ modifiers });
  }

  updateModifierAttribute(modifierId, newAttributeValue) {
    const modifiers = this.state.modifiers.concat([]);
    let selectedModifierIndex = modifiers.findIndex(
      item => item.id === modifierId
    );
    modifiers[selectedModifierIndex].attribute = newAttributeValue;

    this.setState({ modifiers });
  }

  render() {
    const styles = CreateInjuryStyles.standard;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          testID="item-scroll"
          style={styles.formContainer}
        >
          <View style={styles.formHeader}>
            <Text style={styles.formHeaderText}>{Strings.newAbility}</Text>
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
            <Text
              testID={'item-skill-track-text-label'}
              style={styles.formLabel}
            >
              {Strings.skillTrack}
            </Text>

            <TextInput
              testID="item-flavour-text-entry"
              style={styles.formDataEntry}
              value={this.state.skillTrack}
              onChangeText={newValue => {
                this.setState({ skillTrack: newValue });
              }}
            />
          </View>

          <View style={styles.formRow}>
            <Text testID={'item-description-label'} style={styles.formLabel}>
              {Strings.description}
            </Text>

            <TextInput
              testID="item-description-entry"
              style={styles.formDataEntry}
              value={this.state.description}
              onChangeText={newValue => {
                this.setState({ description: newValue });
              }}
            />
          </View>

          <View style={styles.formSectionHeader}>
            <Text style={styles.sectionHeaderLabel}>{Strings.modifiers}</Text>
            <TouchableOpacity
              style={styles.formHeaderButtonContainer}
              onPress={this.onAddNewModifier}
            >
              <Icon size={25} name="plus" />
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={this.state.modifiers}
              extraData={this.state.selectedModifier}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.modifierRow}>
                  <View style={styles.modifierRemoveButton}>
                    <TouchableOpacity
                      style={styles.modifierButton}
                      onPress={() => this.startRemovingModifier(item.id)}
                    >
                      <Icon size={15} name="remove" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modifierLabel}>
                    <TouchableOpacity
                      style={styles.modifierButton}
                      onPress={() => this.displayModifierPicker(item.id)}
                    >
                      <Text style={styles.modifierButtonText}>
                        {this.findAttributeByValue(item.attribute).title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Attribute
                    increment={this.createModifierIncrement(item.id)}
                    decrement={this.createModifierDecrement(item.id)}
                    startEditing={() => {
                      this.toggleEditingModifier(item.id);
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
                testID="save-injury"
                style={styles.saveButton}
                onPress={this.validateForm}
              >
                <Text>{Strings.save}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
