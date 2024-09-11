import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView,ImageBackground,FlatList} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FlrType = [
    { 
      id: 1,
      image: require('../assets/red-car2.png'),
     TypeName:'Interior',
    },
   
  ];
export default function FloorType({navigation}) {
  return (
 
       <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' style={styles.containerView} >
       <View style={{
            color: 'white',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: 40,
            paddingLeft:10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}  style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name="arrow-left" size={24} color={"#ffffff"} />
              <Text style={{
              color: "#ffffff",
              fontFamily: 'DMSans_500Medium', fontSize: 18
            }}> </Text>
            </TouchableOpacity>
            <Text style={{
              color: "#ffffff",
              fontFamily: 'DMSans_500Medium', fontSize: 18
            }}>Floor Type </Text>
            <Text>       </Text>

        </View>
        <FlatList 
        style={styles.bodyContent}
        data={FlrType}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.ListView}  onPress={() => navigation.navigate("FloorList")}>
     <Text style={{ color: "#ffffff",fontSize:16 }}> {item.TypeName} </Text>
     <Image
        style={styles.BackgroundType}
        source={item.image}
      />
     </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />  
    
     </ImageBackground>

  )
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: "#020202",  
    
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