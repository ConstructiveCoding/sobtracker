import { StyleSheet } from 'react-native';

import Colours from '../colours';

export default class CalculatorStyles {
  static standard: StyleSheet = StyleSheet.create({
    container: {
      flexDirection: 'column',
      paddingLeft: 16,
      paddingRight: 16,
    },
    title: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    titleText: {
      fontSize: 24,
      fontWeight: '900',
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 8,
      justifyContent: 'center',
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
      padding: 5,
      borderWidth: 1,
      borderColor: Colours.buttonBorder,
    },
    operatorRow: {
      flexDirection: 'row',
      marginVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    operatorButton: {
      alignItems: 'center',
      backgroundColor: Colours.toggleButtonBgColour,
      borderColor: Colours.buttonText,
      borderStyle: 'solid',
      borderWidth: 1,
      height: 44,
      justifyContent: 'center',
      margin: 5,
      width: 88,
    },
    selectedOperatorButton: {
      alignItems: 'center',
      backgroundColor: Colours.toggleButtonSelectedBgColour,
      borderColor: Colours.buttonBorder,
      borderStyle: 'solid',
      borderWidth: 2,
      height: 44,
      justifyContent: 'center',
      margin: 5,
      width: 88,
    },
    button: {
      height: 44,
      width: 88,
      justifyContent: 'center',
      alignItems: 'center',
    },
    totalRow: {
      flexDirection: 'row',
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: Colours.lightText,
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
