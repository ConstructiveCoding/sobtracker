import { StyleSheet } from 'react-native';

import Colours from '../colours';

export default class CalculatorStyles {
  static standard: StyleSheet = StyleSheet.create({
    container: {
      flexDirection: 'column',
      paddingLeft: 16,
      paddingRight: 16,
    },
    row: {
      flexDirection: 'row',
      marginTop: 8,
      marginBottom: 8,
    },
    label: {
      flex: 1,
      fontWeight: '900',
      textAlign: 'left',
    },
    value: {
      flex: 1,
      textAlign: 'right',
    },
    numericInput: {
      flex: 1,
      textAlign: 'right',
    },
    operatorButton: {
      height: 44,
      width: 44,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: Colours.buttonText,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colours.toggleButtonBgColour,
    },
    selectedOperatorButton: {
      height: 44,
      width: 44,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: Colours.buttonBorder,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colours.toggleButtonSelectedBgColour,
    },
    button: {
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'center',
    },
    totalRow: {
      flexDirection: 'row',
      backgroundColor: Colours.lightText,
      paddingTop: 8,
      paddingBottom: 8,
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
