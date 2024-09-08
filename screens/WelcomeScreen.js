import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Button from '../component/Button'

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <View style={styles.logoblock}>
        <Image
          style={styles.logo1}
          source={require("../assets/logoblack.jpeg")}
        />
        <Image
          style={styles.logo2}
          source={require("../assets/autopix.jpeg")}
        />

      </View>
      <View style={styles.textblock}>
        <Text style={styles.textBrand}>Great Photo Drive Brand Success  </Text>

      </View>
      <View style={styles.buttonblock}>
        <Button label="Login"
          onPress={() => navigation.navigate("Login")} />


      </View>
      <View style={styles.buttonblock}>

        <Button label="Sign up"
          onPress={() => navigation.navigate("Signup")} />


      </View>
    </View>
    // </LinearGradient>
  )
}

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#020202",
  },
  logo1: {
    height: 80,
    width: 80,
    backgroundColor:'red',

  },
  logo2: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    

  },
  logoblock: {
    flex: .5,
    alignContent: 'center',
    alignItems: 'center',
    margin: 50

  },
  textblock: {
    flex: .3,
    alignContent: 'center',
    alignItems: 'center',



  },
  textBrand: {
    fontWeight: 'heavy',
    fontSize: 40,
    color: "#ffffff",
    fontStyle: 'italic',
    textAlign: 'center'

  },
  buttonblock: {
    padding: 5


  },


})