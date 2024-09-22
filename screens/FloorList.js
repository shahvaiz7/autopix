import React, { useState,useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image ,ImageBackground} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const data = [
    {
        id: 1,
        image: require('../assets/floor1.png'),
    },
    {
        id: 2,
        image: require('../assets/floor2.png'),
    },
    {
        id: 3,
        image: require('../assets/floor3.png'),
    },
    {
        id: 4,
        image: require('../assets/floor4.png'),
    },
    {
        id: 5,
        image: require('../assets/floor5.png'),
    },

    // ... more items
];



export default function FloorList({ navigation }) {
    const [selectedIds, setSelectedIds] = useState([]);
    const [imageList, setImageList] = useState(null);
useEffect(() => {
  getFloor();
}, []);

const getFloor = () => {
  const URL = "https://app.carline.no/api/floors/";

  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setImageList(data);
      // console.log(data);
    });
};

    // const toggleItemSelect = (id) => {
    //     if (selectedIds.includes(id)) {
    //         setSelectedIds(prevIds => prevIds.filter(itemId => itemId !== id));
    //         navigation.navigate("GuideAdd")
    //     } else {
    //         setSelectedIds(prevIds => [...prevIds, id]);
    //     }
    // };
    
    return (
        <ImageBackground source={require("../assets/background.png")} resizeMode='stretch'  style={styles.BackList} >
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
            }}> Floor</Text>
            <Text>       </Text>

        </View>
        <FlatList
        data={imageList}
        renderItem={({ item }) => (
          
          <TouchableOpacity
            onPress={() => navigation.navigate("GuideAdd", item.image)}
            style={{
              backgroundColor: 'transparent', borderRadius: 35, margin: 5
            }}
          >
          <Image style={styles.ImageList} source={{uri: item.image}} />
          </TouchableOpacity>
          
        )}
        keyExtractor={(item) => item.id}
      />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  BackList: {
    flex: 1,
  },
    
    ImageList:{
      width:'auto',
     height:150,
      margin:5,
      borderRadius:15
    
          
      },
})