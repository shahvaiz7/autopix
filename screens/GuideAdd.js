import { StyleSheet, Text, View,TouchableOpacity,Switch ,Image} from 'react-native'
import React, {useState} from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from 'expo-linear-gradient';


export default function GuideAdd({navigation,route}) {
    const id = route.params;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const [backgroundswitch, setBackgroundSwitch] = useState(false);
    const backgroundSwitch = () => setBackgroundSwitch(previousState => !previousState);

    const [background, setBackground] = useState(null);
    const [floor, setFloor] = useState(null);
    const [logo, setLogo] = useState(null);
    const [numberplate, setNumberplate] = useState(null);
    
    const pickBackground = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          // allowsEditing: true,
          allowsMultipleSelection:true,
          // cameraType: CameraType.back,
          aspect: [4, 3],
          quality: 1,
          orderedSelection:true,
          
          // mediaTypes:ImagePicker.MediaTypeOptions.Images,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setBackground(result.assets[0].uri);
        }
      };
  return (
    <View style={styles.containerView}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#A52306', '#020202']}
        locations={[0.1, 0.3]}
        style={styles.containerView}
      >
     <View style={styles.InstructionView}>
    
        <View style={styles.OptionView} onPress={() => navigation.navigate("#")}>
        <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
          {" "}
          Background{" "}
        </Text>
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={backgroundswitch ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={backgroundSwitch}
        value={backgroundswitch}
      />
        </View>
     {backgroundswitch && <View  style={styles.imageContainer}>
        {/* <TouchableOpacity  style={styles.addImage} onPress={pickBackground} > */}
        <TouchableOpacity  style={styles.addImage} onPress={() => navigation.navigate("BackgroundType")} >
        <MaterialCommunityIcons name="plus" size={30} color={"#ffffff"} />
        </TouchableOpacity>
        {background && <Image source={{ uri: background }} style={styles.logo1} />}
       
        {/* <Image
        style={styles.logo1}
        source={require("../assets/logoblack.jpeg")}
      /> */}
        </View>}
    </View>
    <View style={styles.InstructionView}>
    
    <View style={styles.OptionView} onPress={() => navigation.navigate("#")}>
    <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
      {" "}
      Floor{" "}
    </Text>
    <Switch
    trackColor={{false: '#767577', true: '#81b0ff'}}
    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
  />
    </View>
    <View  style={styles.imageContainer}>
    <TouchableOpacity  style={styles.addImage} onPress={() => navigation.navigate("#")} >
    <MaterialCommunityIcons name="plus" size={30} color={"#ffffff"} />
    </TouchableOpacity>
    {background && <Image source={{ uri: background }} style={styles.logo1} />}
    </View>
    </View>
    <View style={styles.InstructionView}>
    
    <View style={styles.OptionView} onPress={() => navigation.navigate("#")}>
    <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
      {" "}
      Logo{" "}
    </Text>
    <Switch
    trackColor={{false: '#767577', true: '#81b0ff'}}
    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
  />
    </View>
    <View  style={styles.imageContainer}>
    <TouchableOpacity  style={styles.addImage} onPress={() => navigation.navigate("#")} >
    <MaterialCommunityIcons name="plus" size={30} color={"#ffffff"} />
    </TouchableOpacity>
    {background && <Image source={{ uri: background }} style={styles.logo1} />}
    </View>
    </View>
    <View style={styles.InstructionView}>
    
    <View style={styles.OptionView} onPress={() => navigation.navigate("#")}>
    <Text style={{ fontWeight: "bold", padding: 10, color: "#ffffff" }}>
      {" "}
      Number Plate{" "}
    </Text>
    <Switch
    trackColor={{false: '#767577', true: '#81b0ff'}}
    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
  />
    </View>
    <View  style={styles.imageContainer}>
    <TouchableOpacity  style={styles.addImage} onPress={() => navigation.navigate("#")} >
    <MaterialCommunityIcons name="plus" size={30} color={"#ffffff"} />
    </TouchableOpacity>
    {background && <Image source={{ uri: background }} style={styles.logo1} />}
    </View>
    </View>
    <View
            style={{ flex: 0.5, justifyContent: 'center',alignItems:'center', margin: 10 }}
          >
            <Text style={styles.CardText}> Background : 05</Text>
            <Text style={styles.CardText}> Floor : 02 </Text>
            <Text style={styles.CardText}>Logo : Yes /.. No  </Text>
            <Text style={styles.CardText}>License Plate : Yes /  No</Text>
          </View>
          </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: "#1D6167",
      },
      InstructionView:{
        borderWidth:1,
        borderColor:'gray',
        borderRadius:15,
        paddingBottom:10,
        margin:15,
      
        shadowOpacity:0.2
      },
      OptionView:{
        justifyContent:'space-between',
        flexDirection:'row'
       
      },
      addImage:{
        backgroundColor: "gray",
        height:50,
        width:45,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        borderRadius:5

      },
      imageContainer:{
        flexDirection:'row',
      },
      logo1:{
        height:60,
        width:90,
        marginLeft:10,
        borderRadius:10
       },
       CardText: {
        color: "#ffffff",
        fontStyle: "italic",
        fontWeight: "bold",
      },
})