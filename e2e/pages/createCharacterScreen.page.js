const CHARACTER_NAME_ENTRY = 'character-name-entry';
const CHARACTER_CLASS_ENTRY = 'character-class-entry';
const CREATE_CHARACTER_BUTTON = 'create-character-button';
const CREATE_CHARACTER_BUTTON_VIEW = 'create-character-view';

module.exports = CharacterListPage = () => {
  return {
    isVisible: async () => {
      await expect(element(by.id(CHARACTER_NAME_ENTRY))).toBeVisible();
    },
    enterName: async (name) => {
      await element(by.id(CHARACTER_NAME_ENTRY)).typeText(name);
    },
    enterClass: async (characterClass) => {
      await element(by.id(CHARACTER_CLASS_ENTRY)).typeText(characterClass);
    },
    createCharacter: async () => {
      await element(by.id(CREATE_CHARACTER_BUTTON)).tap();
    },
    submitIsEnabled: async () => {
      await expect(element(by.id(CREATE_CHARACTER_BUTTON))).toBeVisible();
    },
    submitIsDisabled: async () => {
      await expect(element(by.id(CREATE_CHARACTER_BUTTON_VIEW))).toBeVisible();
    }
  }
}
