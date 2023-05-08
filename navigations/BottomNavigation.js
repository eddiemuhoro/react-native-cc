import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Register from '../components/screens/auth/Register';
import Icon from 'react-native-vector-icons/FontAwesome';
import Settings from '../components/profile/Settings';
import Favorites from '../components/profile/tabs/Favorites';
import Cart from '../components/fetch_products/PRODUCTS/Cart';
import Player from '../enta/Player';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
    return (

        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: '#ff6b6b',
                tabBarInactiveTintColor: '#ccc',
                tabBarStyle: {
                    backgroundColor: '#273340',
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen name="Home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
                component={Home} />


            <Tab.Screen name="Cart"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shopping-cart" color={color} size={size} />
                    )
                }}
                component={Cart} />

            <Tab.Screen name="Favorites"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    )
                }}
                component={Favorites} />

<Tab.Screen name="Music"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="music" color={color} size={size} />
                    )
                }}
                component={Player} />

            <Tab.Screen name="Profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user-circle" color={color} size={size} />
                    )
                }}
                component={Settings} />

        </Tab.Navigator>
    )
}

export default BottomNavigation