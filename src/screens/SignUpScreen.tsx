import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import PrimaryButton from '../components/PrimaryButton'
import Artwork04 from '../components/artworks/Artwork04'
import { SIGN_UP_SCREEN } from '../utils/constants'
import { MaterialIcons } from '@expo/vector-icons'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'

const SignUpScreen = ({
  navigation,
}: RootStackScreenProps<"SignUpScreen">) => {
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
          <TouchableOpacity onPress={() => navigation.replace("LogInScreen")}>
            <MaterialIcons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Artwork04 width={200} height={200} />
        </Animated.View>
        <View style={{ padding: 24 }}>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{ fontSize: 32, fontWeight: "800", color: theme.colors.text }}
          >
            {SIGN_UP_SCREEN.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={{ opacity: 0.5, marginTop: 16, fontSize: 16, color: theme.colors.text }}
          >
            {SIGN_UP_SCREEN.description}
          </Animated.Text>
          <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
            <Animated.View
              entering={FadeInDown.delay(300).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                placeholder='Your Name'
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
              entering={FadeInDown.delay(500).duration(1000).springify()}
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
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                placeholder='Confirm password'
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
            <Animated.View entering={FadeInDown.delay(700).duration(1000).springify()}>
              <PrimaryButton
                onPress={() => {}} 
                label="Sign Up" 
              />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreen
