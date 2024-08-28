import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView,ImageBackground} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function BackgroundType({navigation}) {
  return (
    <ScrollView style={styles.containerView}>
       <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
       <View style={{
            color: 'white',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: 40,
            paddingLeft:10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}  style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name="arrow-left" size={24} color={"#ffffff"} />
              <Text style={{
              color: "#ffffff",
              fontFamily: 'DMSans_500Medium', fontSize: 18
            }}> </Text>
            </TouchableOpacity>
            <Text style={{
              color: "#ffffff",
              fontFamily: 'DMSans_500Medium', fontSize: 18
            }}>Background</Text>
            <Text>       </Text>

        </View>
     <TouchableOpacity style={styles.ListView}  onPress={() => navigation.navigate("BackgroundList")}>
     <Text style={{ color: "#ffffff",fontSize:16 }}> Interior </Text>
     <Image
        style={styles.BackgroundType}
        source={require("../assets/car.png")}
      />
     </TouchableOpacity>
     <TouchableOpacity style={styles.ListView}  onPress={() => navigation.navigate("BackgroundList")}>
     <Text style={{ color: "#ffffff",fontSize:16 }}> Studio </Text>
     <Image
        style={styles.BackgroundType}
        source={require("../assets/red-car2.png")}
      />
     </TouchableOpacity>
     <TouchableOpacity style={styles.ListView}  onPress={() => navigation.navigate("BackgroundList")}>
     <Text style={{ color: "#ffffff",fontSize:16 }}> Color Background </Text>
     <Image
        style={styles.BackgroundType}
        source={require("../assets/car.png")}
      />
     </TouchableOpacity>
     <TouchableOpacity style={styles.ListView}  onPress={() => navigation.navigate("BackgroundList")}>
     <Text style={{ color: "#ffffff",fontSize:16 }}> Others </Text>
     <Image
        style={styles.BackgroundType}
        source={require("../assets/red-car3.png")}
      />
     </TouchableOpacity>
     </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: "#1D6167",  
    
      },
      ListView:{

        paddingBottom:10,
        margin:15
      },
      BackgroundType:{
      width:'auto',
     height:150,
      margin:5,
      borderRadius:15
    
          
      }
})