import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackScreenProps } from '../navigators/RootNavigator'

const LogInScreen = ({
  navigation,
}: RootStackScreenProps<"LogInScreen">) => {
  return (
    <SafeAreaView>
      <Text>LogInScreen</Text>
    </SafeAreaView>
  )
}

export default LogInScreen

const styles = StyleSheet.create({})