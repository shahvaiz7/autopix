import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const data = [
    {
        id: 1,
        image: require('../assets/logo1.png'),
    },
    {
        id: 2,
        image: require('../assets/logo2.png'),
    },
    {
        id: 3,
        image: require('../assets/logo3.png'),
    },
    {
        id: 4,
        image: require('../assets/logo1.png'),
    },
    {
        id: 5,
        image: require('../assets/logo2.png'),
    },
    {
        id: 6,
        image: require('../assets/logo3.png'),
    },

    // ... more items
];


export default function LogoList({ navigation }) {
    const [selectedIds, setSelectedIds] = useState([]);

    return (
        <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
             <View style={{
            color: 'white',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: 40,
            paddingLeft:10,
            paddingBottom:10
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
            }}> Logo</Text>
            <Text>       </Text>

        </View>
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                    style={{
                        backgroundColor: 'white', borderRadius: 25, padding: 10, margin: 10
                    }}
                >
                    {item.image && <Image style={styles.imageBox} source={item.image} />}
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
             // Important! This ensures FlatList re-renders when state changes
        />
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    imageBox: {
        width: "100%",
        height: 207,
        borderRadius: 85

    }
})