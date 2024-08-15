import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShootScreen from './ShootScreen';
import OrderScreen from './OrderScreen';
import GuideScreen from './GuideScreen';
import ProfileScreen from './ProfileScreen';
import GuideAdd from './GuideAdd';

const Tab = createMaterialBottomTabNavigator();


export default function HomeScreen() {
  return (

    <Tab.Navigator activeColor="#FF4A22"
      activeIndicatorStyle={{ backgroundColor: '#020202' }}
      inactiveColor="#ffffff"
      shifting={false}
      barStyle={{
        backgroundColor: '#020202',
        position: 'absolute',
        bottom: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
        borderColor: '#FF4A22',
        borderWidth: 4,
        paddingRight: 42,
        borderTopRightRadius: 130,
        borderTopLeftRadius: 130,
        paddingLeft: 42,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        transform:[{ scaleY: .8}],
        

      }}
    >

      <Tab.Screen name="Shoot" component={ShootScreen}
        options={{
          tabBarLabel: 'Shoot',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),

        }} />
      <Tab.Screen name="Order" component={OrderScreen}

        options={{
          // tabBarBadge: true,
          tabBarLabel: 'Order',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Guide" component={GuideAdd}
        options={{

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder-open-outline" color={color} size={26} />
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