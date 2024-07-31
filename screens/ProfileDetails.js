import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TextInput from "../component/TextInput";
import Button from "../component/Button";
import * as ImagePicker from "expo-image-picker";
export default function ProfileDetails({ navigation }) {
  const [image, setImage] = useState(null);
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: false
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <ScrollView style={styles.containerView}>

      <View style={styles.topBack}>
        <Image
          style={{ width: "100%", height: 120 }}
          source={require("../assets/logowhite.jpeg")}
        />
      </View>
      <View style={styles.profileInfo}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 50,backgroundColor:'gray' }}
            source={{ uri: image }}
          />
         

        </TouchableOpacity>

        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'semibold' }}> Md Rohim Mia  </Text>
        <Text style={{ color: '#C0CACB', fontSize: 14, fontWeight: 'semibold' }}> Company: Graphic IT BD  </Text>
      </View>
      <View style={styles.optionList}>

        <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
          {" "}
          Name{" "}
        </Text>
        <TextInput

          placeholder="Enter your Name"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
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
        <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
          {" "}
          Password{" "}
        </Text>
        <TextInput
          icon="key"
          placeholder="Enter your Password"
          autoCapitalize="none"
          autoCompleteType="password"
          keyboardType="password"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          secureTextEntry={true}
        />
        <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
          {" "}
          Company{" "}
        </Text>
        <TextInput

          placeholder="Enter your company"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />



      </View>
      <View style={styles.Bottom}>
        <Button label="Save" onPress={() => navigation.navigate("Profile")} />
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,

    backgroundColor: '#1D6167'
  },
  topBack: {
    flex: .10,
  },

  profileInfo: {
    flex: .20,
    alignContent: 'center',
    alignItems: 'center',
    margin: -40
  },
  optionList: {
    flex: .60,
    padding: 20,
    justifyContent: 'center'
  },
  options: {
    margin: 5,
    padding: 12,
    borderRadius: 10,
    color: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#1F2932',
    width: '100%'
  },
  CardText: {
    color: "#ffffff",
    fontStyle: "italic",
    fontSize: 14

  },
  Bottom: {
    flex: 0.1,
    width: "100%",
    alignItems: "center",
  },
})