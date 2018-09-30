import { StyleSheet } from 'react-native';
import Colours from '../colours';

export default class CreateInjuryStyles {
  static standard: StyleSheet = StyleSheet.create({
    formContainer: {
      padding: 20,
      backgroundColor: Colours.backgroundColor,
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
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingBottom: 10,
    },
    formLabel: {
      fontWeight: '900',
      textAlign: 'left',
    },
    formDataEntry: {
      width: '100%',
      textAlign: 'left',
      borderColor: Colours.dataEntryInputBorder,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 5,
      height: 40,
      backgroundColor: Colours.dataEntryInputBackground,
      paddingLeft: 10,
    },
    formDataSelectButton: {
      width: '100%',
      borderColor: Colours.dataEntryInputBorder,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 5,
      height: 40,
      backgroundColor: Colours.dataEntryInputBackground,
      paddingLeft: 10,
      justifyContent: 'center',
    },
    formSectionHeader: {
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      marginTop: 20,
      paddingBottom: 10,
    },
    sectionHeaderLabel: {
      flex: 1,
      fontWeight: '900',
      textAlign: 'left',
    },
    formHeaderButtonContainer: {
      width: 40,
      height: 40,
    },
    keyWordEntry: {
      width: '100%',
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
    modifierRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modifierLabel: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    modifierButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    modifierButtonText: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    attributePickerContainer: {
      position: 'absolute',
      top: 100,
      left: 0,
      right: 0,
      backgroundColor: Colours.backgroundColor,
    },
    attributePicker: {
      color: Colours.backgroundColor,
    },
    attributePickerItem: {
      backgroundColor: Colours.backgroundColor,
    },
  });
}
