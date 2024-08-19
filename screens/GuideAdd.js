import { StyleSheet, Text, View, TouchableOpacity, Switch, Image, ScrollView } from 'react-native'
import React, { useState } from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../component/Button';


export default function GuideAdd({ navigation, route }) {
  const bgswitch = route.params;
  const id = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [backgroundSwitch, setBackgroundSwitch] = useState(false);
  const togglebackgroundSwitch = () => setBackgroundSwitch(previousState => !previousState);
  const [background, setBackground] = useState(null);

  const [floorSwitch, setFloorSwitch] = useState(false);
  const togglefloorSwitch = () => setFloorSwitch(previousState => !previousState);
  const [floor, setFloor] = useState(null);

  const [logoSwitch, setLogoSwitch] = useState(false);
  const togglelogSwitch = () => setLogoSwitch(previousState => !previousState);
  const [logo, setLogo] = useState(null);

  const [npSwitch, setNpSwitch] = useState(false);
  const togglenpSwitch = () => setNpSwitch(previousState => !previousState);
  const [numberplate, setNumberplate] = useState(null);

  const pickBackground = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);
    if (!result.canceled) {
      setBackground(result.assets[0].uri);
    }
  };
  return (
    <ScrollView style={styles.containerView}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
        style={styles.containerView}
      >
        <View style={styles.Head} >
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
        <View style={styles.InstructionView}>
         <View style={styles.OptionView}>
            <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
              {" "}
              Background{" "}
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={backgroundSwitch ? '#FF4A22' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglebackgroundSwitch}
              value={backgroundSwitch}
            />
          </View>
          {backgroundSwitch && <View style={styles.imageContainer}>
            {/* <TouchableOpacity  style={styles.addImage} onPress={pickBackground} > */}
            <TouchableOpacity style={styles.addImage} onPress={() => navigation.navigate("BackgroundList",{bgswitch})} >
              <MaterialCommunityIcons name="plus" size={30} color={"#ffffff"} />
            </TouchableOpacity>
            {background && <Image source={{ background }} style={styles.logo1} />}
            {/* <Text  style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}> Id : {id}</Text> */}

            {/* <Image
        style={styles.logo1}
        source={require("../assets/logoblack.jpeg")}
      /> */}
          </View>}
        </View>
        <View style={styles.InstructionView}>

          <View style={styles.OptionView}>
            <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
              {" "}
              Floor{" "}
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={floorSwitch ? '#FF4A22' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglefloorSwitch}
              value={floorSwitch}
            />
          </View>
          {floorSwitch && <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.addImage} onPress={() => navigation.navigate("FloorList")} >
              <MaterialCommunityIcons name="plus" size={30} color={"#ffffff"} />
            </TouchableOpacity>
            {background && <Image source={{ uri: background }} style={styles.logo1} />}
          </View>}
        </View>
        <View style={styles.InstructionView}>

          <View style={styles.OptionView} onPress={() => navigation.navigate("#")}>
            <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
              {" "}
              Logo{" "}
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={logoSwitch ? '#FF4A22' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglelogSwitch}
              value={logoSwitch}
            />
          </View>
          {logoSwitch && <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.addImage} onPress={() => navigation.navigate("LogoList")} >
              <MaterialCommunityIcons name="plus" size={30} color={"#ffffff"} />
            </TouchableOpacity>
            {background && <Image source={{ uri: background }} style={styles.logo1} />}
          </View>}
        </View>
        <View style={styles.InstructionView}>

          <View style={styles.OptionView} onPress={() => navigation.navigate("#")}>
            <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
              {" "}
              Number Plate{" "}
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={npSwitch ? '#FF4A22' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglenpSwitch}
              value={npSwitch}
            />
          </View>
          {npSwitch && <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.addImage} onPress={() => navigation.navigate("NpList")} >
              <MaterialCommunityIcons name="plus" size={30} color={"#ffffff"} />
            </TouchableOpacity>
            {background && <Image source={{ uri: background }} style={styles.logo1} />}
          </View>}
        </View>
        {/* <View
          style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', margin: 10 }}
        >
          <Text style={styles.CardText}> Background : 05</Text>
          <Text style={styles.CardText}> Floor : 02 </Text>
          <Text style={styles.CardText}>Logo : Yes /.. No  </Text>
          <Text style={styles.CardText}>License Plate : Yes /  No</Text>
        </View> */}
        <View style={styles.Bottom}>
        <Button label="Create Instruction" onPress={() => navigation.navigate("#")} />
        
      </View>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Head:{
    alignContent:'center',
    alignItems:'center',
    padding:10,
    paddingTop:50
  },

  containerView: {
    flex: 1,
    backgroundColor: "#020202",
    paddingBottom:80
    
    

  },
  InstructionView: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingBottom: 10,
    margin: 15,


    shadowOpacity: 0.2
  },
  OptionView: {
    justifyContent: 'space-between',
    flexDirection: 'row'

  },
  addImage: {
    backgroundColor: "gray",
    height: 50,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 5

  },
  imageContainer: {
    flexDirection: 'row',
  },
  logo1: {
    height: 60,
    width: 90,
    marginLeft: 10,
    borderRadius: 10
  },
  CardText: {
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  Bottom: {
    flex: 0.2,
    width: "100%",
   padding:20
   
  },
})