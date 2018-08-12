import { StyleSheet } from 'react-native';

import Colours from '../colours';

export default class CreateItemStyles {
  static standard: StyleSheet = StyleSheet.create({
    formContainer: {
      padding: 20,
    },
    formHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    formHeaderText: {
      fontSize: 24,
      fontWeight: '700',
    },
    formRow: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      marginBottom: 20,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'black',
      borderStyle: 'solid',
    },
    formLabel: {
      flex: 1,
      fontWeight: '900',
      textAlign: 'left',
    },
    formDataEntry: {
      flex: 3,
      textAlign: 'right',
      height: 40,
    },
    commandRow: {
      flexDirection: 'row',
    },
    cancelButtonContainer: {
      flex: 1,
      borderRadius: 10,
      borderWidth: 1,
      margin: 10,
      overflow: 'hidden',
    },
    cancelButton: {
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colours.cancelButtonBackground,
    },
    saveButtonContainer: {
      flex: 1,
      borderRadius: 10,
      borderWidth: 1,
      margin: 10,
      overflow: 'hidden',
    },
    saveButton: {
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colours.saveButtonBackground,
    },
  });
}
