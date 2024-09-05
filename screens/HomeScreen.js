import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import ShootScreen from './ShootScreen';
import OrderScreen from './OrderScreen';
import GuideScreen from './GuideScreen';
import ProfileScreen from './ProfileScreen';
import GuideAdd from './GuideAdd';
import BottomTab from '../component/BottomTab';
import firebase from '../component/firebase'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { doc } from 'firebase/firestore';
//npm install @react-navigation/bottom-tabs

//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

// const User =()=> {
//   const [username,setUsername]= useState([]);
//   const userRef = firebase.firestore().collection('user');

//   useEffect(async()=>{
//     userRef.onSnapshot(QuerySnapshot=>{
//       const user = []
//       QuerySnapshot.forEach((doc)=>{
//         const {name} = doc.data()
//         user.push({
//           id: doc.id,
//           name
//         })
//       })
//       setUsername(user)
//     })
//   } )

// }

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
    // <Tabs tabBar={props => <BottomTab {...props} />}>

    //   <Tabs.Screen name="ShootScreen" options={{ title: "Shoot" }} />
    //   <Tabs.Screen name="OrderScreen" options={{ title: "Order" }} />
    //   <Tabs.Screen name="GuideAdd" options={{ title: "Guide" }} />
    //   <Tabs.Screen name="ProfileScreen" options={{ title: "Profile" }} />

    // </Tabs>
    //   );
    // };

    // <Tab.Navigator activeColor="#FF4A22"
    //   activeIndicatorStyle={{ backgroundColor: '#020202' }}
    //   inactiveColor="#ffffff"
    //   // screenOptions={{
    //   //   tabBarStyle: { position: 'absolute' },
    //   // }}

    //   // shifting={true}
    //   barStyle={{

    //     backgroundColor: 'transparent',
    //     position: 'absolute',
    //     bottom: 5,
    //     borderColor: '#FF4A22',
    //     borderWidth: 2,
    //     borderTopRightRadius: 60,
    //     borderTopLeftRadius: 60,
    //     borderBottomLeftRadius: 40,
    //     borderBottomRightRadius: 40,
    //     transform: [{ scaleY: .8 }],


    //   }}
    // >

    //   <Tab.Screen name="Shoot" component={ShootScreen}
    //     options={{
    //       title: 'Shoot',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="camera-outline" color={color} size={26} />
    //       ),

    //     }} />
    //   <Tab.Screen name="Order" component={OrderScreen}

    //     options={{
    //       // tabBarBadge: true,
    //       tabBarLabel: 'Order',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="note-outline" color={color} size={26} />
    //       ),
    //     }} />
    //   <Tab.Screen name="Guide" component={GuideAdd}
    //     options={{

    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="folder-open-outline" color={color} size={26} />
    //       ),
    //     }} />
    //   <Tab.Screen name="Profile" component={ProfileScreen}
    //     options={{
    //       tabBarLabel: 'Profile',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialCommunityIcons name="account-outline" color={color} size={26} />
    //       ),
    //     }} />
    // </Tab.Navigator>

  )
}

const styles = StyleSheet.create({})