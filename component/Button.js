import React from "react";
import { TouchableOpacity, Text,StyleSheet ,ImageBackground,View} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { RNSVGSvgAndroid } from "react-native-svg";

import { useFonts, DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
   } from "@expo-google-fonts/dm-sans";
export default function Button({ label, onPress, backgroundColor }) {
  const image = require("../assets/button.png");
  useFonts({DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,});
  return (
    
    <ImageBackground
      source={image}
      style={{  width:'100%' ,height:54,justifyContent:'center'}}
      
      imageStyle={{ borderRadius:10}}
        // Background Linear Gradient
       // colors={['#A52306', '#ffffff']}
        // start={{x: 0.3, y: 0.8}} end={{x: 0.1, y: .5}}
        // locations={[0.9,0.1]}
        
        // colors={['#A52306','#FFC0B3', '#FFC0B3']}
        // start={{x: 0, y: .5}} 
        // end={{x: .5, y: 0}}
        // locations={[.1,.5,.9]}
       
      >
    <TouchableOpacity  style={styles.containerView}  activeOpacity={0.7}
      onPress={onPress}>
   
     
       
      <Text
        style={{ fontSize: 16,
          fontFamily:'DMSans_500Medium', color: "white"}}
      >
        {label}
      </Text>
   
    </TouchableOpacity>

    </ImageBackground>
  
  );
}
const styles = StyleSheet.create({
  containerView:{
  margin:10,
  alignContent:'center',
  alignItems:'center',
  
 
    
  }
})