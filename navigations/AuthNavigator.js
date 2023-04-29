import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/Home';
import Login from '../components/screens/auth/Login';
import Register from '../components/screens/auth/Register';
import BottomNavigation from './BottomNavigation';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductDetailsScreen from '../components/fetch_products/FASHION/Details';

const Stack = createNativeStackNavigator();

const AuthNavigator = ({navigation}) => {
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
            options={{
              headerBackVisible: false,
              headerRight: () => (
                <Icon name="account-circle" 
                size={30} 
                color="white" 
                onPress={() => navigation.openDrawer()}
                />
              ),
            }}
            component={BottomNavigation}
        />
        <Stack.Screen
          name='details'
          component={Home}
          options={({route}) => ({title: route.params.productId})}

        />
        {
          //screen for product details
        }
        <Stack.Screen
          name='productDetails'
          component={ProductDetailsScreen}
          options={
            ({route}) => ({title: route.params.productId})
          }

        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
  );
};

export default AuthNavigator