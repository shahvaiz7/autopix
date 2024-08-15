import { StyleSheet, Text, TouchableOpacity, View ,Image,ScrollView,Linking,ImageBackground} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';
export default function ProfileScreen({navigation}) {
  
  const image = require("../assets/logoblack.jpeg");
  return (
  
    <ScrollView style={styles.containerView}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
       
      >
       <ImageBackground source={image}>
     
      <View style={styles.profileInfo}>
      <TouchableOpacity>
      <Image
              style={{ width:120, height: 120 ,borderRadius:50}}
              source={require("../assets/logoblack.jpeg")}
            />
          </TouchableOpacity>
     
       
      </View>
      </ImageBackground>
      <View style={styles.profileInfo}>
      <Text  style={{ color:'white',fontSize:20,fontWeight:'semibold'}}> Md Rohim Miya  </Text>
        <Text style={{ color:'#C0CACB',fontSize:14,fontWeight:'semibold'}}> Company: Graphic IT BD  </Text>
        </View>
      <View style={styles.optionList}>
      <View style={styles.optionListOne}>
       <TouchableOpacity style={styles.optionsTop}  onPress={() => navigation.navigate("Profiledetails")}> 
        <Text style={styles.CardText}>Profile </Text>
        <MaterialCommunityIcons
                  name="greater-than"
                  size={18}
                  color={"white"}
                />
       </TouchableOpacity>
       <TouchableOpacity style={styles.optionsTop} onPress={() => navigation.navigate("AccountSetting")}> 
        <Text style={styles.CardText}>Account Setting</Text>
        <MaterialCommunityIcons
                  name="greater-than"
                  size={18}
                  color={"white"}
                />
       </TouchableOpacity>
       </View>
       <View style={styles.optionListTwo}>
       <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("Shareapp")}> 
        <Text style={styles.CardTextTwo}>Share app</Text>
        <MaterialCommunityIcons
                  name="greater-than"
                  size={18}
                  color={"white"}
                />
       </TouchableOpacity>
       <TouchableOpacity style={styles.options} onPress = {() => {Linking.openURL('https://autopix.no/supports')}}> 
        <Text style={styles.CardTextTwo}>Support</Text>
        <MaterialCommunityIcons
                  name="greater-than"
                  size={18}
                  color={"white"}
                />
       </TouchableOpacity>
       <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("About")} > 
        <Text style={styles.CardTextTwo}>About</Text>
        <MaterialCommunityIcons
                  name="greater-than"
                  size={18}
                  color={"white"}
                  
                />
       </TouchableOpacity>
       </View>
      </View>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor:'#020202'
  },
  topBack:{
    flex:.10,
   backgroundColor:'gray',
   height:100,
   marginTops:-20
   
  },
  profileInfo:{
    flex:.30,
    alignContent:'center',
    alignItems:'center',
   
    
    
   
    
  },
  optionList:{
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    flex:.80,
  },
  optionListOne:{
    

  },
  optionListTwo:{
   borderWidth:1,
   borderColor:'gray',
    borderRadius:20,
    margin:5,
    padding:5

  },
  options:{
    margin:8,
    padding:10,
    borderRadius:10,
    color:'white',
    justifyContent:'space-between',
    flexDirection:'row',
    
    borderBottomColor:'gray',
    borderBottomWidth:.10,
    width:'100%',
  },
  optionsTop:{
    margin:5,
    padding:12,
    borderRadius:10,
    color:'white',
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
    borderWidth:1,
    borderColor:'gray',
   

  },
  CardText: {
    color: "#ffffff",
    fontStyle: "italic",
    fontSize:14,
    
  },
  CardTextTwo: {
    color: "#ffffff",
    fontStyle: "italic",
    fontSize:14,
  
   
    
  },
})