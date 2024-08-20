import { StyleSheet, Text, View ,ImageBackground} from 'react-native'
import React from 'react'

export default function ImageBack() {
  return (
    <ImageBackground source={require("../assets/background.png")} resizeMode='stretch' >

    </ImageBackground>
  )
}

const styles = StyleSheet.create({})