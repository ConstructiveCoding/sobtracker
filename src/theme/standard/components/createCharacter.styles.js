import { StyleSheet } from 'react-native';

import Colours from '../colours';

export default class CreateCharacterStyles {
  static standard: StyleSheet = StyleSheet.create({
    formContainer: {
      padding: 20,
    },
    emptyFormRow: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    validDataLabel: {
      flex: 1,
    },
    validDataEntry: {
      flex: 3,
    },
    invalidFormRow: {},
    invalidDataTitle: {},
    invalidDataEntry: {},
    defaultSubmitButton: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: Colours.buttonBorder,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colours.buttonBackground,
    },
    defaultSubmitButtonText: {
      color: Colours.buttonText,
    },

    disabledSubmitButton: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: Colours.diabledButtonBorder,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colours.disabledButtonBackground,
    },
    disabledSubmitButtonText: {
      color: Colours.disabledButtonText,
    },
  });
}
