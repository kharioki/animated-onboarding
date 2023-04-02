import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { INTRO_SCREEN_01 } from '../utils/constants'
import Artwork01 from '../components/artworks/Artwork01'
import { useTheme } from '@react-navigation/native'
import ScreenIndicators from '../components/ScreenIndicators'
import PrimaryButton from '../components/PrimaryButton'

const IntroScreen01 = ({
  navigation,
}: RootStackScreenProps<"IntroScreen01">) => {
  const theme = useTheme()
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
      <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <Artwork01 width={300} height={300} />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 32, fontWeight: "800" }}>
          {INTRO_SCREEN_01.title}
        </Text>
        <Text style={{ opacity: 0.5, marginTop: 16, fontSize: 16 }}>
          {INTRO_SCREEN_01.description}
        </Text>
        <ScreenIndicators count={2} activeIndex={0} />
        <View style={{ alignItems: "center" }}>
          <PrimaryButton onPress={() => navigation.navigate("IntroScreen02")} label="Next" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default IntroScreen01
