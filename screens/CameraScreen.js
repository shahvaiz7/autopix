import { CameraView, CameraType, useCameraPermissions, Camera,  } from 'expo-camera';
import React, { useRef, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Torch from 'react-native-torch';
import PreviewImage from './PreviewImage';
import { FlashMode } from 'expo-camera/build/legacy/Camera.types';
import * as MediaLibrary from 'expo-media-library';
import ImageList from './ImageList';

export default function CameraScreen({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  //const [hasMediaPermission, setHasMediaPermission] = useEffect(null);

  const cameraRef = useRef(null);
  // const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [isLightOn, setLightOn] = useState('off');
  const flashFunction = () => {
    console.log('checking state', isTorchOn);
    setIsTorchOn(!isTorchOn);
    setLightOn(flashMode => (flashMode === 'off' ? 'on' : 'off'))
  };


  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takedPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takedPhoto);
      console.log(takedPhoto.uri);
    }
  };

  const savePhoto = async () => {
    if (photo) {
      try {
        await MediaLibrary.createAssetAsync(photo.uri);
        alert('Saved Successfully!')
        setPhoto(null);
      } catch (error) {
        console.log(error)

      }
    }
  }
  const imageList = () =>   navigation.navigate('ImageList');

  const handleRetakePhoto = () => setPhoto(null);
  if (photo)
    return (
      <PreviewImage photo={photo} handleRetakePhoto={handleRetakePhoto} savePhoto={savePhoto} imageList={imageList} />)


  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef} flash={isLightOn}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={flashFunction}>
            <MaterialCommunityIcons name={isTorchOn ? 'flash-outline' : 'flash-off'} size={24} color={"white"} />
          </TouchableOpacity>
          <Text style={styles.HeadText}>Identify the Vehical</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialCommunityIcons name="window-close" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} >
            <Image
              style={{ width: 44, height: 44, borderRadius: 50, resizeMode: 'contain' }}
              source={require("../assets/Fillter.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePhoto} >
            <Image
              style={{ width: 70, height: 70, borderRadius: 50, resizeMode: 'contain' }}
              source={require("../assets/Shutter.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Image
              style={{ width: 44, height: 44, borderRadius: 50, resizeMode: 'contain' }}
              source={require("../assets/Switch.png")}
            />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  topContainer: {
    flex: .1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    marginTop: 40,
    padding: 10,

  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  HeadText: {
    fontSize: 16,
    fontFamily: 'DMSans_500Medium',
    padding: 5,
    color: "#ffffff",
    paddingBottom: 10
  },
});
