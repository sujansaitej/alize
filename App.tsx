import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import HomeScreen from './app/screens/HomeScreen';  // Add HomeScreen here

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* Screen component takes care of navigation to the correct screen */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}  // Properly use component prop
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
