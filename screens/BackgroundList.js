import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const data = [
  {
    id: 1,
    backgroundImage: require('../assets/background1.png'),
  },
  {
    id: 2,
    backgroundImage: require('../assets/background2.png'),
  },
  {
    id: 3,
    backgroundImage: require('../assets/background3.png'),
  },
  {
    id: 4,
    backgroundImage: require('../assets/background1.png'),
  },
  {
    id: 5,
    backgroundImage: require('../assets/background2.png'),
  },
  {
    id: 6,
    backgroundImage: require('../assets/background3.png'),
  },


  // ... more items
];


export default function BackgroundList({ navigation,route }) {
  const [selectedIds, setSelectedIds] = useState([]);
  //const {bg,id} = route.params.BackgroundList;
 

  // const toggleItemSelect = (id) => {
  //   if (selectedIds.includes(id)) {
  //     setSelectedIds(prevIds => prevIds.filter(itemId => itemId !== id));
  //     navigation.navigate("Home",)
  //   } else {
  //     setSelectedIds(prevIds => [...prevIds, id]);
  //   }
  // };
  return (
    <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
      
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("GuideAdd",item.backgroundImage)}
          style={{
            backgroundColor: 'transparent', borderRadius: 35, padding: 10, margin: 10
          }}
        >
       
          <View>
            <Image style={styles.imageBox} source={item.backgroundImage} />
          {/* <View style={styles.SelectIcon}> 
            <MaterialCommunityIcons name="check-circle" size={24} color={"white"} />
          </View>  */}
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      // Important! This ensures FlatList re-renders when state changes
    />
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  BackList:{
    flex:1,
  
  },

  imageBox: {
    width: '100%',
    height: 170,
    borderRadius: 25
  },
  SelectIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    left: 6,
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
    borderRadius: 45



  },
})