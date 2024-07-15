import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../component/Button";
import TextInput from "../component/TextInput";

export default function ShareApp({navigation}) {
  return (
    <ScrollView style={styles.containerView}>
      <View style={styles.HeaderView}>
        <Text style={styles.AllText}>Share App  </Text>
       
      </View>
      <View style={styles.optionList}>
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
        <View style={styles.Bottom}>
           <Button label="Send" onPress={() => navigation.navigate("#")} />
           </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1D6167",
  },

  
  optionList: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.6,
    padding: 10,
   
  },
  
  AllText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  Bottom:{
    padding:10
  }
});
