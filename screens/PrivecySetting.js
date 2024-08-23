import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    ImageBackground,
    Switch
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';
import {
    useFonts, DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

export default function PrivecySetting({ navigation }) {
    const [backgroundSwitch, setBackgroundSwitch] = useState(false);
    const togglebackgroundSwitch = () => setBackgroundSwitch(previousState => !previousState);
    const [floorSwitch, setFloorSwitch] = useState(false);
    const togglefloorSwitch = () => setFloorSwitch(previousState => !previousState);
    useFonts({
        DMSans_400Regular,
        DMSans_500Medium,
        DMSans_700Bold,
    });
    return (
        <View style={styles.containerView}>
            <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' style={styles.containerView}>
                <View style={styles.HeaderView}>
                    <Text style={styles.AllText}> Privecy Settings </Text>
                    <Text
                        style={{ color: "#C0CACB", fontSize: 14, fontFamily: 'DMSans_400Regular', padding: 5 }}
                    >
                        {" "}
                        We Collect Information that helps us {"\n"}enhance your experience{" "}
                    </Text>
                </View>


                <ImageBackground source={require("../assets/cardback.png")} resizeMode='stretch' style={styles.FullBlock} borderRadius={25}>
                    <View  >
                        <View style={styles.SwitchBlock}>
                            <Text style={styles.CardText}>Notification  </Text>
                            <Switch
                                trackColor={{ false: 'gray', true: '#FF4A22' }}
                                thumbColor={backgroundSwitch ? '#ffffff' : '#ffffff'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={togglebackgroundSwitch}
                                value={backgroundSwitch}
                            />
                        </View>
                        <View style={styles.InnerBlock}>
                            <Text style={styles.InnerText}>We Collect Information that helps {"\n"} us enhance your experience</Text>
                        </View>
                    </View>
                    <View  >
                        <View style={styles.SwitchBlock}>
                            <Text style={styles.CardText}>Third-Party Services  </Text>
                            <Switch
                                trackColor={{ false: 'gray', true: '#FF4A22' }}
                                thumbColor={floorSwitch ? '#ffffff' : '#ffffff'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={togglefloorSwitch}
                                value={floorSwitch}
                            />
                        </View>
                        <View style={styles.InnerBlock}>
                            <Text style={styles.InnerText}>We Collect Information that helps {"\n"} us enhance your experience</Text>
                        </View>
                    </View>


                </ImageBackground>


            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'flex-start',


    },

    HeaderView: {
        flex: 0.1,
        width: "100%",
        padding: 10,
        paddingBottom: 30


    },
    FullBlock: {
        flex: .40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 15,
        // backgroundColor:'black'

    },

    SwitchBlock: {

        padding: 5,
        color: 'white',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',


    },
    InnerBlock: {
        paddingLeft: 5,
        paddingBottom:20
        

    },


    CardText: {
        color: "#ffffff",
        fontFamily: 'DMSans_700Bold',
        fontSize: 14,
    },
    InnerText: {
        color: "#C0CACB",
        fontFamily: 'DMSans_400Regular',
        fontSize: 14,
        
    },

    AllText: {
        color: "#ffffff",
        fontSize: 24,
        fontFamily: 'DMSans_500Medium'
    },
});
