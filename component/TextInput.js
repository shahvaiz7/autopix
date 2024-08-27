import React from "react";
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

export default function TextInput({ inputHieght,inputAlign,icon, numberOfLines, ...otherProps }) {
    const validationColor = "gray";
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: inputAlign,
                height: inputHieght,
                borderRadius: 8,
                borderColor: validationColor,
                borderWidth: StyleSheet.hairlineWidth,
                paddingLeft:16,
                
                
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
            <View>
                <Icon name={icon} color={'white'} size={18} />
            </View>
        </View>
    );
}
