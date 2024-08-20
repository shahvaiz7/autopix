import { View, Text, TouchableOpacity,StyleSheet ,ImageBackground} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Component } from 'react';
export default function BottomTab({ state, descriptors, navigation }) {
    const image = require("../assets/bottomtab.png");
    const icon = {
        Shoot:() => <MaterialCommunityIcons name="note"  size={26} /> ,
        Order:() => <MaterialCommunityIcons name="note"  size={26} />,
        Guide:() => <MaterialCommunityIcons name="note"  size={26} />,
        profile:() => <MaterialCommunityIcons name="note"  size={26}/>
       
    }
    return (
       
       
            <View style={styles.tabbar} >
                 <ImageBackground source={image}>
   
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabbarItem}
                    >
                       
                        <Text style={{ color: isFocused ? '#A52306' : 'white', fontWeight:'bold'}}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
             </ImageBackground>
        </View>
       
    );
}
const styles = StyleSheet.create({
    tabbar:{
        padding:15,
        margin:20,
        flexDirection:'row'  ,
        alignItems:'center',

    },
    tabbarItem:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        
    }
})