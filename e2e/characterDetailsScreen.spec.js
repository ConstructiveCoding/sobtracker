const assert = require('assert');

const CreateCharacterFlow = require('./flows/createCharacter');
const CharacterListPage = require('./pages/characterListScreen.page');
const CharacterDetailsPage = require('./pages/characterDetailsScreen.page');
const CalculatorScreen = require('./pages/calculator.page');

const CreateItemScreen = require('./pages/createItemScreen.page');
const ItemsListScreen = require('./pages/itemListScreen.page');
const ITEMS_TAB = 'items-tab';

describe('Character Details Screen', () => {
  const createCharacterFlow = CreateCharacterFlow();
  const characterListPage = CharacterListPage();
  const characterDetailsScreen = CharacterDetailsPage();
  const calculatorScreen = CalculatorScreen();

  const itemsListScreen = ItemsListScreen();
  const createItemScreen = CreateItemScreen();

  const charName = 'Char Name';
  const charClass = 'Char Class';

  before(async () => {
    await device.reloadReactNative();
    await createCharacterFlow.createCharacter(charName, charClass);
    await characterListPage.selectCharacter(charName, charClass);
  });

  const updateAndValidate = async (attribute, value) => {
    await characterDetailsScreen.startUpdating(attribute);
    const calculatorVisible = await calculatorScreen.isVisible();
    assert(calculatorVisible, 'Calculator should be visible');

    await calculatorScreen.addAmount(value);
    const characterDetailsVisible = await characterDetailsScreen.isVisible();
    assert(
      characterDetailsVisible,
      'Character details screen should be visible'
    );
    await characterDetailsScreen.checkAttribute(attribute, value);
  };

  it('should setup the character as defined', async () => {
    await updateAndValidate(characterDetailsScreen.attributes.XP, '200');
    await updateAndValidate(characterDetailsScreen.attributes.LEVEL, '1');
    await updateAndValidate(characterDetailsScreen.attributes.GOLD, '345');
    await updateAndValidate(characterDetailsScreen.attributes.DARK_STONE, '2');
    await updateAndValidate(characterDetailsScreen.attributes.INITIATIVE, '4');
    await updateAndValidate(characterDetailsScreen.attributes.CORRUPTION, '1');
    await updateAndValidate(characterDetailsScreen.attributes.GRIT, '2');
  });

  it('should add a new item to the list', async () => {
    await element(by.id(ITEMS_TAB)).tap();
    await itemsListScreen.isVisible();
    await itemsListScreen.addItem();
    await createItemScreen.isVisible();

    const newItemName = 'This is a test item';
    await createItemScreen.enterName(newItemName);
    await createItemScreen.createItem();

    await itemsListScreen.isVisible();
    await itemsListScreen.hasItem(newItemName);
  });
});
