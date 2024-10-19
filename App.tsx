import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import HomeScreen from './app/screens/HomeScreen';  // Add HomeScreen here
import StayTunedScreen from './app/screens/StayTunedScreen'; // Add StayTunedScreen here

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* Welcome Screen */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        {/* Signup Screen */}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        {/* Stay Tuned Screen */}
        <Stack.Screen
          name="StayTuned"
          component={StayTunedScreen}  // The "Stay Tuned" screen added
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
