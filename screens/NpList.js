import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';

const data = [
    {
        id: 1,
        image: require('../assets/car.png'),
    },
    {
        id: 2,
        image: require('../assets/floor1.png'),
    },
    {
        id: 3,
        image: require('../assets/car.png'),
    },
    {
        id: 4,
        image: require('../assets/car.png'),
    },
    {
        id: 5,
        image: require('../assets/car.png'),
    },
    {
        id: 6,
        image: require('../assets/car.png'),
    },


    // ... more items
];


export default function NpList({ navigation }) {
    return (
        <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
            <View>
         <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                   onPress={() => navigation.navigate("GuideAdd",item.image,item.id)}
                    style={{
                        backgroundColor: 'transparent', borderRadius: 25, padding: 10, margin: 10
                    }}
                >
                <Image style={styles.imageBox} source={item.image} />
                </TouchableOpacity>
            )}
             // Important! This ensures FlatList re-renders when state changes
        />
        </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    imageBox: {
        width: '100%',
        height: 150,
        borderRadius: 25

    }
})