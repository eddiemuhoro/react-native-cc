import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from '../components/profile/tabs/Favorites';
const Drawer= createDrawerNavigator();
const DrawerNavigator = () => {
  return (
   
  <Drawer.Navigator
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
  </Drawer.Navigator>
  )
}

export default DrawerNavigator