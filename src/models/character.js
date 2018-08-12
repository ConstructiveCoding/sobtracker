/* @flow */

import uuid from 'uuid';

class Character {
  id: string;
  name: string;
  gender: string;
  characterClass: string;

  xp: number;
  level: number;
  gold: number;
  corruption: number;
  grit: number;
  darkStone: number;

  initiative: number;

  // TODO: Move these attributes into a collection and their own reducer
  agility: number;
  cunning: number;
  strength: number;
  spirit: number;
  luck: number;
  lore: number;
  health: number;
  sanity: number;
  defense: number;
  willpower: number;
  maxGrit: number;
  combat: number;
  range: number;
  melee: number;

  items: Array<string>;

  constructor(name: string, gender: string, characterClass: string) {
    this.id = uuid.v4();
    this.name = name;
    this.gender = gender;
    this.characterClass = characterClass;

    this.xp = 0;
    this.level = 0;
    this.gold = 0;
    this.corruption = 0;
    this.grit = 0;
    this.darkStone = 0;

    this.initiative = 0;

    this.agility = 0;
    this.cunning = 0;
    this.strength = 0;
    this.spirit = 0;
    this.luck = 0;
    this.lore = 0;
    this.health = 0;
    this.sanity = 0;
    this.defense = 0;
    this.willpower = 0;
    this.maxGrit = 0;
    this.combat = 0;
    this.range = 0;
    this.melee = 0;

    this.items = [];
  }
}

export default Character;
