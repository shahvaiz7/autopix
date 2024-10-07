import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileDetails from './screens/ProfileDetails';
import AccountSetting from './screens/AccountSetting';
import ShareApp from './screens/ShareApp';
import SupportPage from './screens/SupportPage';
import AboutScreen from './screens/AboutScreen';
import CreateOrder from './screens/CreateOrder';
import GuideScreen from './screens/GuideScreen';
import GuideSteps from './screens/GuideSteps';
import GuideAdd from './screens/GuideAdd';
import BackgroundType from './screens/BackgroundType';
import BackgroundList from './screens/BackgroundList';
import FloorList from './screens/FloorList';
import LogoList from './screens/LogoList';
import NpList from './screens/NpList';
import SuccessScreen from './screens/SuccessScreen';
import UploadingScreen from './screens/UploadingScreen';
import PrivecySetting from './screens/PrivecySetting';
import CarLine from './screens/CarLine';
import NotificationScreen from './screens/NotificationScreen';

import CameraScreen from './screens/CameraScreen';
import OrderScreen from './screens/OrderScreen';
import { useFonts } from "expo-font";
import React, {useEffect } from "react";

import * as SplashScreen from 'expo-splash-screen';
import ImageList from './screens/ImageList';
import FloorType from './screens/FloorType';
import { UserProvider } from './auth/UserContext';
SplashScreen.preventAutoHideAsync();

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded, error] = useFonts({
    "DMSans_400Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans_500Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans_700Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
          <Stack.Screen name="CarLine" component={CarLine} options={{ header: () => null }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ header: () => null }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ header: () => null }} />
          <Stack.Screen name="Profiledetails" component={ProfileDetails} options={{ header: () => null }} />
          <Stack.Screen name="AccountSetting" component={AccountSetting} options={{ header: () => null }} />
          <Stack.Screen name="Shareapp" component={ShareApp} options={{ header: () => null }} />
          <Stack.Screen name="Support" component={SupportPage} />
          <Stack.Screen name="About" component={AboutScreen} options={{ header: () => null }} />
          <Stack.Screen name="CreateOrder" component={CreateOrder} options={{ header: () => null }} />
          <Stack.Screen name="Guide" component={GuideScreen} />
          <Stack.Screen name="Guidesteps" component={GuideSteps} />
          <Stack.Screen name="GuideAdd" component={GuideAdd} options={{ header: () => null }} />
          <Stack.Screen name="BackgroundType" component={BackgroundType} options={{ header: () => null }} />
          <Stack.Screen name="BackgroundList" component={BackgroundList} options={{ header: () => null }} />
          <Stack.Screen name="FloorList" component={FloorList} options={{ header: () => null }} />
          <Stack.Screen name="LogoList" component={LogoList} options={{ header: () => null }} />
          <Stack.Screen name="NpList" component={NpList} options={{ header: () => null }} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ header: () => null }} />
          <Stack.Screen name="UploadingScreen" component={UploadingScreen} options={{ header: () => null }} />
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ header: () => null }} />
          <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ header: () => null }} />
          <Stack.Screen name="PrivecySetting" component={PrivecySetting} options={{ header: () => null }} />
          <Stack.Screen name="GuideScreen" component={GuideScreen} options={{ header: () => null }} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ header: () => null }} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ header: () => null }} />
          <Stack.Screen name="ImageList" component={ImageList} options={{ header: () => null }} />
          <Stack.Screen name="FloorType" component={FloorType} options={{ header: () => null }} />


        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
