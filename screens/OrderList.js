
//shoot screen copy 
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

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';

export default function OrderList({ navigation }) {
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

  return (
    <View style={styles.containerView}>
      <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
        <ScrollView>
          {/* <LinearGradient
          // Background Linear Gradient
          colors={['#A52306', '#020202']}
          locations={[0.1, 0.3]}
          style={styles.containerView}
        > */}
          <View style={styles.topBar}>
            <View style={styles.ProfileDetails}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 50 }}
                source={require("../assets/logoblack.jpeg")}
              />
              <View>
                <Text style={{
                  fontSize: 12,
                  color: '#ffffff'
                }}> Welcome back, </Text>
                <Text style={{
                  fontSize: 16,
                  color: '#ffffff',
                  fontWeight: 'bold'
                }}> Mr. Rahim </Text>
              </View>

            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons name="bell" size={20} color={"#ffffff"} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContent}>



            {/* <ImageBackground source={require("../assets/cardback.png")} resizeMode='cover' > */}
            <TouchableOpacity style={styles.blockContent} onPress={takeImageHandler} >
              <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
                <View style={{
                  paddingTop: 40
                }}>
                  <Image
                    style={{ width: 110, height: 130, borderRadius: 25 }}
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
                    fontSize: 20,
                    margin: 10
                  }}> Shoot </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            {/* </ImageBackground> */}

            <TouchableOpacity style={styles.blockContent} onPress={pickImage}>
              <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} >
                <View style={{
                  paddingTop: 40
                }}>
                  <Image
                    style={{ width: 120, height: 100, borderRadius: 25 }}
                    source={require("../assets/upload.png")}
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
                    fontSize: 20,
                    margin: 10
                  }}> Upload </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            {image && <TouchableOpacity style={styles.blockContent}  >
              <Image source={{ uri: image }} style={styles.image} />

            </TouchableOpacity>}
            {/* <Button label="Shoot" />
  
          <Button label="Upload" onPress={pickImage} /> */}
          </View>
          {/* <View style={styles.OrderCard}>
          <View style={{ flex: 0.4 }}>
            <Image
              style={{ width: 130, height: 120, borderRadius: 35 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
          >
            <Text style={styles.CardText}> #5625554 </Text>
            <Text style={styles.CardText}> 5 Images </Text>
            <Text style={styles.CardText}>2 Days ago </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 14,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              Cancel{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.CardText}>
                Option{" "}
                <MaterialCommunityIcons
                  name="tools"
                  size={12}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OrderCard}>
          <View style={{ flex: 0.4 }}>
            <Image
              style={{ width: 130, height: 120, borderRadius: 35 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
          >
            <Text style={styles.CardText}> #5625554 </Text>
            <Text style={styles.CardText}> 5 Images </Text>
            <Text style={styles.CardText}>2 Days ago </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#0FE7A5",
                fontSize: 12,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              Approved{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.CardText}>
                Option{" "}
                <MaterialCommunityIcons
                  name="tools"
                  size={12}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OrderCard}>
          <View style={{ flex: 0.4 }}>
            <Image
              style={{ width: 130, height: 120, borderRadius: 25, margin: 5 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.3, justifyContent: "space-between", margin: 10 }}
          >
            <Text style={styles.CardText}> #5625554 </Text>
            <Text style={styles.CardText}> 5 Images </Text>
            <Text style={styles.CardText}>2 Days ago </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#0FE7A5",
                fontSize: 12,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              Approved{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.CardText}>
                Option{" "}
                <MaterialCommunityIcons
                  name="tools"
                  size={12}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OrderCard}>
          <View style={{ flex: 0.4 }}>
            <Image
              style={{ width: 130, height: 120, borderRadius: 35 }}
              source={require("../assets/logoblack.jpeg")}
            />
          </View>
          <View
            style={{ flex: 0.3, justifyContent: "space-between", margin: 20 }}
          >
            <Text style={styles.CardText}> #5625554 </Text>
            <Text style={styles.CardText}>
              {" "}
              {"\t"} {"\t"}
              {"\t"}
              {"\t"}5 Images{" "}
            </Text>
            <Text style={styles.CardText}>2 Days ago </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#0FE7A5",
                fontSize: 12,
                marginBottom: 16,
                fontWeight: "bold",
              }}
            >
              Approved{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.CardText}>
                Option{" "}
                <MaterialCommunityIcons
                  name="tools"
                  size={12}
                  color={"#ffffff"}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
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
    height: 220,
    width: '100%',
    resizeMode: 'stretch',
    borderRadius: 25
  },
  topBar: {
    flex: 0.1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    paddingTop: 30
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 10
  },
  imageBack: {
    flex: .2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,



  }
});
