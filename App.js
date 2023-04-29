import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import AuthNavigator from './navigations/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from './components/screens/auth/Login';
import Myprofile from './components/profile/Myprofile';
const Drawer= createDrawerNavigator();
export default function App() {
  return (
    <View style={styles.container}>

 
    {/* <NavigationContainer>
    
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
    
      </Drawer.Navigator>
    </NavigationContainer> */}
    <AuthNavigator />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        
    }
});
