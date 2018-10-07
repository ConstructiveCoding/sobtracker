export default (
  baseValue,
  attribute,
  character,
  items,
  injuries,
  abilities
) => {
  let modifiedValue = 0;

  character.items.forEach(itemId => {
    const item = items.byId[itemId];

    if (item) {
      item.modifiers.forEach(modifier => {
        if (modifier.attribute === attribute) {
          modifiedValue += modifier.modification;
        }
      });
    }
  });

  character.injuries.forEach(injuryId => {
    const injury = injuries.byId[injuryId];

    if (injury) {
      injury.modifiers.forEach(modifier => {
        if (modifier.attribute === attribute) {
          modifiedValue += modifier.modification;
        }
      });
    }
  });

  character.abilities.forEach(abilityId => {
    const ability = abilities.byId[abilityId];

    if (ability) {
      ability.modifiers.forEach(modifier => {
        if (modifier.attribute === attribute) {
          modifiedValue += modifier.modification;
        }
      });
    }
  });

  return baseValue + modifiedValue;
};
