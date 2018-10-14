const DECREMENT_BUTTON = 'decrement-attribute';
const INCREMENT_BUTTON = 'increment-attribute';
const AGILITY_ATTRIBUTE = 'agility-attribute-current';

module.exports = () => ({
  attributes: {
    agility: 'agility-attribute-current',
    cunning: 'cunning-attribute-current',
    strength: 'strength-attribute-current',
    spirit: 'spirit-attribute-current',
    lore: 'lore-attribute-current',
    luck: 'luck-attribute-current',
    health: 'health-attribute-current',
    defense: 'defense-attribute-current',
    sanity: 'sanity-attribute-current',
    willpower: 'willpower-attribute-current',
    maxgrit: 'maxGrit-attribute-current',
    combat: 'combat-attribute-current',
    range: 'range-attribute-current',
    melee: 'melee-attribute-current',
  },
  isVisible: async () => {
    await expect(element(by.id(AGILITY_ATTRIBUTE))).toBeVisible();
  },
  editAttribute: async attributeID => {
    await element(by.id(attributeID)).tap();
  },
  isEditingAttribute: async attributeID => {
    try {
      await expect(element(by.id(INCREMENT_BUTTON))).toBeVisible();
      return true;
    } catch (err) {
      return false;
    }
  },
  increment: async () => {
    await expect(element(by.id(INCREMENT_BUTTON))).toBeVisible();
    await element(by.id(INCREMENT_BUTTON)).tap();
  },
  decrement: async () => {
    await expect(element(by.id(DECREMENT_BUTTON))).toBeVisible();
    await element(by.id(DECREMENT_BUTTON)).tap();
  },
  stopEditing: async attributeID => {
    await element(by.id(attributeID)).tap();
  },
  checkAttribute: async (attributeID, value) => {
    await expect(
      // element(by.text(value).withAncestor(by.id(attributeID)))
      element(by.id(attributeID))
    ).toBeVisible();

    await expect(element(by.id(attributeID))).toHaveText(value);
  },
  scrollToBottom: async () => {
    await element(by.id('attributes-list')).swipe('up', 'fast');
  },
});
