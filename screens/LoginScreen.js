import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Button from "../component/Button";
import TextInput from "../component/TextInput";
import { user_login } from "../auth/UserApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import BaseUrl from "../auth/BaseUrl";
import UserContext from "../auth/UserContext";

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { userData, setUserData } = useContext(UserContext)

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handelLogin = () => {
    if (!email && !password) {
      alert("Please Enter Email and Password")
      return
    }
    let data = JSON.stringify({
      "email": email,
      "password": password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${BaseUrl}/auths/login/`,
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'csrftoken=CH8HzIULQdGpZESH58Pav5ulF8BT6q4s; sessionid=4v67h0saqwxa3571v4o0stfz8v1bl7o3'
      },
      data: data
    };

    axios.request(config)
      .then((result) => {
        if (result.status == 200) {
          AsyncStorage.setItem("AccessToken", JSON.stringify(result.data))
          setUserData(result.data)
          navigation.navigate("Home")
        }
      })
      .catch((error) => {
        alert("Wrong Email And Password");
      });
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
<<<<<<< HEAD
          <Button label="Login" onPress={() => navigation.navigate("Home")} />
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', alignContent: 'center',paddingTop:20 }}>
=======
          <Button label="Login" onPress={() => handelLogin()} />
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', alignContent: 'center' }}>
>>>>>>> ee14c572b33a431b13208d3785aa00ba75645317
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
