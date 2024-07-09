import { StyleSheet, Text, View,ScrollView ,TouchableOpacity,Image} from 'react-native'
import React , { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../component/Button';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera/legacy';
import { CameraView, useCameraPermissions } from 'expo-camera';


export default function ShootScreen({navigation}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };



  
  return (
   
    <View  style={styles.containerView}>
      <View style={styles.topBar} >
      {/* <Text> NAme</Text>
      <Text> NAme</Text> */}
      

        <View>
         <Text> NAme</Text>
        </View>
        <View>
          <Text> Logo</Text>
        </View>

      </View>
      <View style={styles.bodyContent}>
   
       {image && <Image source={{ uri: image }} style={styles.image} />}
        <Button
            label="Shoot"
          
          />

          
             
        <Button
            label="Upload"
            onPress={pickImage}
          />
 </View>
         

    </View>
  
  )
}

const styles = StyleSheet.create({
  containerView:{
    flex:1,
    justifyContent:'space-between',
    
    
  },
  image:{
    height:300,
    width:300

  },
  topBar:{
    flex:.1,
    flexDirection:'row',
    margin:10,
    justifyContent:'space-between'
  
    
  },
  bodyContent:{
    flex:.5,
    alignItems:'center'
  }
})