import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import Strings from '../language/strings';

class CreateCharacter extends React.Component<
  CreateCharacterProps,
  CreateCharacterState
> {
  constructor(props) {
    super(props);

    const initialName = props.characterName || '';
    const initialClass = props.characterClass || '';

    this.state = {
      characterName: initialName,
      characterClass: initialClass,
      hasRequiredFields: this.hasRequiredFields(initialName, initialClass),
    };

    this.createCharacter = this.createCharacter.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
    this.renderSubmitView = this.renderSubmitView.bind(this);
    this.hasRequiredFields = this.hasRequiredFields.bind(this);
  }

  createCharacter() {
    // TODO: Validation
    // this.props.createCharacter(this.state.name, this.state.class);
  }

  hasRequiredFields(newName: string, newClass: string) {
    return newName.trim().length > 0 && newClass.trim().length > 0;
  }

  renderSubmitButton(styles) {
    return (
      <TouchableOpacity
        style={styles.defaultSubmitButton}
        testID="create-character-button"
        onPress={this.createCharacter}
      >
        <Text style={styles.defaultSubmitButtonText}>
          {Strings.createCharacter}
        </Text>
      </TouchableOpacity>
    );
  }

  renderSubmitView(styles) {
    return (
      <View style={styles.disabledSubmitButton} testID="create-character-view">
        <Text style={styles.disabledSubmitButtonText}>
          {Strings.createCharacter}
        </Text>
      </View>
    );
  }

  render() {
    let styles = this.props.style;

    return (
      <View style={styles.formContainer}>
        <View style={styles.emptyFormRow}>
          <Text style={styles.validDataLabel}>{Strings.characterName}</Text>
          <TextInput
            placeholder={Strings.characterName}
            style={styles.validDataEntry}
            testID="character-name-entry"
            value={this.state.characterName}
            onChangeText={value => {
              this.setState({
                characterName: value,
                hasRequiredFields: this.hasRequiredFields(
                  value,
                  this.state.characterClass
                ),
              });
            }}
          />
        </View>
        <View style={styles.emptyFormRow}>
          <Text style={styles.validDataLabel}>{Strings.characterClass}</Text>
          <TextInput
            placeholder={Strings.characterClass}
            style={styles.validDataEntry}
            testID="character-class-entry"
            value={this.state.characterClass}
            onChangeText={value => {
              this.setState({
                characterClass: value,
                hasRequiredFields: this.hasRequiredFields(
                  this.state.characterName,
                  value
                ),
              });
            }}
          />
        </View>
        {this.state.hasRequiredFields
          ? this.renderSubmitButton(styles)
          : this.renderSubmitView(styles)}
      </View>
    );
  }
}

type CreateCharacterProps = {
  characterName: string,
  characterClass: string,
  createCharacter: Function,
  styles: object,
};

type CreateCharacterState = {
  characterName: string,
  characterClass: string,
  hasRequiredFields: boolean,
};

export default CreateCharacter;
