const TITLE = 'attribute-to-update-title';
const NEW_AMOUNT_ENTRY = 'new-amount-entry';

const MINUS_OPERATOR = 'minus-operator';
const ADD_OPERATOR = 'add-operator';

const CANCEL_BUTTON = 'cancel-calculator';
const SAVE_BUTTON = 'save-calculator';

module.exports = () => ({
  isVisible: async () => {
    try {
      await expect(element(by.id(TITLE))).toBeVisible();
      return true;
    } catch (err) {
      return false;
    }
  },
  addAmount: async amount => {
    await element(by.id(NEW_AMOUNT_ENTRY)).tap();
    await element(by.id(NEW_AMOUNT_ENTRY)).typeText(amount);
    await element(by.id(ADD_OPERATOR)).tap();
    await element(by.id(SAVE_BUTTON)).tap();
  },
  minusAmount: async amount => {
    await element(by.id(NEW_AMOUNT_ENTRY)).tap();
    await element(by.id(NEW_AMOUNT_ENTRY)).typeText(amount);
    await element(by.id(MINUS_OPERATOR)).tap();
    await element(by.id(SAVE_BUTTON)).tap();
  },
});
