import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  
} from "react-native";
import React , { useState, useEffect }  from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../component/Button";
import { useFonts, DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
   } from "@expo-google-fonts/dm-sans";

//npm install react-native-gradient-texts
//import GradientText from "react-native-gradient-texts";

import TextInput from "../component/TextInput";
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  //const image = require("../assets/background.png");
  useFonts({DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,});
  return (
    <ScrollView style={styles.containerView}>

      <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
        {/* <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
        style={styles.containerView}
      > */}

        <View style={styles.HeaderView}>
          <Text style={{ fontFamily:'DMSans_500Medium', padding: 10, color: "#ffffff", fontSize: 30 }}> CarLine </Text>
          {/* <Image
          style={{ width: 80, height: 80 }}
          source={require("../assets/logoblack.jpeg")}
        /> */}
          <Text style={styles.AllText}> Welcome Back! </Text>
        </View>
        <View style={styles.FormView}>
          <Text style={{ fontFamily:'DMSans_500Medium', fontSize: 16, paddingBottom: 8, color: "#ffffff" }}>
            {" "}
            Email{" "}
          </Text>
          <TextInput

            placeholder="Enter here...."
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            style={{ fontSize: 14 }}
          />
          <Text style={{  fontFamily:'DMSans_500Medium', fontSize: 16, paddingBottom: 8, paddingTop: 15, color: "#ffffff" }}>
            {" "}
            Password{" "}
          </Text>
          <TextInput
            icon="eye"
            placeholder="*******"
            autoCapitalize="none"
            autoCompleteType="password"
            keyboardType="password"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            secureTextEntry={true}

          />

        </View>
        <View style={styles.SubmitView}>
          <Button label="Login" onPress={() => navigation.navigate("Home")} />
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.RegularText}>
              { " "}
              New User?{" "}
            <Text
              style={{
                fontFamily:'DMSans_700Bold',
                padding: 10,
                color: "#FF4A22",
                fontSize: 16
              
              }}
            >
              {" "}
              Sign Up
            </Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Bottom}>
        <TouchableOpacity onPress={() => navigation.navigate("#")}>
        <Text style={styles.RegularText}>
            {" "}
            Forget Password?{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#020202",

  },
  HeaderView: {
    flex: 0.2,
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80
  },
  FormView: {
    flex: 0.4,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  SubmitView: {
    alignContent: 'center',
    alignItems: "center",
    padding: 20,



  },
  Bottom: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
  },
  AllText: {
    color: "#ffffff",
    fontFamily:'DMSans_500Medium',
    fontSize: 24,
    
    
  },
  InputBlock: {
    justifyContent: "flex-start",
  },
  
  RegularText:{
    padding: 10, color: "#ffffff" ,fontSize:16, fontFamily:'DMSans_400Regular'

  },
});
