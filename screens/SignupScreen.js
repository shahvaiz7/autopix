import { StyleSheet, Text, View,ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../component/Button';

export default function SignupScreen({navigation}) {
  return (
   
    <SafeAreaView style={styles.containerView}>
   
        <Button
            label="Sign up"
            onPress={() => navigation.navigate("Login")}
          />
 
         

    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
    containerView:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      }
})