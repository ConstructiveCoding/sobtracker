const CharacterListPage = require('./pages/characterListScreen.page');
const CreateCharacterPage = require('./pages/createCharacterScreen.page');

describe('Character List Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have character list screen', async () => {
    // const characterListScreen = new CharacterListPage();
    const characterListPage = CharacterListPage();
    await characterListPage.isVisible();
  });

  it('should show add character screen after tapping + icon', async () => {

    const characterListPage = CharacterListPage();
    await characterListPage.isVisible();
    await characterListPage.addCharacter();

    const createCharacterPage = CreateCharacterPage();
    await createCharacterPage.isVisible();
  });
})
