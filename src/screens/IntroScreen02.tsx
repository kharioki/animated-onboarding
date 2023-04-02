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
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'

const IntroScreen02 = ({
  navigation,
}: RootStackScreenProps<"IntroScreen02">) => {
  const theme = useTheme()
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        style={{
          paddingHorizontal: 24,
          height: 52,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.replace("IntroScreen01")}>
          <MaterialIcons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
        style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
      >
        <Artwork02 width={300} height={300} />
      </Animated.View>
      <View style={{ padding: 24 }}>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          style={{ fontSize: 32, fontWeight: "800", color: theme.colors.text }}
        >
          {INTRO_SCREEN_02.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(1000).springify()}
          style={{ opacity: 0.5, marginTop: 16, fontSize: 16, color: theme.colors.text }}
        >
          {INTRO_SCREEN_02.description}
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(300).duration(1000).springify()}
        >
          <ScreenIndicators count={2} activeIndex={1} />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: "center" }}
        >
          <PrimaryButton onPress={() => navigation.replace("LogInScreen")} label="Next" />
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}

export default IntroScreen02
