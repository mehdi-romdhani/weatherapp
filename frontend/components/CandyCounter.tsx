import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCandyStore } from '../store/store'; // Importez votre store

const CandyCounter = () => {
  // Ouvre la boîte magique pour voir combien de bonbons il y a et comment les ajouter ou les retirer
  const { candies, addCandy, removeCandy } = useCandyStore();

  return (
    <View>
      <Text>Nombre de bonbons : {candies}</Text>
      <Button title="Ajouter un bonbon" onPress={addCandy} />
      <Button title="Retirer un bonbon" onPress={removeCandy} />
    </View>
  );
};

export default CandyCounter;