import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../component/Button";
import TextInput from "../component/TextInput";
import { LinearGradient } from 'expo-linear-gradient';
export default function SignupScreen({ navigation }) {
  return (

    <View style={styles.containerView}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
        style={styles.containerView}
      >
        <View style={styles.HeaderView}>

          <Text style={styles.AllText}>Sing Up </Text>
          <Text style={styles.AllText}>  Welcome Back! </Text>
        </View>
        <View style={styles.FormView}>
          <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
            {" "}
            Name{" "}
          </Text>
          <TextInput

            placeholder="Enter your Name"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
            {" "}
            Email{" "}
          </Text>
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
          <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
            {" "}
            Password{" "}
          </Text>
          <TextInput
            icon="key"
            placeholder="Enter your Password"
            autoCapitalize="none"
            autoCompleteType="password"
            keyboardType="password"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            secureTextEntry={true}
          />
          <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
            {" "}
            Company{" "}
          </Text>
          <TextInput

            placeholder="Enter your company"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={styles.SubmitView}>
          <Button label="Sign Up" onPress={() => navigation.navigate("Welcome")} />
        </View>
        <TouchableOpacity style={styles.BottomView} onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
              {" "}
              Already have an account?{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  padding: 10,
                  color: "#1FDE00",
                }}
              >
                {" "}
                Sign In
              </Text>{" "}
            </Text>
          </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1
  },
  HeaderView: {

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 40
  },
  FormView: {

    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  SubmitView: {

    width: "80%",
    paddingLeft: 60
  },
  BottomView:{
    alignItems:'center'

  },
  Bottom: {

    width: "80%",
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