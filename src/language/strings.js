import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  'en-GB': {
    characterClass: 'Class',
    characterName: 'Name',
    characterGender: 'Gender',
    characterTitle: 'Characters',
    createCharacter: 'Create Character',
  },
  en: {
    characterClass: 'Class',
    characterName: 'Name',
    characterGender: 'Gender',
    characterTitle: 'Characters',
    createCharacter: 'Create Character',
  },
  de: {
    characterClass: 'Klasse',
    characterName: 'Name',
    characterGender: 'Geschlecht',
    characterTitle: 'Figuren',
    createCharacter: 'Charakter erstellen',
  },
});

module.exports = strings;
