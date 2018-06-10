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
    await createCharacterPage.enterName('New Character Name');
    await createCharacterPage.enterClass('Cowboy');
    await createCharacterPage.enterGender('Female');

    await createCharacterPage.submitIsEnabled();
    await createCharacterPage.createCharacter();
  });
});
