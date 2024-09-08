import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShootScreen from './ShootScreen';
import OrderScreen from './OrderScreen';
import ProfileScreen from './ProfileScreen';
import GuideAdd from './GuideAdd';
import BottomTab from '../component/BottomTab';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//npm install @react-navigation/bottom-tabs
const Tab = createBottomTabNavigator();
export default function HomeScreen() {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>

      <Tab.Screen name="Shoot" component={ShootScreen} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Order" component={OrderScreen} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Guide" component={GuideAdd} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        headerShown: false
      }} />

    </Tab.Navigator>
    

  )
}

const styles = StyleSheet.create({})