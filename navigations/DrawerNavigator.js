import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from '../components/profile/tabs/Favorites';
import AuthNavigator from './AuthNavigator';
const Drawer= createDrawerNavigator();
const DrawerNavigator = () => {
  return (
   
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ccc',
          width: 240,
        },
        drawerPosition: 'right',
      }}
    >
      <Drawer.Screen
        name="Shops"
        options={{
          headerShown: false,
        }}
        component={AuthNavigator} />

      <Drawer.Screen
        name="Favorites"
        options={{
          headerShown: false,
        }}
        component={Favorites} />

    </Drawer.Navigator>
  )
}

export default DrawerNavigator