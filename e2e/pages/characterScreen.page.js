const CHARACTER_NAME_DISPLAY = 'character-name';

module.exports = () => ({
  isVisible: async () => {
    await expect(element(by.id(CHARACTER_NAME_DISPLAY))).toBeVisible();
  },
  correctCharacterLoaded: async characterName => {
    await expect(element(by.text(characterName))).toBeVisible();
  },
});
