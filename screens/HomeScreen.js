import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShootScreen from './ShootScreen';
import OrderScreen from './OrderScreen';
import GuideScreen from './GuideScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();


export default function HomeScreen() {
  return (
  
     <Tab.Navigator>
    
    <Tab.Screen name="Shoot" component={ShootScreen}   
      options={{
          tabBarLabel: 'Shoot',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}/>
    <Tab.Screen name="Order" component={OrderScreen}
     options={{
      tabBarLabel: 'Order',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="note" color={color} size={26} />
      ),
    }} />
    <Tab.Screen name="Guide" component={GuideScreen}
     options={{
      tabBarLabel: 'Guide',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="folder" color={color} size={26} />
      ),
    }} />
    <Tab.Screen name="Profile" component={ProfileScreen}
     options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />
      ),
    }} />
    </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({})