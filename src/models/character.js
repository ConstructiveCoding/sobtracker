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
  }
}

export default Character;
