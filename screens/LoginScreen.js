import { StyleSheet, Text, View,ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../component/Button';

export default function LoginScreen({navigation}) {
  return (
   
    <SafeAreaView style={styles.containerView}>
    <Text> Login Page </Text>

   
        <Button
            label="Login"
            onPress={() => navigation.navigate("Home")}
          />
  <Text>    </Text>
<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text> Don't have an account! <Text style={{
            fontWeight: "bold",
            padding: 10,
            color:'green'
           
          }}>SignUp here...</Text>   </Text>
        </TouchableOpacity>
         

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