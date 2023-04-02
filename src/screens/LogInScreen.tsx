import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import PrimaryButton from '../components/PrimaryButton'
import Artwork03 from '../components/artworks/Artwork03'
import { LOG_IN_SCREEN } from '../utils/constants'
import { MaterialIcons } from '@expo/vector-icons'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'

const LogInScreen = ({
  navigation,
}: RootStackScreenProps<"LogInScreen">) => {
  const theme = useTheme()
  const dimensions = useWindowDimensions()

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
      <SafeAreaView 
        style={{ 
          flex: 1,
          backgroundColor: theme.colors.card,
          minHeight: dimensions.height,
        }}
      >
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            paddingHorizontal: 24,
            height: 52,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.replace("IntroScreen02")}>
            <MaterialIcons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Artwork03 width={240} height={240} />
        </Animated.View>
        <View style={{ padding: 24 }}>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{ fontSize: 32, fontWeight: "800" }}
          >
            {LOG_IN_SCREEN.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={{ opacity: 0.5, marginTop: 16, fontSize: 16 }}
          >
            {LOG_IN_SCREEN.description}
          </Animated.Text>
          <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
            <Animated.View
              entering={FadeInDown.delay(300).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                placeholder='Your email'
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
              />
              <MaterialIcons
                name="email"
                size={24}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
                color={theme.colors.text}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                placeholder='Your password'
                secureTextEntry
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
              />
              <MaterialIcons
                name="lock"
                size={24}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
                color={theme.colors.text}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
            >

              <PrimaryButton
                onPress={() => navigation.navigate("IntroScreen02")} 
                label="Log In" 
              />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default LogInScreen
