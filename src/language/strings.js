import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  'en-GB': {
    characterClass: 'Class',
    characterName: 'Name',
    characterTitle: 'Characters',
    createCharacter: 'Create Character',
  },
  en: {
    characterClass: 'Class',
    characterName: 'Name',
    characterTitle: 'Characters',
    createCharacter: 'Create Character',
  },
  de: {
    characterClass: 'Klasse',
    characterName: 'Name',
    characterTitle: 'Figuren',
    createCharacter: 'Charakter erstellen',
  },
});

module.exports = strings;
