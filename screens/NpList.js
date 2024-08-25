import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';

const data = [
    {
        id: 1,
        image: require('../assets/car.png'),
    },
    {
        id: 2,
        image: require('../assets/car.png'),
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
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleItemSelect = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(prevIds => prevIds.filter(itemId => itemId = id));
            navigation.navigate("GuideAdd")
        } else {
            setSelectedIds(prevIds => [...prevIds, id]);
        }
    };
    return (
        <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => navigation.navigate("GuideAdd",{background: item})}
                    style={{
                        backgroundColor: selectedIds.includes(item.id) ? 'red' : 'transparent', borderRadius: 25, padding: 10, margin: 10
                    }}
                >
                    {item.image && <Image style={styles.imageBox} source={item.image} />}
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
        borderRadius: 25

    }
})