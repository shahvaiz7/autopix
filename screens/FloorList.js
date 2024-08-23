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

    const toggleItemSelect = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(prevIds => prevIds.filter(itemId => itemId !== id));
            navigation.navigate("GuideAdd")
        } else {
            setSelectedIds(prevIds => [...prevIds, id]);
        }
    };
    return (
        <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >
            <View >
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => toggleItemSelect(item.id)}
                    style={{
                        backgroundColor: selectedIds.includes(item.id) ? 'blue' : 'transparent', borderRadius: 25, padding: 10, margin: 10
                    }}
                    
                >
                   {/* { item.id && <View style={styles.selectIcon}>
                      <MaterialCommunityIcons name="check-circle" size={24} color={"red"} />
                      </View> } */}
                   {/* {{selectedIds.includes(item.id) ? <MaterialCommunityIcons name="check-circle" size={24} color={"red"} />: null }} */}
                    {item.image && <Image style={styles.imageBox} source={item.image} />}
                  
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            extraData={selectedIds} // Important! This ensures FlatList re-renders when state changes
        />
        </View>
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