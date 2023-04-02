import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackScreenProps } from '../navigators/RootNavigator'

const IntroScreen02 = ({
  navigation,
}: RootStackScreenProps<"IntroScreen02">) => {
  return (
    <SafeAreaView>
      <Text>IntroScreen02</Text>
      <TouchableOpacity onPress={() => navigation.navigate("LogInScreen")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default IntroScreen02

const styles = StyleSheet.create({})