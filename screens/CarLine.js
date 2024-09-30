import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    StatusBar,
    ImageBackground, Linking
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";

import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContext from "../auth/UserContext";
import axios from "axios";
import BaseUrl from "../auth/BaseUrl";
SplashScreen.preventAutoHideAsync();

export default function CarLine({ navigation }) {
    const { userData, setUserData } = useContext(UserContext)
    const [loader, setloader] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('AccessToken');
                if (value !== null) {
                    const convertValue = JSON.parse(value)
                    try {
                        const response = await axios.get(`${BaseUrl}/auths/${convertValue.user_id}`, {
                            headers: {
                                'Authorization': `token ${convertValue?.token}`,  // Pass the token here
                                'Content-Type': 'application/json',
                            }
                        });
                        const userData = response.data
                        const mergedObj = Object.assign({}, convertValue, userData);
                        setUserData(mergedObj);
                    } catch (err) {
                        alert(err.message);  // Catch and display error if any
                    }
                }
                setloader(false)
            } catch (error) {
                console.error('Error retrieving data from AsyncStorage:', error);
            }
        };
        getData();
    }, []);


    return (
        <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' style={styles.containerView} >
            <StatusBar hidden={true} backgroundColor={'blue'} />
            <View style={styles.bodyContent}>
                <TouchableOpacity style={styles.blockContent} disabled={loader} onPress={() => navigation.navigate(userData ? "Home" : "Login")} >
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

    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: "space-between",




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
