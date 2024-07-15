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

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Profiledetails" component={ProfileDetails} />
      <Stack.Screen name="AccountSetting" component={AccountSetting} />
      <Stack.Screen name="Shareapp" component={ShareApp} />
      <Stack.Screen name="Support" component={SupportPage} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="CreateOrder" component={CreateOrder} />
      <Stack.Screen name="Guide" component={GuideScreen} />
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


// Bottom tab navigator#  npm install @react-navigation/bottom-tabs
// Import :::import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//            const Tab = createBottomTabNavigator();

