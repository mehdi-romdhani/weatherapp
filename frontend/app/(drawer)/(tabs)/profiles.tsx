import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CandyCounter from '@/components/CandyCounter';

export default function profiles() {
  return (
    <View style = {styles.container}>
      <Text>profiles</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    borderBlockColor: '#f0f0f0',
    
  }
});