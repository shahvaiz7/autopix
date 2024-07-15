import React from "react";
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

export default function TextInput({ icon, ...otherProps }) {
    const validationColor = "gray";
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                height: 48,
                borderRadius: 8,
                borderColor: validationColor,
                borderWidth: StyleSheet.hairlineWidth,
                padding: 8,
            }}
        >
           
            <View style={{ flex: 1 }}>
                <RNTextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="gray"
                    {...otherProps}
                />
            </View>
            <View style={{ padding: 2 }}>
                <Icon name={icon} color={validationColor} size={24} />
            </View>
        </View>
    );
}
