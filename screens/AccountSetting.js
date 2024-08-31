import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Switch
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts, DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

export default function AccountSetting({ navigation }) {
  const [backgroundSwitch, setBackgroundSwitch] = useState(false);
  const togglebackgroundSwitch = () => setBackgroundSwitch(previousState => !previousState);

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
            }}> Account Settings</Text>
            <Text>       </Text>

          </View>
          <View style={{
            paddingTop: 25,
            paddingLeft: 5
          }}>
            <Text style={styles.AllText}> Account Settings </Text>
            <Text
              style={{ color: "#C0CACB", fontSize: 14, fontFamily: 'DMSans_400Regular' }}
            >
              {" "}
              Select your customized setting{" "}
            </Text>
          </View>
        </View>
        <View style={styles.optionList}>
          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate("#")}
          >
            <Text style={styles.CardText}>Notification </Text>
            <MaterialCommunityIcons
              name="greater-than"
              size={18}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate("PrivecySetting")}
          >
            <Text style={styles.CardText}>Privacy Setting</Text>
            <MaterialCommunityIcons
              name="greater-than"
              size={18}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate("#")}
          >
            <Text style={styles.CardText}>Permissions</Text>
            <MaterialCommunityIcons
              name="greater-than"
              size={18}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.optionListOne}>
          <TouchableOpacity style={styles.optionsTop} onPress={() => navigation.navigate("Profiledetails")}>
            <Text style={styles.CardText}>Send to mail </Text>
            <Switch
              trackColor={{ false: '#ffffff', true: '#FF4A22' }}
              thumbColor={backgroundSwitch ? '#ffffff' : '#FF4A22'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglebackgroundSwitch}
              value={backgroundSwitch}
            />
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'flex-start',

  },

  HeaderView: {
    flex: 0.25,
    width: "100%",
    padding: 10

  },

  optionList: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: 'center',
    margin: 10,
    flex: 0.25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingBottom: 20


  },

  optionsTop: {

    padding: 10,
    borderRadius: 10,
    color: 'white',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    alignContent: 'center',
    alignItems: 'center'



  },
  optionListOne: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  },
  options: {
    margin: 5,
    padding: 12,
    paddingBottom: 10,
    borderRadius: 10,

    color: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    borderBottomColor: 'gray',
    borderBottomWidth: .5,
    width: '100%',

  },
  CardText: {
    color: "#ffffff",
    fontFamily: 'DMSans_500Medium',
    fontSize: 14,
  },
  AllText: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: 'DMSans_500Medium'
  },
});
