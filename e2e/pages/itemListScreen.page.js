module.exports = () => ({
  isVisible: async () => {
    await expect(element(by.id('add-item-button'))).toBeVisible();
  },
  addItem: async () => {
    await element(by.id('add-item-button')).tap();
  },
  hasItem: async itemName => {
    await expect(element(by.text(itemName))).toExist();
  },
});
