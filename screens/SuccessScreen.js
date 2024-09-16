import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function SuccessScreen({ navigation }) {
  return (
    <View style={styles.containerView}>

      <View style={styles.bodyContent}>
        <Image
          style={{ width: 350, height: 400, }}
          source={require("../assets/success.png")}
        />
        <Text style={{
          fontSize: 24,
          color: '#ffffff'
        }}> File<Text style={{
          fontSize: 24,
          color: '#1FDE00'
        }}>  Successfully </Text>Send  </Text>

        <Text style={{
          fontSize: 14,
          color: '#B6B6B6',
          padding: 10,
          paddingBottom: 20
        }}>You will receive an email when file is {"\n"}completed and ready for download  </Text>

        <TouchableOpacity
          style={{
            borderColor: "#ffffff",
            borderWidth: 1,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            height: 54,
            width: '90%',
            alignItems: "center",
          }} onPress={() => navigation.navigate("Home")}
        >
          <Text style={{
            color: "#ffffff", fontSize: 16,
            fontFamily: 'DMSans_500Medium',
          }}> Create New Order </Text>
        </TouchableOpacity>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#020202",
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',


  },

  bodyContent: {

    alignItems: "center",
    width: '100%',
  },

});
