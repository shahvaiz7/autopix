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
export default function AboutScreen({navigation}) {
 
    return (
      <ImageBackground style={styles.containerView} source={require("../assets/background.png")}>
        
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
              name="greater-than"
              size={18}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.options}
            onPress = {() => {Linking.openURL('https://autopix.no/terms-of-service')}}
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
      padding:15
    },
    
    HeaderView: {
      flex: 0.1,
      width: "100%",
     padding:10
    },
   
    optionList: {
      flex: 0.2,
      borderWidth:1,
      borderColor:'gray',
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:15,
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
      borderBottomColor:'gray',
      borderBottomWidth:.10,
      
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
  