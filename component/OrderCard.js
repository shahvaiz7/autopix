import { StyleSheet, Text, View, ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function OrderCard({ image, orderId, imageCount, dayCount, orderStatus, onPress }) {
    return (
        <View style={styles.OrderCard}>
            <View style={{ flex: 0.4 }}>
                <Image
                    style={{ width: 119, height: 124, borderRadius: 22 }}
                    source={image}
                />
            </View>
            <View style={{ flex: 0.4, flexDirection: 'row' }}>
                <View>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 16,
                        fontFamily: 'DMSans_500Medium',
                        paddingLeft: 4
                    }}> # {orderId}</Text>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 14,
                        fontFamily: 'DMSans_400Regular',
                        paddingLeft: 4
                    }}> {imageCount} Images </Text>
                    <View style={{ paddingTop: 45, paddingLeft: 10 }}>
                        <Text style={{
                            color: "#ffffff",
                            fontSize: 12,
                            fontFamily: 'DMSans_400Regular',
                        }}>{dayCount} Days ago </Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 0.3, justifyContent: 'flex-end', paddingBottom: 20 }}>
                <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingBottom: 40 }}>
                    <Text style={{ color: "yellow", fontSize: 14, fontFamily: 'DMSans_500Medium', }}>
                        {orderStatus}
                    </Text>
                </View>

                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 15,
                    width: 80,
                    height: 30,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={onPress}>
                    <Text style={{
                        color: "#ffffff",
                        fontSize: 14,
                        fontFamily: 'DMSans_400Regular',
                    }}>
                        Option{" "}
                        <MaterialCommunityIcons
                            name="ship-wheel"
                            size={14}
                            color={"#ffffff"}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    OrderCard: {
        flex: 1,
        margin: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'gray',
        padding: 2,
        borderRadius: 25,
    },

    OrderCardImage: {
        flex: .40
    },
    OrderCardDetails: {
        flex: .60,
        paddingRight: 10,

        paddingTop: 8

    },
    OrderCardDetailsTwo: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around'
    },
    OrderCardDetailsThree: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '60%',

        alignItems: 'center'
    },
    OrderCardDetailsFour: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 20
    },
    IDText: {
        color: "#ffffff",
        fontSize: 16,
        fontFamily: 'DMSans_500Medium',
        paddingLeft: 4
    },
    ImageCount: {
        color: "#ffffff",
        fontSize: 14,
        fontFamily: 'DMSans_400Regular',
        paddingLeft: 4

    },
    DayCount: {
        color: "#ffffff",
        fontSize: 12,
        fontFamily: 'DMSans_400Regular',

    },

    CardHead: {
        color: "#ffffff",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 18
    },
    CardText: {
        color: "#ffffff",
        fontSize: 14,
        fontFamily: 'DMSans_400Regular',
    },
    CardText2: {
        color: "#ffffff",
        fontSize: 12,
        fontFamily: 'DMSans_400Regular',
    },
})