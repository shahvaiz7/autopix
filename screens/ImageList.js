import { Fontisto } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from "react"; // Import useState
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";
import Button from "../component/Button";
import UserContext from "../auth/UserContext";

export default function ImageList({ navigation }) {
  const { SelectedImage,setSelectedOrderImage } = React.useContext(UserContext);
  const [selectedImages, setSelectedImages] = useState([]); // State to track selected images

  const toggleImageSelection = (image) => {
    setSelectedImages((prevSelected) => {
      const alreadySelected = prevSelected.find(
        (selectedImage) => selectedImage.uri === image.uri
      );
      if (alreadySelected) {
        // Unselect image
        return prevSelected.filter(
          (selectedImage) => selectedImage.uri !== image.uri
        );
      } else {
        // Select new image
        return [...prevSelected, image];
      }
    });
  };

  const isSelected = (imageUri) => {
    return selectedImages.some((selectedImage) => selectedImage.uri === imageUri);
  };

  
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
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate("CameraScreen")}
          >
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
            data={SelectedImage}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => toggleImageSelection(item)} // Toggle selection on press
                style={[
                  styles.ImageBox,
                  isSelected(item.uri) && styles.selectedImageBox,
                ]}
              >
                <Image
                  style={{
                    width: 168,
                    height: 150,
                    borderRadius: 15,
                    padding: 10,
                  }}
                  source={{ uri: item.uri }}
                />
                {isSelected(item.uri) && ( // Show check icon if selected
                  <View style={styles.checkIconContainer}>
                    <Fontisto name="check" size={20} color={"green"} />
                  </View>
                )}
              </TouchableOpacity>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()} // Use toString for key
          />
          <Button
            label="Create Order"
            onPress={() =>{navigation.navigate("CreateOrder"),setSelectedOrderImage(selectedImages)}}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBox: {
    margin: 10,
    borderRadius: 15,
    paddingBottom: 20,
  },
  selectedImageBox: {
    // New style for selected images
    borderWidth: 3,
    borderColor: "green",
  },
  checkIconContainer: {
    // Style for check icon container
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    padding: 5,
  },
  Bottom: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
});
