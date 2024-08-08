import { StyleSheet, Text, TouchableOpacity, View ,Image,ScrollView,Linking} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function ProfileScreen({navigation}) {
  return (
    <ScrollView style={styles.containerView}>
      <View style={styles.topBack}>
        
      
      <Image
              style={{ width: "100%", height: 150 }}
              source={require("../assets/logowhite.jpeg")}
            />
      </View>
      <View style={styles.profileInfo}>
      <TouchableOpacity>
      <Image
              style={{ width:120, height: 120 ,borderRadius:50}}
              source={require("../assets/logoblack.jpeg")}
            />
          </TouchableOpacity>
     
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
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor:'#1D6167'
  },
  topBack:{
    flex:.10,
  },
  profileInfo:{
    flex:.20,
    alignContent:'center',
    alignItems:'center',
    margin:-10,
    
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
    backgroundColor:'#1F2932',
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
    backgroundColor:'#1F2932',
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
    backgroundColor:'#1F2932',

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