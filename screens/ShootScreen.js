import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState,useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';

export default function ShootScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(null);


  // const verifyPermissions = async()=> {
  //   const access =(Permissions.CAMERA);
  //   if (access.status !== 'granted'){
  //     Alert.alert(
  //       'Insufficient Permission',
  //        'Need to grant camera app permission',
  //        [{text:'OK'}]
  //        );
  //     return false;
  //   }
  //   return true;
  // };
 

const takeImageHandler = async () => {
  // const hasPermission = await verifyPermissions();
  // if(!hasPermission){
  //   return;
  // }
 
   ImagePicker.PermissionStatus.GRANTED;
 const cameraphoto =  await ImagePicker.launchCameraAsync(
  {
   allowsMultipleSelection:true
  
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
    <ScrollView style={styles.containerView}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
        style={styles.containerView}
      >
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

        <TouchableOpacity style={styles.blockContent} onPress={takeImageHandler} >
          <View  style={{
             paddingTop:40
            }}>
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
             margin:10
            }}> Shoot </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blockContent} onPress={pickImage}>
          <View  style={{
             paddingTop:40
            }}>
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
             margin:10
            }}> Upload </Text>
          </View>
        </TouchableOpacity>
        {/* <Button label="Shoot" />

        <Button label="Upload" onPress={pickImage} /> */}
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
  image: {
    height: 300,
    width: 300,
    resizeMode:'contain'
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
    borderWidth:2,
    borderColor:'gray',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    margin:10
    
  }
});
