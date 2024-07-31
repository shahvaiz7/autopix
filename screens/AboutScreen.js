import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// To use weblink adress just import Linking and use the navigation like : onPress = {() => {Linking.openURL('#')}}
export default function AboutScreen({navigation}) {
 
    return (
      <ScrollView style={styles.containerView}>
        <View style={styles.HeaderView}>
          <Text style={styles.AllText}>About  </Text>
          <Text
            style={{ color: "#C0CACB", fontSize: 14, fontWeight: "semibold" }}
          >
            {" "}
          Version 1.0.0{" "}
          </Text>
        </View>
        <View style={styles.optionList}>
          <TouchableOpacity
            style={styles.options}
            onPress = {() => {Linking.openURL('https://autopix.no/privacy-policy/')}}
          >
            <Text style={styles.CardText}>Privacy Policy </Text>
            <MaterialCommunityIcons
              name="arrow-collapse-right"
              size={20}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.options}
            onPress = {() => {Linking.openURL('https://autopix.no/terms-of-service')}}
          >
            <Text style={styles.CardText}>Terms & Conditions</Text>
            <MaterialCommunityIcons
              name="arrow-collapse-right"
              size={20}
              color={"white"}
            />
          </TouchableOpacity>
         
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      padding: 10,
      backgroundColor: "#1D6167",
    },
    topBack: {
      flex: 0.2,
    },
    HeaderView: {
      flex: 0.3,
      width: "100%",
    },
    profileInfo: {
      flex: 0.3,
      alignContent: "center",
      alignItems: "center",
      margin: -10,
    },
    optionList: {
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      flex: 0.7,
      padding: 10,
    },
    options: {
      margin: 5,
      padding: 12,
      borderRadius: 10,
      color: "white",
      justifyContent: "space-between",
      flexDirection: "row",
      backgroundColor: "#1F2932",
      width: "100%",
    },
    CardText: {
      color: "#ffffff",
      fontStyle: "italic",
      fontSize: 14,
    },
    AllText: {
      color: "#ffffff",
      fontSize: 20,
      fontWeight: "bold",
    },
  });
  