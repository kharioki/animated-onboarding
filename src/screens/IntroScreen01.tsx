import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackScreenProps } from '../navigators/RootNavigator'

const IntroScreen01 = ({
  navigation,
}: RootStackScreenProps<"IntroScreen01">) => {
  return (
    <SafeAreaView>
      <Text>IntroScreen01</Text>
      <TouchableOpacity onPress={() => navigation.navigate("IntroScreen02")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default IntroScreen01

const styles = StyleSheet.create({})