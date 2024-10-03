import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text, ImageBackground,Alert } from 'react-native';
import Button from '../component/Button';


export default function PreviewImage({ photo, handleRetakePhoto, savePhoto,imageList }) {    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' style={styles.containerView}>
                <View style={{
                    color: 'white',
                    width: '100%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingTop: 20,
                    paddingLeft: 10,
                    paddingBottom: 5
                }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={handleRetakePhoto}>
                        <MaterialCommunityIcons name="arrow-left" size={24} color={"#ffffff"} />
                        <Text style={{
                            color: "#ffffff",
                            fontFamily: 'DMSans_500Medium', fontSize: 18
                        }}> </Text>
                    </TouchableOpacity>
                    <Text style={{
                        color: "#ffffff",
                        fontFamily: 'DMSans_500Medium', fontSize: 18
                    }}> Your Photo  </Text>
                </View>
                <View style={styles.box}>
                    <Image
                        style={styles.previewContainer}
                        source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
                    />
                </View>

                <View style={styles.Bottom}>
                    <Button label="Accept and Take More" onPress={savePhoto} />
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        margin: 10,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '96%',
                        height: 54,
                    }} onPress={handleRetakePhoto}>

                        <Text style={{
                            color: 'white',
                            fontSize: 14,
                            fontFamily: 'DMSans_400Regular',


                        }}> Retake </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        margin: 10,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '96%',
                        height: 54,
                    }} onPress={imageList}>

                        <Text style={{
                            color: 'white',
                            fontSize: 14,
                            fontFamily: 'DMSans_400Regular',


                        }}> Preview and Select  </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    containerView: {
        flex: 1,
        backgroundColor: "#020202",


    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    box: {
        flex: .9,
        margin: 15,
        backgroundColor: 'darkgray',
        justifyContent: 'center',
        alignItems: "center",
    },
    previewContainer: {
        width: '100%',
        height: '100%',
    },
    Bottom: {
        padding: 10,



    },
});


