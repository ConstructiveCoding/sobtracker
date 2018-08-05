const CHARACTER_NAME = 'character-name';

module.exports = () => ({
  attributes: {
    XP: 'xp',
    LEVEL: 'level',
    GOLD: 'gold',
    DARK_STONE: 'dark-stone',
    INITIATIVE: 'initiative',
    CORRUPTION: 'corruption',
    GRIT: 'grit',
  },
  isVisible: async () => {
    try {
      await expect(element(by.id(CHARACTER_NAME))).toBeVisible();
      return true;
    } catch (err) {
      return false;
    }
  },
  startUpdating: async attributeID => {
    await expect(element(by.id(attributeID))).toBeVisible();
    await element(by.id(attributeID)).tap();
  },
  checkAttribute: async (attributeID, expectedValue) => {
    await expect(element(by.id(attributeID))).toBeVisible();
    await expect(
      element(by.text(expectedValue).withAncestor(by.id(attributeID)))
    ).toExist();
  },
});
