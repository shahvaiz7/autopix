import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Image,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import React, { useState, useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import Button from "../component/Button";
import TextInput from "../component/TextInput";
import axios from "axios";
import BaseUrl from "../auth/BaseUrl";
import UserContext from "../auth/UserContext";

export default function GuideAdd({ navigation, route }) {
  const { userData } = useContext(UserContext);
  const bgswitch = route.params;
  const image = route.params;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [backgroundSwitch, setBackgroundSwitch] = useState(false);
  const togglebackgroundSwitch = () =>
    setBackgroundSwitch((previousState) => !previousState);
  const [background, setBackground] = useState(null);

  const [floorSwitch, setFloorSwitch] = useState(false);
  const togglefloorSwitch = () =>
    setFloorSwitch((previousState) => !previousState);
  const [floor, setFloor] = useState(null);

  const [logoSwitch, setLogoSwitch] = useState(false);
  const togglelogSwitch = () =>
    setLogoSwitch((previousState) => !previousState);
  const [logo, setLogo] = useState(null);

  const [npSwitch, setNpSwitch] = useState(false);
  const togglenpSwitch = () => setNpSwitch((previousState) => !previousState);
  const [numberplate, setNumberplate] = useState(null);
  const [InstructionName, setInstructionName] = useState("");

  const pickBackground = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setBackground(result.assets[0].uri);
    }
  };

  console.log(floorSwitch);

  const PostInstructions = () => {
    if(!InstructionName){
      alert("Enter Instruction name")
      return
    }

    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Token ${userData?.token}`
    );
    myHeaders.append(
      "Cookie",
      "csrftoken=ASTAfJ6pYzH8nZpIHUf5SIJWuXrLAPe8; sessionid=lnupp2l3rm3a6se4vwr6uj5xlnp291b7"
    );

    const formdata = new FormData();
    formdata.append("instruction_name", InstructionName);
    formdata.append("instruction_details", "testDetails");
    formdata.append("share_instruction", "test@gmail.com");
    formdata.append("approval", "test@gmail.com");
    formdata.append("logo_placement", "null");
    formdata.append("logo", logoSwitch ? "Addlogo" : "Dontaddlogo");
    formdata.append("floor", floorSwitch ? "Add Floor" : "Don't Add Floor");
    formdata.append("background", backgroundSwitch ? "Add Background" : "Don't Add Background");
    formdata.append(
      "addlicenseplate",
      npSwitch ? "Add License Plate" : "Don't Add License Plate"
    );

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${BaseUrl}/instructions/`, requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.containerView}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={styles.containerView}
      >
        <ScrollView>
          <View style={styles.Head}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "condensedBold",
              }}
            >
              {" "}
              Instruction{" "}
            </Text>
          </View>
          <View style={styles.optionList}>
            <Text style={styles.InputHead}> Instruction name </Text>

            <TextInput
              inputHieght={54}
              inputAlign={"center"}
              placeholder="Enter a name.."
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="done"
              onChangeText={setInstructionName}
            />
          </View>
          <View style={styles.InstructionView}>
            <View style={styles.OptionView}>
              <Text
                style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}
              >
                {" "}
                Background{" "}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={backgroundSwitch ? "#FF4A22" : "#ffffff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={togglebackgroundSwitch}
                value={backgroundSwitch}
              />
            </View>
            {backgroundSwitch && (
              <View style={styles.imageContainer}>
                <TouchableOpacity
                  style={styles.addImage}
                  onPress={() =>
                    navigation.navigate("BackgroundType", { bgswitch })
                  }
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={30}
                    color={"#ffffff"}
                  />
                </TouchableOpacity>
                {image && (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("BackgroundList")}
                  >
                    <Image source={image} style={styles.logo1} />
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
          <View style={styles.InstructionView}>
            <View style={styles.OptionView}>
              <Text
                style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}
              >
                {" "}
                Floor{" "}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={floorSwitch ? "#FF4A22" : "#ffffff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={togglefloorSwitch}
                value={floorSwitch}
              />
            </View>
            {floorSwitch && (
              <View style={styles.imageContainer}>
                <TouchableOpacity
                  style={styles.addImage}
                  onPress={() => navigation.navigate("FloorType")}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={30}
                    color={"#ffffff"}
                  />
                </TouchableOpacity>
                {background && (
                  <Image source={{ uri: background }} style={styles.logo1} />
                )}
              </View>
            )}
          </View>
          <View style={styles.InstructionView}>
            <View
              style={styles.OptionView}
              onPress={() => navigation.navigate("#")}
            >
              <Text
                style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}
              >
                {" "}
                Logo{" "}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={logoSwitch ? "#FF4A22" : "#ffffff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={togglelogSwitch}
                value={logoSwitch}
              />
            </View>
            {logoSwitch && (
              <View style={styles.imageContainer}>
                <TouchableOpacity
                  style={styles.addImage}
                  onPress={() => navigation.navigate("LogoList")}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={30}
                    color={"#ffffff"}
                  />
                </TouchableOpacity>
                {background && (
                  <Image source={{ uri: background }} style={styles.logo1} />
                )}
              </View>
            )}
          </View>
          <View style={styles.InstructionView}>
            <View
              style={styles.OptionView}
              onPress={() => navigation.navigate("#")}
            >
              <Text
                style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}
              >
                {" "}
                Number Plate{" "}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={npSwitch ? "#FF4A22" : "#ffffff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={togglenpSwitch}
                value={npSwitch}
              />
            </View>
            {/* {npSwitch && 
            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.addImage} onPress={() => navigation.navigate("NpList")} >
                <MaterialCommunityIcons name="plus" size={30} color={"#ffffff"} />

              </TouchableOpacity>
              


            </View>} */}
          </View>

          <View style={styles.Bottom}>
            {(backgroundSwitch || npSwitch || logoSwitch || floorSwitch) && (
              <Button
                label="Create Instruction"
                onPress={() => PostInstructions()}
              />
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Head: {
    alignContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 50,
  },

  containerView: {
    flex: 1,
    backgroundColor: "#020202",
    paddingBottom: 10,
  },
  InstructionView: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    paddingBottom: 10,
    margin: 15,

    shadowOpacity: 0.2,
  },
  OptionView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingTop: 10,
  },
  InputHead: {
    fontSize: 16,
    fontFamily: "DMSans_500Medium",
    paddingTop: 10,
    color: "#ffffff",
    paddingBottom: 5,
    padding: 10,
  },

  optionList: {
    flex: 0.1,
    padding: 20,
  },
  addImage: {
    backgroundColor: "gray",
    height: 50,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    borderRadius: 5,
  },
  imageContainer: {
    flexDirection: "row",
  },
  logo1: {
    height: 60,
    width: 90,
    marginLeft: 10,
    borderRadius: 10,
  },
  CardText: {
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  Bottom: {
    flex: 0.2,
    width: "100%",
    padding: 20,
  },
});
