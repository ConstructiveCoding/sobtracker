import React from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type CharacterListProps = {
  characters: Array<any>,
  style: StyleSheet,
  loadCharacter: Function,
};

const CharacterList = ({
  characters,
  style,
  loadCharacter,
}: CharacterListProps) => (
  <FlatList
    data={characters}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => loadCharacter(item.id)}>
        <View style={style.container}>
          <Text style={style.characterName}>
            {item.name}{' '}
            <Text style={style.characterClass}>{item.characterClass}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

export default CharacterList;
