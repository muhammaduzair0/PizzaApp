import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Details from './src/components/Details';

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
