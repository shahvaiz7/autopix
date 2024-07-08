import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button({ label, onPress,backgroundColor }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
        alignContent:'center',
        backgroundColor: "green",
        marginTop: 20,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 18, color: "white", textTransform: "uppercase" }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
