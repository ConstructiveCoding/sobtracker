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

    await characterListPage.isVisible();
    await characterListPage.addCharacter();
    await createCharacterPage.isVisible();

    await createCharacterPage.enterName(characterName);
    await createCharacterPage.enterClass(characterClass);
    await createCharacterPage.enterGender(characterGender);

    await createCharacterPage.submitIsEnabled();
    await createCharacterPage.createCharacter();

    await characterListPage.isVisible();
    await characterListPage.hasCharacter(characterName, characterClass);
  },
});
