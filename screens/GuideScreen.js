import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
//npx expo install react-native-safe-area-context


export default function GuideScreen() {
  return (
    <ScrollView>
      <SafeAreaView>
      <Text>guide</Text>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})