import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const API_KEY = '30183e34c1224408847140346241710';
const CITIES = ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier'];

interface WeatherData {
  location: { name: string };
  current: {
    temp_c: number;
    condition: { text: string; icon: string };
  };
}

const WeatherScreen: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const promises = CITIES.map(city =>
        axios.get<WeatherData>(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      );
      const responses = await Promise.all(promises);
    //   console.log('responses:', responses);
      setWeatherData(responses.map(response => response.data));
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo:', error);
      setLoading(false);
    }
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return 'sunny';
      case 'partly cloudy':
        return 'partly-sunny';
      case 'cloudy':
        return 'cloud';
      case 'rain':
        return 'rainy';
      default:
        return 'cloud';
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {weatherData.map((data, index) => (
          <View key={index} style={styles.cityCard}>
            <Text style={styles.cityName}>{data.location.name}</Text>
            <Ionicons
              name={getWeatherIcon(data.current.condition.text)}
              size={50}
              color="#000"
            />
            <Text style={styles.temperature}>{Math.round(data.current.temp_c)}°C</Text>
            <Text style={styles.condition}>{data.current.condition.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cityCard: {
    width: '45%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  condition: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default WeatherScreen;