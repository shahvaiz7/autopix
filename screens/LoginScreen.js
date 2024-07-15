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

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView style={styles.containerView}>
      <View style={styles.HeaderView}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../assets/logoblack.jpeg")}
        />
        <Text style={styles.AllText}> Welcome Back! </Text>
      </View>
      <View style={styles.FormView}>
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
      </View>
      <View style={styles.SubmitView}>
        <Button label="Login" onPress={() => navigation.navigate("Home")} />

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
            {" "}
            New User?{" "}
            <Text
              style={{
                fontWeight: "bold",
                padding: 10,
                color: "#1FDE00",
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
            padding: 10,
            color: "#ffffff",
          }}
        >
          {" "}
          Forget Password?{" "}
        </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
   padding:10,
    backgroundColor: "#1B5865",
  },
  HeaderView: {
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  FormView: {
    flex: 0.3,
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
