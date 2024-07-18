import React, { useState,useMemo } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
//npm install react-native-progress-steps
import RadioGroup from 'react-native-radio-buttons-group';
//npm i react-native-radio-buttons-group --save
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function GuideSteps() {
    const LogoButton = useMemo(() => ([
        {
          id: '1', // acts as primary key, should be unique and non-empty string
          label: 'Yes',
        },
        {
          id: '2',
          label: 'No',
        
        },
      ]), []);
      const [logoId, setLogoId] = useState();

  
        const [step1Data, setStep1Data] = useState({ name: '', address: '' });
        const [step2Data, setStep2Data] = useState({ email: '', username: '' });
        const [step3Data, setStep3Data] = useState({ password: '', retypePassword: '' });
        const buttonTextStyle = {
            color: 'white',
            fontWeight:'bold'
        };
        const submitTextStyle = {
            color: 'green',
            fontWeight:'bold'
        };

        
  return (
    <View style={styles.container}>
      <ProgressSteps >
        <ProgressStep label="BG" nextBtnTextStyle={buttonTextStyle} >
          <View style={styles.stepContent}>
            <Text style={styles.label}>Select Background Category </Text>
            <TouchableOpacity style={styles.blockContent}>
                <View>
                    <MaterialCommunityIcons name="car" size={80} color={"#ffffff"} />
                </View>
                <View style={{ width: "100%",alignItems:'flex-end' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                    Gray Background </Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.blockContent}>
                <View>
                    <MaterialCommunityIcons name="car-2-plus" size={80} color={"#ffffff"} />
                </View>
                <View style={{ width: "100%",alignItems:'flex-end' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                    Industry Background </Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.blockContent}>
                <View>
                    <MaterialCommunityIcons name="car-3-plus" size={80} color={"#ffffff"} />
                </View>
                <View style={{ width: "100%",alignItems:'flex-end' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                    Coloured Background </Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.blockContent}>
                <View>
                    <MaterialCommunityIcons name="car-multiple" size={80} color={"#ffffff"} />
                </View>
                <View style={{ width: "100%",alignItems:'flex-end' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                    All Background </Text>
                </View>
             </TouchableOpacity>
          </View>
        </ProgressStep>
        <ProgressStep label="Floor" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
          <View style={styles.stepContent}>
          <Text style={styles.label}>Select Floor Type </Text>
          <TouchableOpacity style={styles.blockContent}>
                <View>
                    <MaterialCommunityIcons name="car-windshield" size={80} color={"#ffffff"} />
                </View>
                <View style={{ width: "100%",alignItems:'flex-end' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                   Plain Floor </Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.blockContent}>
                <View>
                    <MaterialCommunityIcons name="card-multiple" size={80} color={"#ffffff"} />
                </View>
                <View style={{ width: "100%",alignItems:'flex-end' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                    Tiled Floor </Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.blockContent}>
                <View>
                    <MaterialCommunityIcons name="chart-pie" size={80} color={"#ffffff"} />
                </View>
                <View style={{ width: "100%",alignItems:'flex-end' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                    All Floor </Text>
                </View>
             </TouchableOpacity>
          </View>
        </ProgressStep>
        <ProgressStep label="Logo" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
          <View style={styles.stepContent}>
          <Text style={styles.label}> Want to add Logo .. </Text>
          <RadioGroup
              radioButtons={LogoButton}
              onPress={setLogoId}
              selectedId={logoId}
              layout='column'
            />
             <Text style={styles.label}>What will be the Position  </Text>

             <TouchableOpacity style={styles.blockContent}>
                <View>
                    <MaterialCommunityIcons name="arrow-bottom-right-thick" size={80} color={"#ffffff"} />
                </View>
                <View style={{ width: "100%",alignItems:'flex-end' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                   Bottom Right </Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.blockContent}>
                <View>
                    <MaterialCommunityIcons name="arrow-bottom-left-thick" size={80} color={"#ffffff"} />
                </View>
                <View style={{ width: "100%",alignItems:'flex-start' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                   Bottom Left </Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.blockContent}>
             <View style={{ width: "100%",alignItems:'flex-start' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                   Top Left </Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="arrow-top-left-thick" size={80} color={"#ffffff"} />
                </View>
                
             </TouchableOpacity>
             <TouchableOpacity style={styles.blockContent}>
             <View style={{ width: "100%",alignItems:'flex-end' }} >
                    <Text  style={{ color:'white',fontSize:20,padding:10,margin:10, }}> 
                   Top Right </Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="arrow-top-right-thick" size={80} color={"#ffffff"} />
                </View>
                
             </TouchableOpacity>
          </View>
        </ProgressStep>
        <ProgressStep label="LP" nextBtnTextStyle={submitTextStyle} previousBtnTextStyle={buttonTextStyle}>
          <View style={styles.stepContent}>
          <Text style={styles.label}> Want to add Licence Plate </Text>
         
          <RadioGroup
              radioButtons={LogoButton}
              onPress={setLogoId}
              selectedId={logoId}
              layout='column'

            />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1D6167",
      },
      label:{
        fontSize:16,
        marginHorizontal:5,
        marginTop:10,
        fontWeight:'bold',
        color:'white'
    
      },
      input: {
        width: '100%',
        height: 50,
        backgroundColor: '#e8f5e9',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        marginTop:10
      },
      stepContent:{
        alignItems:'center',
        padding:30,
      },
      blockContent:{
        flex:.4,
        backgroundColor:'#284E54',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        margin:10
        
      }
})