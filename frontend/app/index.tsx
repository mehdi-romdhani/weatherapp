import React, { useState, useEffect } from 'react';
import { Text, Button, VStack, HStack, View, SafeAreaView, Icon } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import SignIn from '../components/Signin';
import SignUp from '../components/SignUp';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<'signin' | 'signup' | '/'>('/');
  const router = useRouter();

  useEffect(() => {
    console.log('Page actuelle:', currentScreen);
  }, [currentScreen]);

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {currentScreen === '/' && (
          <VStack space="xl" alignItems="center">
            <HStack space="md" alignItems="center">
              <Icon as={Ionicons} name="partly-sunny" size={40} color="#F9FAFB" />
              <Text style={styles.title}>WeatherApp</Text>
            </HStack>
            <Text style={styles.subtitle}>Votre météo personnelle</Text>
            <VStack space="lg" style={styles.buttonContainer}>
              <Button 
                onPress={() => setCurrentScreen('signin')}
                style={styles.button}
              >
                <HStack space="sm" alignItems="center">
                  <MaterialIcons name="login" size={24} color="#FFFFFF" />
                  <Text style={styles.buttonText}>Connexion</Text>
                </HStack>
              </Button>
              <Button 
                onPress={() => setCurrentScreen('signup')}
                variant="outline"
                style={styles.outlineButton}
              >
                <HStack space="sm" alignItems="center">
                  <MaterialIcons name="person-add" size={24} color="#3B82F6" />
                  <Text style={styles.outlineButtonText}>Inscription</Text>
                </HStack>
              </Button>
            </VStack>
          </VStack>
        )}
              {currentScreen === 'signin' && (
          <SignIn 
            onBackPress={() => setCurrentScreen('signup')} 
            onSuccess={() => router.push('/home')} 
          />
        )}
        {currentScreen === 'signup' && (
          <SignUp 
            onBackPress={() => setCurrentScreen('signin')} // Retourne à SignIn
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#1F2937',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F9FAFB',
  },
  subtitle: {
    fontSize: 18,
    color: '#D1D5DB',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#3B82F6',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  outlineButtonText: {
    color: '#3B82F6',
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default App;