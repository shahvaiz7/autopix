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
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from 'expo-linear-gradient';
//npx expo install @react-native-picker/picker

export default function CreateOrder({navigation}) {
  return (
    <ScrollView style={styles.containerView}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
        style={styles.containerView}
      >
      <View style={styles.HeaderView}>
        <Text style={styles.AllText}> Create a new order </Text>
        <Text style={{ padding: 5, color: "#ffffff" }}>
          {" "}
          Select instruction and delivery time{" "}
        </Text>
      </View>
      <View style={styles.FormView}>
        <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
          {" "}
          Enter Registration or Car ID {" "}
        </Text>
        <TextInput
          placeholder="Enter ID"
          autoCapitalize="none"
          returnKeyType="next"
          returnKeyLabel="next"
        />
        <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
          {" "}
          Enter Message{" "}
        </Text>
        <TextInput
          icon="mail"
          placeholder="Enter your massage"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
        <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
          {" "}
          Instructions{" "}
        </Text>
        <TouchableOpacity style={styles.InstructionView} onPress={() => navigation.navigate("GuideAdd")}>
            <Text style={styles.InstructionText}> Background : Yes </Text>
            <Text style={styles.InstructionText}> Floor : Not Selected  </Text>
            <Text style={styles.InstructionText}> Logo : Yes  </Text>
            <Text style={styles.InstructionText}> Licence Plate : No </Text>

        </TouchableOpacity>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 20,
          }}
        >
          {" "}
          Delivery Time{" "}
        </Text>
        <Text style={{ padding: 5, color: "#ffffff" }}>
          {" "}
          Mon-Sat 08:00-17:00 GMT{" "}
        </Text>
        
        
        <Picker>
          <Picker.Item label="Next Day" value="java"/>
          <Picker.Item label="2 Days " value="js" />
          <Picker.Item label="Next week" value="java" />
          <Picker.Item label="5 Days " value="js" />
        </Picker>
      </View>
      <View style={styles.SubmitView}>
        <Button label="Next" onPress={() => navigation.navigate("UploadingScreen")} />
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
    width: "100%",
    padding: 10,
  },
  InstructionView:{
    backgroundColor:'#222C35',
    padding:5

  },
  InstructionText:{
    color:'#ffffff'

  },
  FormView: {
    flex: 0.7,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  SubmitView: {
    flex: 0.1,
    width: "90%",
   paddingLeft:50
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
