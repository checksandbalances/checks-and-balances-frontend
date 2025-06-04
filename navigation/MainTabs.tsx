import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../src/screens/DashboardScreen';
import BillListScreen from '../src/screens/BillListScreen';
import RepresentativesScreen from '../src/screens/RepresentativesScreen';
import BookmarksScreen from '../src/screens/BookmarksScreen';
import SettingsScreen from '../src/screens/SettingsScreen';

export type TabParamList = {
  Dashboard: undefined;
  Bills: undefined;
  Representatives: undefined;
  Bookmarks: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Bills" component={BillListScreen} />
      <Tab.Screen name="Representatives" component={RepresentativesScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
