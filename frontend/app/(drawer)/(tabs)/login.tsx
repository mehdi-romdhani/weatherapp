import { View, Text, StyleSheet, Button, _View } from 'react-native'
import React, { useState } from 'react'

import { NavigationProp } from '@react-navigation/native';

interface LoginProps {
  navigation: NavigationProp<any>;
}

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <View>
      
    </View>
    // <View style={styles.container}>
    //   <Text style={styles.title}>
    //     {isSignIn ? 'Connexion' : 'Inscription'}
    //   </Text>
    //   {isSignIn ? <SignIn /> : <SignUp />}
    //   <Button 
    //     title={isSignIn ? "Pas de compte ? S'inscrire" : "Déjà un compte ? Se connecter"} 
    //     onPress={toggleForm}
    //   />
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});