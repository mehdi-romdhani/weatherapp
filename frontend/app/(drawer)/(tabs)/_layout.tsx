import React from 'react';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
  <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name='home' size={20} color={color} />,
          tabBarLabel: 'Home',
          headerTitle: 'Home',

          
        }}
      />
      <Tabs.Screen
        name="profiles"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name='user' size={20} color={color} />,
          tabBarLabel: 'Profile',
          headerTitle: 'Home',

          
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Feather name='settings' size={20} color={color} />,
          tabBarLabel: 'Settings',
          headerTitle: 'Home',
          
      
        }}
        
      />

        <Tabs.Screen
                name="login"
                options={{
                  title: 'Login',
                  tabBarIcon: ({ color }) => <Feather name='log-in' size={20} color={color} />,
                  tabBarLabel: 'Login',
                  headerTitle: 'Login',
                }}
                
              />

              <Tabs.Screen
                name='search'
                options={{
                  title: 'Search',
                  tabBarIcon: ({ color }) => <Feather name='search' size={20} color={color} />,
                  tabBarLabel: 'Search',
                  headerTitle: 'Search',
                }}
              />
    </Tabs>
  );
}