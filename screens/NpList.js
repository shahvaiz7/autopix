import React, { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => toggleItemSelect(item.id)}
                    style={{
                        backgroundColor: selectedIds.includes(item.id) ? 'red' : 'white', borderRadius: 25, padding: 10, margin: 10
                    }}
                >
                    {item.image && <Image style={styles.imageBox} source={item.image} />}
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            extraData={selectedIds} // Important! This ensures FlatList re-renders when state changes
        />

    )
}

const styles = StyleSheet.create({
    imageBox: {
        width: '100%',
        height: 150,

    }
})