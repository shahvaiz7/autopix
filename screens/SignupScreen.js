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
import { useFonts, DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
   } from "@expo-google-fonts/dm-sans";
//npm install react-native-gradient-texts
//import GradientText from "react-native-gradient-texts";

export default function SignupScreen({ navigation }) {

  useFonts({DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,});

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
          <Text style={styles.InputHead}>
            {" "}
            Name{" "}
          </Text>
          <TextInput

            placeholder="Enter here..."
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
         <Text style={styles.InputHead}>
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
          />
         <Text style={styles.InputHead}>
            {" "}
            Password{" "}
          </Text>
          <TextInput
            icon="eye"
            placeholder="********"
            autoCapitalize="none"
            autoCompleteType="password"
            keyboardType="password"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            secureTextEntry={true}
          />
         <Text style={styles.InputHead}>
            {" "}
            Company{" "}
          </Text>
          <TextInput

            placeholder="Enter here....."
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={styles.SubmitView}>
          <Button label="sign up" onPress={() => navigation.navigate("Login")} />
        </View>
        <TouchableOpacity style={styles.BottomView} onPress={() => navigation.navigate("Login")}>
          <Text style={{ padding: 10, color: "#ffffff" ,fontSize:16, fontFamily:'DMSans_400Regular' }}>
            {" "}
            Already have an account?{" "}
            <Text
              style={{
                fontWeight: "bold",
                padding: 10,
                color: 'rgb(255, 37, 17)',
                fontSize:16, fontFamily:'DMSans_400Regular' 
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

  
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100
  },
  InputHead:{
    fontSize: 16,
    fontFamily:'DMSans_500Medium',
     padding: 10, 
     color: "#ffffff"
  },

  FormView: {

    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  SubmitView: {

    width: "100%",
    padding:16
  },
  BottomView: {
    alignItems: 'center'

  },
  Bottom: {
    alignItems: "center",
  },
  AllText: {
    color: "#ffffff",
    fontSize: 20,
   fontFamily:'DMSans_500Medium',
  },
  InputBlock: {
    justifyContent: "flex-start",
  },
});