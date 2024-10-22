import { StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import WeatherScreen from '@/components/WeatherScreen';
import { useFocusEffect } from 'expo-router';

export default function TabOneScreen() {


  return (
    <View style={styles.container}>
      <WeatherScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
