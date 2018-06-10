module.exports = CharacterListPage = () => {
  return {
    isVisible: async () => {
      await expect(element(by.id('add-character-button'))).toBeVisible();
    },
    addCharacter: async () => {
      await element(by.id('add-character-button')).tap();
    }
  }
}
