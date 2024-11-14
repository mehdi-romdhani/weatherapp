import React, { useEffect, useState, useCallback } from 'react';
import { View, TextInput, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

const API_KEY = '30183e34c1224408847140346241710';

interface WeatherData {
  location: { name: string };
  current: {
    temp_c: number;
    condition: { text: string; icon: string };
  };
}

const SimpleSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = useCallback(async (city: string) => {
    if (!city) return;
    setLoading(true);
    try {
      const response = await axios.get<WeatherData>(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo:', error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchWeatherData(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, fetchWeatherData]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher une ville..."
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor="#888"
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {!loading && weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.cityName}>{weatherData.location.name}</Text>
          <View style={styles.weatherInfo}>
            <Image 
              source={{ uri: `https:${weatherData.current.condition.icon}` }} 
              style={styles.weatherIcon} 
            />
            <Text style={styles.temperature}>{weatherData.current.temp_c}°C</Text>
          </View>
          <Text style={styles.condition}>{weatherData.current.condition.text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  weatherContainer: {
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  temperature: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 18,
    color: '#666',
  },
});

export default SimpleSearchBar;