import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Stack.Screen name="CarLine" component={CarLine} options={{ header: () => null }} />

        <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ header: () => null }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ header: () => null }} />
        <Stack.Screen name="Profiledetails" component={ProfileDetails}
          options={{
            headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },

            headerTitle: '',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#A52306',
            }
          }} />
        <Stack.Screen name="AccountSetting" component={AccountSetting}
          options={{
            headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },
            title: 'Account Settings',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#A52306',
            }
          }} />
        <Stack.Screen name="Shareapp" component={ShareApp}
          options={{
            headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },
            title: 'Share App',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#A52306',
            }
          }} />
        <Stack.Screen name="Support" component={SupportPage} />
        <Stack.Screen name="About" component={AboutScreen}
          options={{
            headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },

            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#A52306',

            }
          }} />
        <Stack.Screen name="CreateOrder" component={CreateOrder}
          options={{
            headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },
            title: 'Create Order',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#882919',
            }
          }} />
        <Stack.Screen name="Guide" component={GuideScreen} />
        <Stack.Screen name="Guidesteps" component={GuideSteps} />
        <Stack.Screen name="GuideAdd" component={GuideAdd} options={{ header: () => null }} />
        <Stack.Screen name="BackgroundType" component={BackgroundType} options={{
          headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },
          title: 'Background Type',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#A52306',
          }
        }} />
        <Stack.Screen name="BackgroundList" component={BackgroundList} options={{
          headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },
          title: 'Background',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#A52306',
          }
        }} />
        <Stack.Screen name="FloorList" component={FloorList}
          options={{
            headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },
            title: 'Floor',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#A52306',
            }
          }} />
        <Stack.Screen name="LogoList" component={LogoList}
          options={{
            headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },
            title: 'Logo',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#A52306',
            }
          }} />
        <Stack.Screen name="NpList" component={NpList}
          options={{
            headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },
            title: 'Number Plate',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#A52306',
            }
          }} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ header: () => null }} />
        <Stack.Screen name="UploadingScreen" component={UploadingScreen} options={{ header: () => null }} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ header: () => null }} />

        <Stack.Screen name="PrivecySetting" component={PrivecySetting} options={{
          headerTitleStyle: { fontFamily: 'DMSans_500Medium', fontSize: 18 },
          title: 'Privecy Setting',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#A52306',
          }
        }} />
        <Stack.Screen name="GuideScreen" component={GuideScreen} options={{ header: () => null }} />


      </Stack.Navigator>

    </NavigationContainer>
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

// After Successful clone from Git hub just run :# npm install -i  to get all the node modules
// Bottom tab navigator#  npm install @react-navigation/bottom-tabs
// Import :::import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//            const Tab = createBottomTabNavigator();


// git reset --hard :: if any local change happen and you forgot the and also undo the changes and pull the new changes from git 
// I uninstalled expo-font and used the command npx expo install expo-font to install expo-font and the issue disappeared
// Generate APK :  eas build --platform android --profile  preview 
// need to create eas.json 