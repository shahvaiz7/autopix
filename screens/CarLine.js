import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
    ImageBackground, Linking
} from "react-native";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
export default function CarLine({ navigation }) {
   
    const [loaded, error] = useFonts({
        "DMSans_400Regular": require("../assets/fonts/DMSans-Regular.ttf"),
        " DMSans_500Medium":  require("../assets/fonts/DMSans-Medium.ttf"),
         "DMSans_700Bold" : require("../assets/fonts/DMSans-Bold.ttf"),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }
    
    return (
        <View style={styles.containerView}>
            <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' style={styles.containerView} >
                <View style={styles.bodyContent}>
                    <TouchableOpacity style={styles.blockContent} onPress={() => navigation.navigate("Login")} >
                        {/* <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }} style={styles.imageBack} > */}
                        <View style={{ padding: 5 }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'DMSans_500Medium',
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
                            borderRadius: 8,
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
                    <TouchableOpacity style={styles.blockContent2} onPress={() => { Linking.openURL('https://carline.no/') }} >
                        <ImageBackground source={require("../assets/cardback.png")} imageStyle={{ borderRadius: 25 }}
                            style={{ width: 343, height: 318 }} >
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
        marginTop: 45,

    },
    blockContent: {

        borderWidth: .5,
        borderColor: 'gray',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',

        width: 343,



    },
    blockContent2: {

        borderWidth: .5,
        borderColor: 'gray',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        margin: 15,
        height: 320


    },


});
