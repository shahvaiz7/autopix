import { StyleSheet, Text, View,ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../component/Button';

export default function ShootScreen({navigation}) {
  return (
   
    <SafeAreaView  style={styles.containerView}>
   
        
        <Button
            label="Shoot"
            onPress={() => navigation.navigate("#")}
          />
             
        <Button
            label="Upload"
            onPress={() => navigation.navigate("#")}
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