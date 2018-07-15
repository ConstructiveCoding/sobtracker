module.exports = () => ({
  isVisible: async () => {
    await expect(element(by.id('add-character-button'))).toBeVisible();
  },
  addCharacter: async () => {
    await element(by.id('add-character-button')).tap();
  },
  hasCharacter: async (characterName, characterClass) => {
    await expect(
      element(by.text(`${characterName} ${characterClass}`))
    ).toExist();
  },
  selectCharacter: async (characterName, characterClass) => {
    await element(by.text(`${characterName} ${characterClass}`)).tap();
  },
});
