import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Register from '../components/screens/auth/Register';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    
    <Tab.Navigator
        initialRouteName='Home'
    >
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
            <Icon name="facebook" color={color} size={size} />
        )
    }}
     component={Register} />
  </Tab.Navigator>
  )
}

export default BottomNavigation