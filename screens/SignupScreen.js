import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../component/Button";
import TextInput from "../component/TextInput";
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts, DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
//npm install react-native-gradient-texts
//import GradientText from "react-native-gradient-texts";

export default function SignupScreen({ navigation }) {

  const [password, setPassword] = useState('');

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (

    <ScrollView style={styles.containerView}>
      <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
        {/* <StatusBar backgroundColor={"#A52306"}/> */}



        <View style={styles.HeaderView}>
          <View style={{
            color: 'white',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingBottom: 10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} >
              <MaterialCommunityIcons name="arrow-left" size={24} color={"#ffffff"} />
            </TouchableOpacity>
            <Text style={{
              color: "#ffffff",
              fontFamily: 'DMSans_500Medium', fontSize: 18
            }}>sign up </Text>
            <Text>       </Text>

          </View>
          <View style={styles.welcomeBar}>

            <Text style={styles.AllText}>Sing Up </Text>
            <Text style={styles.AllText}>  Welcome Back! </Text>
          </View>
        </View>
        <View style={styles.FormView}>
          <Text style={styles.InputHead}>
            {" "}
            Name{" "}
          </Text>
          <TextInput
            inputHieght={54}
            inputAlign={'center'}
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
            inputHieght={54}
            inputAlign={'center'}
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
            inputHieght={54}
            inputAlign={'center'}
          />
        </View>
        <View style={styles.SubmitView}>
          <Button label="sign up" onPress={() => navigation.navigate("Login")} />
        </View>
        <TouchableOpacity style={styles.BottomView} onPress={() => navigation.navigate("Login")}>
          <Text style={{ padding: 2, color: "#ffffff", fontSize: 16, fontFamily: 'DMSans_400Regular' }}>
            {" "}
            Already have an account?{" "}
            <Image
                  style={{ width: 60, height: 25 ,resizeMode:'contain'}}
                  
                  source={require("../assets/signin.png")}
                />
          </Text>
          
            
        </TouchableOpacity>

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
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 10
  },
  welcomeBar: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,

  },
  InputHead: {
    fontSize: 16,
    fontFamily: 'DMSans_500Medium',
    padding: 10,
    color: "#ffffff"
  },

  FormView: {

    width: "100%",
    justifyContent: "center",
    padding: 10,
    paddingTop:40
  },
  TitleBar: {
    color: 'white',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 10

  },
  SubmitView: {

    width: "100%",
    padding: 16
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
    fontFamily: 'DMSans_500Medium',
  },
  InputBlock: {
    justifyContent: "flex-start",
  },
  CardText: {
    color: "#ffffff",
    fontFamily: 'DMSans_500Medium', fontSize: 18
  },
});