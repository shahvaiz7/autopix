import React from "react";
import { TextInput as RNTextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function TextInput({ onPress, inputHieght, inputAlign, icon, linenumber, ...otherProps }) {
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
                paddingLeft: 16,

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
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name={icon} color={'white'} size={18} paddingRight={20} />
            </TouchableOpacity>
        </View>
    );
}
