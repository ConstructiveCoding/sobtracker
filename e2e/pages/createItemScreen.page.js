const ITEM_NAME_ENTRY = 'item-name-entry';
const SAVE_BUTTON = 'save-item';
const ITEM_NAME_LABEL = 'item-name-label';

module.exports = () => ({
  isVisible: async () => {
    await expect(element(by.id(ITEM_NAME_ENTRY))).toBeVisible();
  },
  enterName: async name => {
    await element(by.id(ITEM_NAME_ENTRY)).tap();
    await element(by.id(ITEM_NAME_ENTRY)).typeText(name);
    await element(by.id(ITEM_NAME_LABEL)).tap();
  },
  createItem: async () => {
    await element(by.id(SAVE_BUTTON)).tap();
  },
});
