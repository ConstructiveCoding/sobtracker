/* @flow */

import React from 'react';
import Picker from 'react-native-picker';

import {
  FlatList,
  Keyboard,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';
import TagInput from 'react-native-tag-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
  keywordsText: string,
  location: string,
  cost: number,
  modifiers: Array<Modifier>,
  description: string,
  type: string,
  itemTypeIndex: number,
};

const initialState = {
  name: '',
  weight: 0,
  keywords: [],
  keywordsText: '',
  location: 'Mine',
  cost: 0,
  modifiers: [],
  description: '',
  selectedModifier: undefined,
  selectedModifierId: undefined,
  isEditingModifierType: false,
  type: 'gear',
  attributePickerItems: [],
  itemTypeIndex: 0,
};

const horizontalTagInputProps = {
  keyboardType: 'default',
  returnKeyType: 'done',
  placeholder: 'Keywords',
  style: {
    fontSize: 14,
    marginVertical: Platform.OS == 'ios' ? 10 : -2,
  },
};

const horizontalTagScrollViewProps = {
  horizontal: true,
  showsHorizontalScrollIndicator: false,
};
export default class ItemCreation extends React.Component {
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
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onChangeKeywordsText = this.onChangeKeywordsText.bind(this);
    this.handleItemTypeSelection = this.handleItemTypeSelection.bind(this);
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

  onChangeTags = keywords => {
    // this.setState({
    //   keywords,
    // });
  };

  onChangeKeywordsText = keywordsText => {
    this.setState({ keywordsText });

    const lastTyped = keywordsText.charAt(keywordsText.length - 1);
    const parseWhen = [',', ' ', ';', '\n'];

    if (parseWhen.indexOf(lastTyped) > -1) {
      this.setState({
        keywords: [...this.state.keywords, this.state.keywordsText],
        keywordsText: '',
      });
      // this._horizontalTagInput.scrollToEnd();
    }
  };

  keyboardDidShow() {
    this.toggleEditingModifier(this.state.selectedModifierId);
  }

  validateForm() {
    const itemTypes = [Strings.gear, Strings.artefact, Strings.item];
    const item = new Item(
      this.state.name,
      itemTypes[this.state.itemTypeIndex],
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

      // TODO: Figure out how to make the flatlist move the contents up the screen when the picker is visible.
      // https://github.com/beefe/react-native-picker
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

  handleItemTypeSelection(itemTypeIndex) {
    this.setState({ itemTypeIndex });
  }

  render() {
    const styles = CreateItemStyles.standard;
    return (
      <SafeAreaView>
        <KeyboardAwareScrollView
          testID="item-scroll"
          style={styles.formContainer}
        >
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
            <Text style={styles.formLabel}>{Strings.type}</Text>
            <SegmentedControlTab
              values={[Strings.gear, Strings.artefact, Strings.item]}
              selectedIndex={this.state.itemTypeIndex}
              onTabPress={this.handleItemTypeSelection}
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
            <TagInput
              style={styles.keyWordEntry}
              value={this.state.keywords}
              onChange={this.onChangeTags}
              labelExtractor={keyword => keyword}
              text={this.state.keywordsText}
              tagColor="blue"
              tagTextColor="white"
              onChangeText={this.onChangeKeywordsText}
              inputProps={horizontalTagInputProps}
              scrollViewProps={horizontalTagScrollViewProps}
            />
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
            <Text style={styles.formLabel}>{Strings.description}</Text>
            <TextInput
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
                testID="save-item"
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
