const CharacterListPage = require('../pages/characterListScreen.page');
const CreateCharacterPage = require('../pages/createCharacterScreen.page');

module.exports = () => ({
  createCharacter: async (
    characterName,
    characterClass,
    characterGender = 'female'
  ) => {
    const characterListPage = CharacterListPage();
    const createCharacterPage = CreateCharacterPage();

    console.log('Creating character');
    await characterListPage.isVisible();
    await characterListPage.addCharacter();
    console.log('Checking create character screen is visible');
    await createCharacterPage.isVisible();

    console.log('Entering character name');
    await createCharacterPage.enterName(characterName);
    console.log('Entering characte class');
    await createCharacterPage.enterClass(characterClass);
    console.log('Entering character gender');
    await createCharacterPage.enterGender(characterGender);

    console.log('Checking submit is enabled');
    await createCharacterPage.submitIsEnabled();
    console.log('Creating Character');
    await createCharacterPage.createCharacter();

    await characterListPage.isVisible();
    await characterListPage.hasCharacter(characterName, characterClass);
  },
});
