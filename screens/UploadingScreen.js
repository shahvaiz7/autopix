//npm install react-native-svg
//npx expo install react-native-reanimated
// npm install react-native-circular-progress-indicator


import CircularProgress from 'react-native-circular-progress-indicator';
import {Text,View,ImageBackground,Image,Style,StyleSheet,Alert,TouchableOpacity,FlatList,Button,ActivityIndicator} from 'react-native';
import React, { useState,useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
export default function UploadingScreen({route, navigation}) {

                
return (
    <LinearGradient
    // Background Linear Gradient
    colors={['#A52306', '#020202']}
    locations={[0.1, 0.3]}
    style={styles.containerView}
  >
          
         
{/* <ImageBackground  source={require("../assets/loading.png")}>
<CircularProgress
  value={100}
  radius={125}
  duration={3000}
  progressValueColor={'#A52306'}
  maxValue={100}
  onAnimationComplete={() => test}
  activeStrokeWidth={18}
  activeStrokeColor={'#A52306'}
  titleColor={'#A52306'}
  titleStyle={{fontWeight: 'bold'}}
/>
</ImageBackground> */}
 <CircularProgress
  value={100}
  radius={100}
  inActiveStrokeOpacity={1}
  activeStrokeWidth={15}
  valueSuffix={'%'}
  inActiveStrokeWidth={20}
  progressValueStyle={{ fontWeight: 'bold',fontSize:30, color: 'white' }}
  activeStrokeSecondaryColor="#A52306"
  inActiveStrokeColor="black"
  duration={5000}
  dashedStrokeConfig={{
    count: 50,
    width: 8,
  }}
  strokeColorConfig={[
    { color: '#FF4A22', value: 0 },
    { color: '#FF4A22', value: 50 },
    { color: '#FF4A22', value: 100 },
  ]}
  
  onAnimationComplete={() => navigation.navigate("SuccessScreen")}
/>   
<Text style={{ color: "#ffffff" , fontWeight:'bold', fontSize:24,padding:30}}>Uploading File  </Text>

  </LinearGradient>
);
}
const styles = StyleSheet.create({
    containerView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})