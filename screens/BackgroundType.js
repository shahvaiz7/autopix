import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView,ImageBackground,FlatList} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BgType = [
  { 
    id: 1,
    image: require('../assets/red-car2.png'),
   TypeName:'Interior',
  },
  { 
    id: 2,
    image: require('../assets/red-car3.png'),
   TypeName:'Studio',
  },
  { 
    id: 3,
    image: require('../assets/car.png'),
   TypeName:'Color Background',
  },
  { 
    id: 4,
    image: require('../assets/car.png'),
   TypeName:'Others',
  },
];
export default function BackgroundType({navigation,image,TypeName}) {
  return (
    <View style={styles.containerView}>
       <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
       <View style={{
            color: 'white',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: 40,
            paddingLeft:10
          }}>
            <TouchableOpacity onPress={() => navigation.navigate("GuideAdd")}  style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name="arrow-left" size={24} color={"#ffffff"} />
              <Text style={{
              color: "#ffffff",
              fontFamily: 'DMSans_500Medium', fontSize: 18
            }}> </Text>
            </TouchableOpacity>
            <Text style={{
              color: "#ffffff",
              fontFamily: 'DMSans_500Medium', fontSize: 18
            }}>Background Type</Text>
            <Text>       </Text>

        </View>

        <FlatList 
        style={styles.bodyContent}
        data={BgType}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.ListView}  onPress={() => navigation.navigate("BackgroundList")}>
     <Text style={{ color: "#ffffff",fontSize:16 }}> {item.TypeName} </Text>
     <Image
        style={styles.BackgroundType}
        source={item.image}
      />
     </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />  
    
     {/* <TouchableOpacity style={styles.ListView}  onPress={() => navigation.navigate("BackgroundList")}>
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
     </TouchableOpacity> */}
     </ImageBackground>
    </View>
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