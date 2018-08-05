const DECREMENT_BUTTON = 'decrement-attribute';
const INCREMENT_BUTTON = 'increment-attribute';
const AGILITY_ATTRIBUTE = 'agility-attribute';

module.exports = () => ({
  attributes: {
    agility: 'agility-attribute',
    cunning: 'cunning-attribute',
    strength: 'strength-attribute',
    spirit: 'spirit-attribute',
    lore: 'lore-attribute',
    luck: 'luck-attribute',
    health: 'health-attribute',
    defense: 'defense-attribute',
    sanity: 'sanity-attribute',
    willpower: 'willpower-attribute',
    maxgrit: 'maxGrit-attribute',
    combat: 'combat-attribute',
    range: 'range-attribute',
    melee: 'melee-attribute',
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
    console.log('Attribute ID', attributeID);
    await expect(
      element(by.text(value).withAncestor(by.id(attributeID)))
    ).toBeVisible();
  },
});
