const CHARACTER_NAME_ENTRY = 'character-name-entry';
const CHARACTER_CLASS_ENTRY = 'character-class-entry';
const CHARACTER_GENDER_ENTRY = 'character-gender-entry';
const CREATE_CHARACTER_BUTTON = 'create-character-button';
const CREATE_CHARACTER_BUTTON_VIEW = 'create-character-view';

module.exports = () => ({
  isVisible: async () => {
    await expect(element(by.id(CHARACTER_NAME_ENTRY))).toBeVisible();
  },
  enterName: async name => {
    await element(by.id(CHARACTER_NAME_ENTRY)).tap();
    await element(by.id(CHARACTER_NAME_ENTRY)).typeText(name);
  },
  enterClass: async characterClass => {
    await element(by.id(CHARACTER_CLASS_ENTRY)).typeText(characterClass);
  },
  enterGender: async characterGender => {
    await element(by.id(CHARACTER_GENDER_ENTRY)).typeText(characterGender);
  },
  createCharacter: async () => {
    await element(by.id(CREATE_CHARACTER_BUTTON)).tap();
  },
  submitIsEnabled: async () => {
    await expect(element(by.id(CREATE_CHARACTER_BUTTON))).toBeVisible();
  },
  submitIsDisabled: async () => {
    await expect(element(by.id(CREATE_CHARACTER_BUTTON_VIEW))).toBeVisible();
  },
});
