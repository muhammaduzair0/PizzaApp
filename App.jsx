import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}></Stack.Screen>
    </NavigationContainer>
  );
}
