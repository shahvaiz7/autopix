import { StyleSheet, Text, TouchableOpacity, View ,Image,ScrollView} from 'react-native'
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
       <TouchableOpacity style={styles.options}  onPress={() => navigation.navigate("Profiledetails")}> 
        <Text style={styles.CardText}>Profile </Text>
        <MaterialCommunityIcons
                  name="arrow-collapse-right"
                  size={20}
                  color={"white"}
                />
       </TouchableOpacity>
       <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("AccountSetting")}> 
        <Text style={styles.CardText}>Account Setting</Text>
        <MaterialCommunityIcons
                  name="arrow-collapse-right"
                  size={20}
                  color={"white"}
                />
       </TouchableOpacity>
       <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("Shareapp")}> 
        <Text style={styles.CardText}>Share app</Text>
        <MaterialCommunityIcons
                  name="arrow-collapse-right"
                  size={20}
                  color={"white"}
                />
       </TouchableOpacity>
       <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("Support")}> 
        <Text style={styles.CardText}>Support</Text>
        <MaterialCommunityIcons
                  name="arrow-collapse-right"
                  size={20}
                  color={"white"}
                />
       </TouchableOpacity>
       <TouchableOpacity style={styles.options} onPress={() => navigation.navigate("About")} > 
        <Text style={styles.CardText}>About</Text>
        <MaterialCommunityIcons
                  name="arrow-collapse-right"
                  size={20}
                  color={"white"}
                  
                />
       </TouchableOpacity>
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
    flex:.20,
  },
  profileInfo:{
    flex:.30,
    alignContent:'center',
    alignItems:'center',
    margin:-10
  },
  optionList:{
   
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    flex:.70,
    padding:10
  },
  options:{
    margin:5,
    padding:12,
    borderRadius:10,
    color:'white',
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:'#1F2932',
    width:'100%'
  },
  CardText: {
    color: "#ffffff",
    fontStyle: "italic",
    fontSize:14
    
  },
})