import React from "react";
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

export default function TextInput({ icon, numberOfLines, ...otherProps }) {
    const validationColor = "gray";
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                height: 54,
                borderRadius: 8,
                borderColor: validationColor,
                borderWidth: StyleSheet.hairlineWidth,
                padding: 16,
                
            }}
        >

            <View style={{ flex: 1 }}>
                <RNTextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="gray"
                    color='white'
                    
                   
                    {...otherProps}
                />
            </View>
            <View style={{ padding: 2 }}>
                <Icon name={icon} color={'white'} size={18} />
            </View>
        </View>
    );
}
