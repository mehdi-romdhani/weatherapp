import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Drawer } from 'expo-router/drawer'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import { router, usePathname } from 'expo-router'

// UserInfoWrapper component
const UserInfoWrapper: React.FC = () => {
  return (
    <View style={styles.userInfoContainer}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/8.jpg' }}
        style={styles.userImage}
      />
      <View style={styles.userTextContainer}>
        <Text style={styles.userName}>Mehdi</Text>
        <Text style={styles.userEmail}>mehdi.romdhani@laplateforme.io</Text>
      </View>
    </View>
  )
}

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {

  const pathName = usePathname();
  useEffect(() => {
    console.log(pathName);
  }, [pathName]);
  
  return (
    <DrawerContentScrollView {...props}>
      <UserInfoWrapper />
      <DrawerItem
        label="Home"
        icon={({ color, size }) => <Feather name="home" size={size} color={pathName == "/" ? "#fff" : "#000"} />}
        onPress={() => router.push('/(drawer)/(tabs)/home')}
        style={{backgroundColor: pathName == "/" ? "#333" : "#fff"}}
        labelStyle={[styles.navItems, {color: pathName === "/" ? "#fff" : "#000"}]}
      />
      <DrawerItem
        label="Profile"
        icon={({ color, size }) => <Feather name="user" size={size} color={pathName == "/profiles" ? "#fff" : "#000"} />}
        onPress={() => router.push('/(drawer)/(tabs)/profiles')}
        style={{backgroundColor: pathName == "/profiles" ? "#333" : "#fff" }}
        labelStyle={[styles.navItems, {color: pathName == "/profiles" ? "#fff" : "#000"}]}
      />
      <DrawerItem
        label="Settings"
        icon={({ color, size }) => <Feather name="settings" size={size} color={pathName == "/settings" ? "#fff" : "#000"} />}
        onPress={() => router.push('/settings')}
        style={{backgroundColor: pathName == "/settings" ? "#333" : "#fff"}}
        labelStyle={[styles.navItems, {color: pathName === "/settings" ? "#fff" : "#000"}]}
      />
       <DrawerItem
        label="Search"
        icon={({ color, size }) => <Feather name="search" size={size} color={pathName == "/search" ? "#fff" : "#000"} />}
        onPress={() => router.push('/search')}
        style={{backgroundColor: pathName == "/search" ? "#333" : "#fff"}}
        labelStyle={[styles.navItems, {color: pathName === "/search" ? "#fff" : "#000"}]}
      />
     
    </DrawerContentScrollView>
  )
}

const Layout: React.FC = () => {
  return (
    <Drawer 
      drawerContent={(props) => <CustomDrawerContent {...props} />} 
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />

    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItems: {
    marginLeft: -16,
    fontSize: 16,
  },
  userInfoContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userTextContainer: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
});

export default Layout;