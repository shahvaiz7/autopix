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

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView style={styles.containerView}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
        style={styles.containerView}
      >
        <View style={styles.HeaderView}>
          <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff", fontSize: 24 }}> CarLine </Text>
          {/* <Image
          style={{ width: 80, height: 80 }}
          source={require("../assets/logoblack.jpeg")}
        /> */}
          <Text style={styles.AllText}> Welcome Back! </Text>
        </View>
        <View style={styles.FormView}>
          <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
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
          <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
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
      </LinearGradient>
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
  },
  FormView: {
    flex: 0.4,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  SubmitView: {
    flex: 0.2,
  paddingHorizontal:10,
  paddingVertical:20,
    alignItems: "center",
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
