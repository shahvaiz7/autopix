import React, { useState } from 'react';
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

    // const toggleItemSelect = (id) => {
    //     if (selectedIds.includes(id)) {
    //         setSelectedIds(prevIds => prevIds.filter(itemId => itemId !== id));
    //         navigation.navigate("GuideAdd")
    //     } else {
    //         setSelectedIds(prevIds => [...prevIds, id]);
    //     }
    // };
    return (
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
            }}> Floor</Text>
            <Text>       </Text>

        </View>
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{
                  backgroundColor: 'transparent', borderRadius: 35, padding: 10, margin: 10
                }}
              >
             
                <View>
                  <Image style={styles.imageBox} source={item.image} />
                {/* <View style={styles.SelectIcon}> 
                  <MaterialCommunityIcons name="check-circle" size={24} color={"white"} />
                </View>  */}
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            extraData={selectedIds} // Important! This ensures FlatList re-renders when state changes
        />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBox: {
        width: '100%',
        height: 150,
        borderRadius:25

    },
    selectIcon:{
        justifyContent:'flex-start',alignItems:'flex-start',alignSelf:'flex-start', position:'absolute'

    },
})