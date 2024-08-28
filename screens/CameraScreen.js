import { CameraView, CameraType, useCameraPermissions,Camera } from 'expo-camera';
import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Torch from 'react-native-torch';
import PreviewImage from './PreviewImage';

export default function CameraScreen({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
 // const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [isTorchOn, setIsTorchOn] = useState(false);
  const flashFunction = () => {
    console.log('checking state', isTorchOn);
    setIsTorchOn(!isTorchOn);
    
    
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
    }
  };

  const handleRetakePhoto = () => setPhoto(null);
  if (photo) return <PreviewImage photo={photo} handleRetakePhoto={handleRetakePhoto} />


  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
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
            <MaterialCommunityIcons name="camera-plus" size={44} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePhoto} >
            <MaterialCommunityIcons name="camera-iris" size={70} color={"#FF4A22"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <MaterialCommunityIcons name="camera-flip" size={44} color={"white"} />
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
