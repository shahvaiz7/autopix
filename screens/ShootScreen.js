import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground
} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  useFonts, DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';

export default function ShootScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(null);

  const takeImageHandler = async () => {
    // const hasPermission = await verifyPermissions();
    // if(!hasPermission){
    //   return;
    // }

    //ImagePicker.PermissionStatus.GRANTED;
    const cameraphoto = await ImagePicker.launchCameraAsync(
      {
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsMultipleSelection: true,
        allowsEditing: true,

      }
    );
    if (!cameraphoto.canceled) {
      setImage(cameraphoto.assets[0].uri);
    }

  };


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      // cameraType: CameraType.back,
      aspect: [4, 3],
      quality: 1,
      orderedSelection: true,

      // mediaTypes:ImagePicker.MediaTypeOptions.Images,
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
      <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
        <ScrollView>
          <View style={styles.topBar}>
            <View style={styles.ProfileDetails}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 50 }}
                source={require("../assets/profile-img.png")}
              />
              <View>
                <Text style={{
                  fontSize: 12,
                  color: '#C0CACB',
                  fontFamily: 'DMSans_400Regular'
                }}> Welcome back, </Text>
                <Text style={{
                  fontFamily: 'DMSans_500Medium',
                  fontSize: 16,
                  color: '#ffffff',
                  fontWeight: 'bold'
                }}> Mr. Rahim </Text>
              </View>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")} >
              <MaterialCommunityIcons name="bell-badge-outline" size={24} color={"#ffffff"} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContent}>

            <TouchableOpacity style={styles.blockContent} onPress={takeImageHandler} >
              <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
                <View style={{
                  paddingTop: 40
                }}>
                  <Image
                    style={{ width: 90, height: 60, borderRadius: 25 }}
                    source={require("../assets/camera.png")}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'DMSans_500Medium',
                    margin: 10
                  }}> Shoot </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>


            <TouchableOpacity style={styles.blockContent} onPress={pickImage}>
              <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
                <Image
                  style={{ width: 70, height: 70, borderRadius: 25 }}
                  source={require("../assets/upload.png")}
                />

                <View
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  {/* <Text style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily:'DMSans_500Medium',
                  margin: 10
                }}> Upload </Text> */}
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.blockContent}  >

              {image && <Image source={{ uri: image }} style={styles.image} />}

            </TouchableOpacity>

          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#020202",
    paddingBottom: 80
  },
  image: {
    height: 188,
    width: '100%',
    resizeMode: 'stretch',
    borderRadius: 25
  },
  topBar: {
    flex: 0.1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    paddingTop: 50
  },
  ProfileDetails: {
    flexDirection: 'row'

  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    margin: 10
  },
  blockContent: {
    flex: .2,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    height: 192,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 15
  },
  imageBack: {

    width: '100%',
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,



  }
});
