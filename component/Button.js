import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button({ label, onPress, backgroundColor }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        padding: 10,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        backgroundColor: "#FF4A22",
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
