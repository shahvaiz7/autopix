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
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// To use weblink adress just import Linking and use the navigation like : onPress = {() => {Linking.openURL('#')}}
export default function AboutScreen({navigation}) {
 
    return (
      <View style={styles.containerView}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
        style={styles.containerView}
      >
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
        </LinearGradient>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      
   
    },
    
    HeaderView: {
      flex: 0.1,
      width: "100%",
     padding:10
    },
   
    optionList: {
      
      flex: 0.2,
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
  