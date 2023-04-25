import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/Home';
import Login from '../components/screens/auth/Login';
import Register from '../components/screens/auth/Register';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
      <Stack.Navigator
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
            name="Home"
            component={Home}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
  );
};

export default AuthNavigator