const ITEM_NAME_ENTRY = 'item-name-entry';
const SAVE_BUTTON = 'save-item';

module.exports = () => ({
  isVisible: async () => {
    await expect(element(by.id(ITEM_NAME_ENTRY))).toBeVisible();
  },
  enterName: async name => {
    await element(by.id(ITEM_NAME_ENTRY)).tap();
    await element(by.id(ITEM_NAME_ENTRY)).typeText(name);
  },
  createItem: async () => {
    await element(by.id(SAVE_BUTTON)).tap();
  },
});
