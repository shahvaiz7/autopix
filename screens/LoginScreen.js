import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../component/Button";


//npm install react-native-gradient-texts
//import GradientText from "react-native-gradient-texts";

import TextInput from "../component/TextInput";
import { user_login } from "../auth/UserApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { err } from "react-native-svg";

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handelLogin = () => {
    user_login({
      email: "testapi@gmail.com",
      password: "TestApi",
    }).then((result) => {
      console.log(result + "Tes");
      if (result.status == 200) {
        AsyncStorage.setItem("AccessToken", result.data.token)
        navigation.navigate("Home")
      }
    }).catch(err => {
      console.error(err);

    })

  }


  return (
    <ScrollView style={styles.containerView}>

      <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
        <View style={styles.HeaderView}>
          <Text style={{ fontFamily: 'DMSans_500Medium', padding: 10, color: "#ffffff", fontSize: 30 }}> CarLine </Text>
          <Text style={styles.AllText}> Welcome Back! </Text>
        </View>
        <View style={styles.FormView}>
          <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 16, paddingBottom: 8, color: "#ffffff" }}>
            {" "}
            Email{" "}
          </Text>
          <TextInput
            inputHieght={54}
            inputAlign={'center'}
            placeholder="Enter here...."
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value={email}
            onChangeText={setEmail}
            style={{ fontSize: 14 }}
          />
          <Text style={{ fontFamily: 'DMSans_500Medium', fontSize: 16, paddingBottom: 8, paddingTop: 15, color: "#ffffff" }}>
            {" "}
            Password{" "}
          </Text>
          <TextInput
            inputHieght={54}
            inputAlign={'center'}
            onPress={toggleShowPassword}
            icon={showPassword ? 'eye-off' : 'eye'}
            placeholder="*******"
            autoCapitalize="none"
            autoCompleteType="password"
            keyboardType="password"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}

          />

        </View>
        <View style={styles.SubmitView}>
          <Button label="Login" onPress={() => navigation.navigate("Home")} />
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', alignContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.RegularText}>
                {" "}
                New User?{" "}
                <Image
                  style={{ width: 60, height: 20, resizeMode: 'contain' }}
                  source={require("../assets/signup.png")}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Bottom}>
          <TouchableOpacity onPress={handelLogin}>
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
    fontFamily: 'DMSans_500Medium',
    fontSize: 24,


  },
  InputBlock: {
    justifyContent: "flex-start",
  },

  RegularText: {
    color: "#ffffff", fontSize: 16, fontFamily: 'DMSans_400Regular'

  },
});
