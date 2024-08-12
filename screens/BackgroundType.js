import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'

export default function BackgroundType({navigation}) {
  return (
    <ScrollView style={styles.containerView}>
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