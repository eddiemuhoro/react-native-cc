import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/Home';
import Login from '../components/screens/auth/Login';
import Register from '../components/screens/auth/Register';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#273340',

        }
      }}
      >
        <Stack.Screen
          name="Register"
          component={Register}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
        />
         <Stack.Screen
            name="Shop"
            options={{headerBackVisible: false}}
            component={BottomNavigation}
        />
        <Stack.Screen
          name='details'
          component={Home}
          options={({route}) => ({title: route.params.productId})}

        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
  );
};

export default AuthNavigator