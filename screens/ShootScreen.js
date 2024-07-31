import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState,useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../component/Button";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera/legacy";
import { CameraView, useCameraPermissions } from "expo-camera";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ShootScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(null);
//   const requestPermission = async () => {
//     const { granted } = await Camera.requestCameraPermissionsAsync();

//     if (!granted) {
//         Alert.alert(
//             'Device settings alert',
//             'You need to allow camera permissions for this to work'
//         );
//     }
// }

// const takePhoto = async (options) => {
//     options = {mediaTypes: ImagePicker.MediaTypeOptions.Images, ...options };

//     return await ImagePicker.launchCameraAsync(options);
// }

// useEffect(() => {
//     requestPermission();
// }, []);


 

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      allowsMultipleSelection:true,
      // cameraType: CameraType.back,
      aspect: [4, 3],
      quality: 1,
      orderedSelection:true,
      
      // mediaTypes:ImagePicker.MediaTypeOptions.Images,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.containerView}>
      <View style={styles.topBar}>
        <View style={styles.ProfileDetails}>
        <Image
              style={{ width:40, height: 40 ,borderRadius:50}}
              source={require("../assets/logoblack.jpeg")}
            />
            <View>
            <Text style={{
              fontSize:12,
              color:'#ffffff'
            }}> Welcome back, </Text>
            <Text style={{
              fontSize:16,
              color:'#ffffff',
              fontWeight:'bold'
            }}> Mr. Rahim </Text>
            </View>
        
        </View>
        <TouchableOpacity>
        <MaterialCommunityIcons name="bell" size={20} color={"#ffffff"} />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContent}>
        {image && <Image source={{ uri: image }} style={styles.image} />}

        <TouchableOpacity style={styles.blockContent} >
          <View>
            <MaterialCommunityIcons name="camera" size={100} color={"#ffffff"} />
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <Text  style={{
             color:'white',
             fontSize:20,
             padding:10,
             margin:10
            }}> Shoot </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blockContent} onPress={pickImage}>
          <View>
            <MaterialCommunityIcons name="upload" size={100} color={"#ffffff"} />
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <Text  style={{
             color:'white',
             fontSize:20,
             padding:10,
             margin:10
            }}> Upload </Text>
          </View>
        </TouchableOpacity>
        {/* <Button label="Shoot" />

        <Button label="Upload" onPress={pickImage} /> */}
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#1B5865",
  },
  image: {
    height: 300,
    width: 300,
  },
  topBar: {
    flex: 0.1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  ProfileDetails:{
    flexDirection:'row'
    
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    margin:10
  },
  blockContent:{
    flex:.4,
    backgroundColor:'#284E54',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    margin:10
    
  }
});
