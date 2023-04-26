import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Register from '../components/screens/auth/Register';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    
    <Tab.Navigator>
    <Tab.Screen name="Home" 
    options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
        ),
    }}
    //icon properties
 
    component={Home} />
    <Tab.Screen name="Settings"
    options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
        )
    }}
     component={Register} />
  </Tab.Navigator>
  )
}

export default BottomNavigation