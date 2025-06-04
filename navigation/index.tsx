import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import MainTabs from './MainTabs';
import BillListScreen from '../src/screens/BillListScreen';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Main: undefined;
  BillList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="BillList" component={BillListScreen} options={{ title: 'Bills' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
