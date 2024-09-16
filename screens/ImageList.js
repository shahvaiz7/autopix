import { Fontisto } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Alert,
  FlatList,
} from "react-native";
import Button from "../component/Button";

const imageList = [
  {
    id: 1,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 2,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 3,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 4,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 5,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 6,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 7,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 8,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 9,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 10,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 11,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 12,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 13,
    image: require("../assets/Rectangle 17 (3).png"),
  },
  {
    id: 14,
    image: require("../assets/Rectangle 17 (3).png"),
  },
];

export default function ImageList({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={styles.containerView}
      >
        <View
          style={{
            color: "white",
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingTop: 20,
            paddingLeft: 10,
            paddingBottom: 5,
          }}
        >
          <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate("CameraScreen")}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={"#ffffff"}
            />
            <Text
              style={{
                color: "#ffffff",
                fontFamily: "DMSans_500Medium",
                fontSize: 18,
              }}
            >
              {" "}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "#ffffff",
              fontFamily: "DMSans_500Medium",
              fontSize: 18,
            }}
          >
            {" "}
            Your Photo{" "}
          </Text>
          <Text> </Text>
        </View>

        <View style={styles.Bottom}>
          <FlatList
            data={imageList}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.ImageBox}>
                <Image
                  style={{
                    width: 168,
                    height: 150,
                    borderRadius: 15,
                    padding: 10,
                  }}
                  source={item.image}
                />
              </TouchableOpacity>
            )}
            numColumns={2}
            keyExtractor={(item) => item.id}
          />
          <Button label="Create Order" onPress={() => navigation.navigate("CreateOrder")} />
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 50

  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBox: {
    padding: 10,
    paddingBottom: 20

  },

  Bottom: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    margin: 5,
  },
});
