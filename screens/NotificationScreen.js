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

export default function NotificationScreen({ navigation }) {
    return (
        <View style={styles.containerView}>
            <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' style={styles.containerView}>
                <View style={styles.HeadBlock} >
                    <View style={styles.TitleBar}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")} >
                            <MaterialCommunityIcons name="arrow-left" size={24} color={"#ffffff"} />
                        </TouchableOpacity>
                        <Text style={styles.CardText}>Notification </Text>
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={require("../assets/notification.png")}
                            resizeMode='contain'
                        />

                    </View>

                </View>
                <ImageBackground source={require("../assets/notification1.png")} resizeMode='stretch' style={styles.FullBlock} borderRadius={15}>
                    <View  >
                        <View style={styles.SwitchBlock}>
                            <Text style={styles.CardText}>Notification  </Text>

                            <Text style={styles.DateText}> 10:30 AM </Text>

                        </View>
                        <View style={styles.InnerBlock}>
                            <Text style={styles.InnerText}>We Collect Information that helps us enhance your experience</Text>
                        </View>
                    </View>

                </ImageBackground>
                <ImageBackground source={require("../assets/notification2.png")} resizeMode='stretch' style={styles.FullBlock} borderRadius={15}>
                    <View  >
                        <View style={styles.SwitchBlock}>
                            <Text style={styles.CardText}>Notification  </Text>

                            <Text style={styles.DateText}> 10:30 AM </Text>

                        </View>
                        <View style={styles.InnerBlock}>
                            <Text style={styles.InnerText}>We Collect Information that helps us enhance your experience</Text>
                        </View>
                    </View>

                </ImageBackground>
                <ImageBackground source={require("../assets/cardback.png")} resizeMode='stretch' style={styles.FullBlock} borderRadius={15}>
                    <View  >
                        <View style={styles.SwitchBlock}>
                            <Text style={styles.CardText}>Notification  </Text>

                            <Text style={styles.DateText}> 10:30 AM </Text>

                        </View>
                        <View style={styles.InnerBlock}>
                            <Text style={styles.InnerText}>We Collect Information that helps us enhance your experience</Text>
                        </View>
                    </View>

                </ImageBackground>
                <ImageBackground source={require("../assets/cardback.png")} resizeMode='stretch' style={styles.FullBlock} borderRadius={15}>
                    <View  >
                        <View style={styles.SwitchBlock}>
                            <Text style={styles.CardText}>Notification  </Text>

                            <Text style={styles.DateText}> 10:30 AM </Text>

                        </View>
                        <View style={styles.InnerBlock}>
                            <Text style={styles.InnerText}>We Collect Information that helps us enhance your experience</Text>
                        </View>
                    </View>

                </ImageBackground>
                <ImageBackground source={require("../assets/cardback.png")} resizeMode='stretch' style={styles.FullBlock} borderRadius={15}>
                    <View  >
                        <View style={styles.SwitchBlock}>
                            <Text style={styles.CardText}>Notification  </Text>

                            <Text style={styles.DateText}> 10:30 AM </Text>

                        </View>
                        <View style={styles.InnerBlock}>
                            <Text style={styles.InnerText}>We Collect Information that helps us enhance your experience</Text>
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
    HeadBlock: {
        padding: 20,
        marginTop: 20,


    },
    FullBlock: {
        flex: .15,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 15,

        borderColor: 'gray',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        margin: 10
        // backgroundColor:'black'

    },
    TitleBar: {
        color: 'white',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 10

    },

    SwitchBlock: {
        color: 'white',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 10



    },
    InnerBlock: {
        paddingBottom: 10
    },


    CardText: {
        color: "#ffffff",
        fontFamily: 'DMSans_700Bold',
        fontSize: 16,
    },
    InnerText: {
        color: "#C0CACB",
        fontFamily: 'DMSans_400Regular',
        fontSize: 14,

    },

    DateText: {
        color: "#ffffff",
        fontSize: 14,
        fontFamily: 'DMSans_400Regular'
    },
});
