const CharacterListPage = require('./pages/characterListScreen.page');
const CreateCharacterPage = require('./pages/createCharacterScreen.page');

describe('Create Character Screen', () => {
  const createCharacterPage = CreateCharacterPage();

  beforeEach(async () => {
    await device.reloadReactNative();

    const characterListPage = CharacterListPage();
    await characterListPage.isVisible();
    await characterListPage.addCharacter();

    await createCharacterPage.isVisible();
  });

  it('should load with a disabled submit button', async () => {
    await createCharacterPage.submitIsDisabled();
  });

  it('should create a character', async () => {
    const newCharName = 'New Character Name';
    const newCharClass = 'Cowboy';

    await createCharacterPage.enterName(newCharName);
    await createCharacterPage.enterClass(newCharClass);
    await createCharacterPage.enterGender('Female');

    await createCharacterPage.submitIsEnabled();
    await createCharacterPage.createCharacter();

    const characterListPage = CharacterListPage();
    await characterListPage.isVisible();
    await characterListPage.hasCharacter(newCharName, newCharClass);
  });
});
