import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  ScrollView,
  ImageBackground
} from "react-native";
import Reac, { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../component/Button";
import TextInput from "../component/TextInput";
import * as OpenAnything from 'react-native-openanything';
import { LinearGradient } from 'expo-linear-gradient';
//npm install react-native-openanything


export default function ShareApp({ navigation }) {
  const [email, setEmail] = useState();
  return (
    <View style={styles.containerView}>
      <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' style={styles.containerView}>
        <View style={styles.HeaderView}>
          <View style={{
            color: 'white',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: 40,
            paddingLeft: 10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="arrow-left" size={24} color={"#ffffff"} />
              <Text style={{
                color: "#ffffff",
                fontFamily: 'DMSans_500Medium', fontSize: 18
              }}> </Text>
            </TouchableOpacity>
            <Text style={{
              color: "#ffffff",
              fontFamily: 'DMSans_500Medium', fontSize: 18
            }}> Share App</Text>
            <Text>       </Text>

          </View>

        </View>
        <View style={{
          paddingTop: 5,
          paddingLeft: 5
        }}>
          <Text style={styles.AllText}>Share App  </Text>

        </View>
        <View style={styles.optionList}>
          <Text style={styles.InputHead}>
            {" "}
            Email{" "}
          </Text>

          <TextInput
            inputHieght={54}
            inputAlign={'center'}
            placeholder="Enter email.."
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            onChangeText={newtext => setEmail(newtext)}
            defaultValue={email}
          />
          <View style={styles.Bottom}>
            <Button label="Send" onPress={() => OpenAnything.Email(to = email, subject = "Install from here", body = "link###")} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
//Email(to = false, subject = false, body = false, cc = false, bcc = false)
const styles = StyleSheet.create({
  containerView: {
    flex: 1,

  },
  HeaderView: {
    flex: .1,
    marginTop: 10
  },
  InputHead: {
    fontSize: 16,
    fontFamily: 'DMSans_500Medium',
    paddingTop: 10,
    color: "#ffffff",
    paddingBottom: 5
  },


  optionList: {

    flex: 0.1,
    padding: 10,

  },

  AllText: {
    color: "#ffffff",
    fontFamily: 'DMSans_500Medium',
    fontSize: 24,
    padding: 10
  },
  Bottom: {
    padding: 10,
    width: "100%",
  }
});
