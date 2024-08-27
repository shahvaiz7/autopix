import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
    ImageBackground
} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
    useFonts, DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';

export default function CarLine({ navigation }) {

    useFonts({
        DMSans_400Regular,
        DMSans_500Medium,
        DMSans_700Bold,
    });
    return (
        <View style={styles.containerView}>
            <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' style={styles.containerView} >


                <View style={styles.bodyContent}>

                    <TouchableOpacity style={styles.blockContent} onPress={() => navigation.navigate("Login")} >

                        {/* <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} > */}

                        <View style={{
                            padding: 10

                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'DMSans_500Medium',
                                paddingLeft: 10
                            }}> Automotive </Text>
                            <Image
                                style={{ width: 300, height: 200, borderRadius: 25 }}
                                source={require("../assets/carline.png")}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={{
                            borderWidth: 1,
                            borderColor: 'white',
                            margin: 10,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 161,
                            height: 42,


                        }}>

                            <Text style={{
                                color: 'white',
                                fontSize: 14,
                                fontFamily: 'DMSans_400Regular',


                            }}> Explore </Text>
                        </View>

                        {/* </ImageBackground> */}

                    </TouchableOpacity>




                    <TouchableOpacity style={styles.blockContent} >
                        <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }}
                            style={{ width: 315, height: 250 }} >
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}
                            >
                                <Text style={{
                                    color: 'white',
                                    fontSize: 36,
                                    fontFamily: 'DMSans_500Medium',

                                }}> Carline </Text>

                            </View>
                        </ImageBackground>
                    </TouchableOpacity>




                </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#020202",



    },


    bodyContent: {
        flex: 1,
        alignItems: "center",
        margin: 10,
        padding: 20
    },
    blockContent: {

        borderWidth: .5,
        borderColor: 'gray',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',

        margin: 20


    },

});
