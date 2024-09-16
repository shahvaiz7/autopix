import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Linking,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// To use weblink adress just import Linking and use the navigation like : onPress = {() => {Linking.openURL('#')}}
export default function AboutScreen({ navigation }) {

  return (
    <ImageBackground style={styles.containerView} source={require("../assets/background.png")}>

      <View style={styles.HeaderView}>
        <View style={{
          color: 'white',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingTop: 40,

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
          }}> About </Text>
          <Text>       </Text>

        </View>
        <View style={{
          paddingTop: 25,
          paddingLeft: 5
        }}>
          <Text style={styles.AllText}>About  </Text>
          <Text
            style={{ color: "#C0CACB", fontSize: 14, fontFamily: 'DMSans_400Regular' }}
          >
            {" "}
            Version 1.0.0{" "}
          </Text>
        </View>
      </View>
      <View style={styles.optionList}>

        <TouchableOpacity
          style={styles.options}
          onPress={() => { Linking.openURL('https://carline.no') }}
        >
          <Text style={styles.CardText}>Privacy Policy </Text>
          <MaterialCommunityIcons
            name="greater-than"
            size={18}
            color={"white"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => { Linking.openURL('https://carline.no') }}
        >
          <Text style={styles.CardText}>Terms & Conditions</Text>
          <MaterialCommunityIcons
            name="greater-than"
            size={18}
            color={"white"}
          />
        </TouchableOpacity>

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    padding: 10
  },

  HeaderView: {
    flex: 0.2,
    width: "100%",

  },

  optionList: {
    flex: 0.18,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(.25, 52, 52, 0.3)'

  },
  options: {
    margin: 5,
    padding: 12,
    borderRadius: 10,
    color: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    borderBottomColor: 'gray',
    borderBottomWidth: .5,

  },
  CardText: {
    color: "#ffffff",
    fontFamily: 'DMSans_500Medium',

    fontSize: 14,
  },
  AllText: {
    color: "#ffffff",
    fontFamily: 'DMSans_500Medium',
    fontSize: 24,
  },
});
