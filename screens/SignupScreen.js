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
export default function SignupScreen({navigation}) {
  return (
   
    <ScrollView style={styles.containerView}>
      <View style={styles.HeaderView}>
       
        <Text style={styles.AllText}> Welcome To Sing Up! </Text>
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

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
   paddingTop:20,
    backgroundColor: "#1B5865",
  },
  HeaderView: {
    flex: 0.1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  FormView: {
    flex: 0.6,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  SubmitView: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
  },
  Bottom:{
    flex: 0.1,
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