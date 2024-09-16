import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  ImageBackground, Linking
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../component/Button";
import TextInput from "../component/TextInput";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

//npx expo install @react-native-picker/picker

export default function CreateOrder({ navigation }) {
  // // ref
  // const bottomSheetModalRef = useRef < BottomSheetModal > (null);

  // // variables
  // const snapPoints = useMemo(() => ['50%'], []);

  // // callbacks
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  // }, []);
  // const handleSheetChanges = useCallback(() => {
  //   console.log('handleSheetChanges', index);
  // }, []);
  const [selectedTime, setselectedTime] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  // const handleClosePress = useCallback(() => {
  //   sheetRef.current?.close();
  // }, []);

  return (
    <ScrollView style={styles.containerView}>

      <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >

        <View style={styles.HeaderView}>

          <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{
            color: 'white',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: 30,
            paddingBottom: 20
          }} >
            <MaterialCommunityIcons name="arrow-left" size={24} color={"#ffffff"} />

            <Text style={{
              color: "#ffffff",
              fontFamily: 'DMSans_500Medium', fontSize: 18
            }}>Create order </Text>
            <Text>       </Text>

          </TouchableOpacity>
          <Text style={styles.AllText}> Create a new order </Text>
          <Text style={{
            padding: 5, color: "#b6b6b6", fontSize: 14,
            fontFamily: 'DMSans_400Regular',
          }}>
            {" "}
            Select instruction and delivery time{" "}
          </Text>
        </View>
        <View style={styles.FormView}>
          <Text style={{
            fontSize: 16,
            fontFamily: 'DMSans_500Medium', padding: 5, color: "#ffffff"
          }}>
            {" "}
            Enter Registration or Car ID{" "}
          </Text>
          <TextInput
            placeholder="Enter here..."
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            inputHieght={54}
            paddingTop={12}
          />
          <Text style={{
            fontSize: 16,
            fontFamily: 'DMSans_500Medium', padding: 5, color: "#ffffff"
          }}>
            {" "}
            Enter Message{" "}
          </Text>

          <TextInput
            placeholder="Enter here...."
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            inputHieght={78}

            linenumber={2}


          />

          <Text style={{
            fontSize: 16,
            fontFamily: 'DMSans_500Medium', padding: 10, color: "#ffffff"
          }}>
            {" "}
            Instructions{" "}
          </Text>
          <TouchableOpacity
            style={styles.InstructionView}
            onPress={() => navigation.navigate("GuideScreen")}
          >
            <ImageBackground source={require("../assets/cardback.png")} style={styles.imageBack} resizeMode='stretch' borderRadius={15}>
              <Text style={styles.InstructionText}> BG : Yes </Text>
              <Text style={styles.InstructionText}> Floor : Not Selected </Text>
              <Text style={styles.InstructionText}> Logo : Yes </Text>
              <Text style={styles.InstructionText}> Licence Plate : No </Text>
            </ImageBackground>
          </TouchableOpacity>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 20,
              fontFamily: 'DMSans_500Medium',
              paddingTop: 20,
            }}
          >
            {" "}
            Delivery Time{" "}
          </Text>
          <Text style={{
            padding: 5, color: "#b6b6b6", fontSize: 14,
            fontFamily: 'DMSans_500Medium',
          }}>
            {" "}
            Mon-Sat 08:00-17:00 GMT{" "}
          </Text>
          <ImageBackground source={require("../assets/pickerback.png")} style={styles.pickerBack} resizeMode='stretch' borderRadius={15}>
            <Picker
              selectedValue={selectedTime}
              onValueChange={(itemValue, itemIndex) =>
                setselectedTime(itemValue)
              }
              dropdownIconColor={'white'}
              selectionColor={'white'}
              mode={'dialog'}
              color={'red'}
              style={{ color: '#ffffff' }}
            >
              <Picker.Item label="24 Hours" value="24" />
              <Picker.Item label="3 Days" value="3" />
              <Picker.Item label="7 Days" value="7" />
            </Picker>
          </ImageBackground>
        </View>

        {/* <Picker>
          <Picker.Item label="Next Day" value="java"/>
          <Picker.Item label="2 Days " value="js" />
          <Picker.Item label="Next week" value="java" />
          <Picker.Item label="5 Days " value="js" />
        </Picker> */}

        <View style={styles.SubmitView}>
          <Button
            label="Next"
            //onPress={handlePresentModalPress}
            onPress={() => setModalVisible(true)}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>

            <View style={styles.modalView}>
              {/* setModalVisible(!modalVisible) */}
              <View style={styles.modalTop}>
                <View style={{

                  width: '25%',
                  height: 1,
                  paddingTop: 5,
                  marginBottom: 20,
                  borderRadius: 10,
                  backgroundColor: '#FF4A22',
                }}>
                </View>
                <Button label="Send Order" onPress={() => { navigation.navigate("UploadingScreen"), setModalVisible(!modalVisible) }} />

                <TouchableOpacity style={{
                  borderWidth: 1,
                  borderColor: 'gray',
                  margin: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: 54,
                }} onPress={() => { Linking.openURL('https://carline.no') }} >

                  <Text style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: 'DMSans_400Regular',


                  }}> Access CarLine.no </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: 'gray',
                margin: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 54,
              }} onPress={() => setModalVisible(!modalVisible)}>

                <Text style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'DMSans_400Regular',


                }}> Back </Text>
              </TouchableOpacity>
            </View>

          </View>


        </Modal>

      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#020202",
  },
  imageBack: {

    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,

    borderRadius: 15

  },
  pickerBack: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,


  },
  HeaderView: {
    flex: 0.2,
    width: "100%",
    padding: 10,
  },
  InstructionView: {

  },
  InstructionText: {
    color: "#B6B6B6",
    fontSize: 14,
    fontFamily: 'DMSans_500Medium',
  },
  FormView: {
    flex: 0.7,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  SubmitView: {
    flex: 0.1,
    width: "100%",
    padding: 15

  },

  AllText: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: 'DMSans_500Medium',
  },
  InputBlock: {
    justifyContent: "flex-start",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',


  },
  modalView: {
    flex: .6,
    width: '100%',
    backgroundColor: '#181C27',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopColor: 'red',
    borderWidth: 1,
    borderTopColor: '#FF4A22',
    borderRightColor: '#FF4A22',
    borderLeftColor: '#FF4A22',
  },
  modalTop: {
    flex: .8,
    width: '100%',
    backgroundColor: '#181C27',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopColor: 'red',


  },
  modalBottom: {},

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
