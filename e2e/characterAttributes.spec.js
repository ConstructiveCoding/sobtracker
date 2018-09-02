const assert = require('assert');

const CreateCharacterFlow = require('./flows/createCharacter');
const CharacterListPage = require('./pages/characterListScreen.page');
const CharacterAttributesScreen = require('./pages/characterAttributes.page');

const ATTRIBUTES_TAB = 'attributes-tab';

describe('Character Attributes Screen', () => {
  const createCharacterFlow = CreateCharacterFlow();
  const characterListPage = CharacterListPage();
  const characterAttributesScreen = CharacterAttributesScreen();

  const charName = 'Attrib Name';
  const charClass = 'Attrib Class';

  before(async () => {
    await device.reloadReactNative();
    await createCharacterFlow.createCharacter(charName, charClass);
    await characterListPage.selectCharacter(charName, charClass);
    await element(by.id(ATTRIBUTES_TAB)).tap();
    await characterAttributesScreen.isVisible();
  });

  it('should start with 0 on all attributes', async () => {
    const atts = characterAttributesScreen.attributes;
    await characterAttributesScreen.checkAttribute(atts.agility, '0');
    await characterAttributesScreen.checkAttribute(atts.combat, '0');
    await characterAttributesScreen.checkAttribute(atts.cunning, '0');
    await characterAttributesScreen.checkAttribute(atts.defense, '0');
    await characterAttributesScreen.checkAttribute(atts.health, '0');
    await characterAttributesScreen.checkAttribute(atts.lore, '0');
    await characterAttributesScreen.checkAttribute(atts.luck, '0');
    await characterAttributesScreen.checkAttribute(atts.maxgrit, '0');
    await characterAttributesScreen.scrollToBottom();
    await characterAttributesScreen.checkAttribute(atts.melee, '0');
    await characterAttributesScreen.checkAttribute(atts.range, '0');
    await characterAttributesScreen.checkAttribute(atts.sanity, '0');
    await characterAttributesScreen.checkAttribute(atts.spirit, '0');
  });
});
