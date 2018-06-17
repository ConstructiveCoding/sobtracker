import React from 'react';

import { FlatList, Text, View } from 'react-native';

const CharacterList = ({ characters, style }) => {
  return (
    <FlatList
      data={characters}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <View style={style.container}>
          <Text style={style.characterName}>
            {item.name} <Text style={style.characterClass}>{item.class}</Text>
          </Text>
        </View>
      )}
    />
  );
};

export default CharacterList;
