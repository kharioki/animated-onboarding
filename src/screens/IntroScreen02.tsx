import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import Artwork02 from '../components/artworks/Artwork02'
import { INTRO_SCREEN_02 } from '../utils/constants'
import ScreenIndicators from '../components/ScreenIndicators'
import PrimaryButton from '../components/PrimaryButton'
import { MaterialIcons } from '@expo/vector-icons'

const IntroScreen02 = ({
  navigation,
}: RootStackScreenProps<"IntroScreen02">) => {
  const theme = useTheme()
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
      <View
        style={{
          paddingHorizontal: 24,
          height: 52,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <Artwork02 width={300} height={300} />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 32, fontWeight: "800" }}>
          {INTRO_SCREEN_02.title}
        </Text>
        <Text style={{ opacity: 0.5, marginTop: 16, fontSize: 16 }}>
          {INTRO_SCREEN_02.description}
        </Text>
        <ScreenIndicators count={2} activeIndex={1} />
        <View style={{ alignItems: "center" }}>
          <PrimaryButton onPress={() => navigation.navigate("LogInScreen")} label="Next" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default IntroScreen02
