import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TextInput from "../component/TextInput";
import Button from "../component/Button";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts, DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
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

  useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });
  return (
    <View style={styles.containerView}>
      <ScrollView style={styles.containerView}>

        <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >

          <View style={styles.topBack}>
          <ImageBackground source={require("../assets/profileback.png")} resizeMode='stretch' >

            <View style={{
              color: 'white',
              width: '100%',
              height:172,
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingTop: 40,
              paddingLeft: 20,
              borderRadius:25
            }}>
              <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ flexDirection: 'row', backgroundColor: 'transparent' }}>
                <MaterialCommunityIcons name="arrow-left" size={24} color={"#ffffff"} />
                <Text style={{
                  color: "#ffffff",
                  fontFamily: 'DMSans_500Medium', fontSize: 18
                }}> Back</Text>
              </TouchableOpacity>
              <Text style={{
                color: "#ffffff",
                fontFamily: 'DMSans_500Medium', fontSize: 18
              }}> </Text>
              <Text>       </Text>

            </View>
            {/* <Image
              style={{ width: "100%", height: 160 }}
              source={require("../assets/profileback.png")}
            /> */}
            </ImageBackground>
          </View>
          <View style={styles.profileInfo}>
            <TouchableOpacity onPress={pickImage}>
              <Image
                style={{ width: 120, height: 120, borderRadius: 50, backgroundColor: 'gray' }}
                source={{ uri: image }}
              />
              <View style={styles.profileAdd}>
                <MaterialCommunityIcons name="pencil-minus-outline" size={16} color={"#000000"} />
              </View>

            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'DMSans_500Medium' }}> Md Rohim Miya  </Text>
            <Text style={{ color: '#C0CACB', fontSize: 16, fontFamily: 'DMSans_400Regular' }}> Company: Graphic IT BD  </Text>

          </View>
          <View style={styles.optionList}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

              <Text style={styles.InputHead}>
                {" "}
                Name{" "}
              </Text>
              <TextInput
                inputHieght={54}
                inputAlign={'center'}
                placeholder="Enter your Name"
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"

              />
              <Text style={styles.InputHead}>
                {" "}
                Email{" "}
              </Text>
              <TextInput
                inputHieght={54}
                inputAlign={'center'}
                placeholder="Enter your email"
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
              />

              <Text style={styles.InputHead}>
                {" "}
                Company{" "}
              </Text>
              <TextInput
                inputHieght={54}
                inputAlign={'center'}

                placeholder="Enter your company"
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              <Text style={styles.InputHead}>
                {" "}
                Password{" "}
              </Text>
              <TextInput
                inputHieght={54}
                inputAlign={'center'}
                placeholder="Enter your Password"
                autoCapitalize="none"
                autoCompleteType="password"
                keyboardType="password"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
                secureTextEntry={true}
              />


            </KeyboardAvoidingView>
          </View>
          <View style={styles.Bottom}>
            <Button label="Save" onPress={() => navigation.navigate("Home")} />
          </View>

        </ImageBackground>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#020202'
  },
  topBack: {
    flex: .10,
    },
  profileAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 0,
    height: 25,
    width: 25,
    backgroundColor: 'white',
    borderRadius: 25



  },
  InputHead: {
    fontSize: 16,
    fontFamily: 'DMSans_500Medium',
    paddingTop:10,
    
    color: "#ffffff",
    paddingBottom: 5
  },

  profileInfo: {
    flex: .20,
    alignContent: 'center',
    alignItems: 'center',
    margin: -60
  },
  optionList: {
    flex: .60,
    padding: 10,
    marginTop: 60,
    justifyContent: 'center'
  },

  CardText: {
    color: "#ffffff",
    fontStyle: "italic",
    fontSize: 14

  },
  Bottom: {
    flex: 0.2,
    width: "100%",
    padding: 15,

  },
})