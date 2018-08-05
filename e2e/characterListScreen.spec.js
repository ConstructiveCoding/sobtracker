const CharacterListPage = require('./pages/characterListScreen.page');
const CreateCharacterPage = require('./pages/createCharacterScreen.page');
const CharacterScreenPage = require('./pages/characterScreen.page');

const CreateCharacterFlow = require('./flows/createCharacter');

describe('Character List Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const characterListPage = CharacterListPage();
  const createCharacterPage = CreateCharacterPage();
  const createCharacterFlow = CreateCharacterFlow();

  const navigateToAddCharacterScreen = async () => {
    await characterListPage.addCharacter();

    await createCharacterPage.isVisible();
  };

  it('should have character list screen', async () => {
    // const characterListScreen = new CharacterListPage();
    await characterListPage.isVisible();
  });

  it('should show add character screen after tapping + icon', async () => {
    await characterListPage.isVisible();
    await navigateToAddCharacterScreen();
  });

  it('should list characters from the application state', async () => {
    const characters = [
      {
        characterName: 'Character 1',
        characterClass: 'Class 1',
      },
      {
        characterName: 'Character 2',
        characterClass: 'Class 2',
      },
    ];

    await characterListPage.isVisible();

    await createCharacterFlow.createCharacter(
      characters[0].characterName,
      characters[0].characterClass
    );

    await characterListPage.hasCharacter(
      characters[0].characterName,
      characters[0].characterClass
    );

    await createCharacterFlow.createCharacter(
      characters[1].characterName,
      characters[1].characterClass
    );
    await characterListPage.hasCharacter(
      characters[1].characterName,
      characters[1].characterClass
    );
  });

  it('should load the selected character', async () => {
    const characterName = 'Character 2';
    const characterClass = 'Class 2';

    await characterListPage.hasCharacter(characterName, characterClass);
    await characterListPage.selectCharacter(characterName, characterClass);

    const characterScreenPage = CharacterScreenPage();
    await characterScreenPage.isVisible();
    await characterScreenPage.correctCharacterLoaded(characterName);
  });
});
