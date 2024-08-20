import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../component/Button";

import TextInput from "../component/TextInput";
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  //const image = require("../assets/background.png");
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
          <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff", fontSize: 24 }}> CarLine </Text>
          {/* <Image
          style={{ width: 80, height: 80 }}
          source={require("../assets/logoblack.jpeg")}
        /> */}
          <Text style={styles.AllText}> Welcome Back! </Text>
        </View>
        <View style={styles.FormView}>
          <Text style={{ fontWeight: "bold", paddingBottom:8,color: "#ffffff" }}>
            {" "}
            Email{" "}
          </Text>
          <TextInput
            
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={{ fontWeight: "bold", paddingBottom:8,paddingTop:15, color: "#ffffff" }}>
            {" "}
            Password{" "}
          </Text>
          <TextInput
            icon="eye"
            placeholder="Enter your Password"
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
            <Text style={{  padding: 10, color: "#ffffff" }}>
              {" "}
              New User?{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  padding: 10,
                  color: "#FF4A22",
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
            <Text
              style={{
                padding: 20,
                color: "#ffffff",
              }}
            >
              {" "}
              Forget Password?{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#020202",
    
  },
  HeaderView: {
    flex: 0.2,
    padding:20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop:80
  },
  FormView: {
    flex: 0.4,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  SubmitView: {
    alignContent:'center',
    alignItems: "center",
    padding:20,
    
    
    
  },
  Bottom: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
  },
  AllText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  InputBlock: {
    justifyContent: "flex-start",
  },
});
