import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import PrimaryButton from '../components/PrimaryButton'
import ScreenIndicators from '../components/ScreenIndicators'
import Artwork03 from '../components/artworks/Artwork03'
import { LOG_IN_SCREEN } from '../utils/constants'
import { MaterialIcons } from '@expo/vector-icons'

const LogInScreen = ({
  navigation,
}: RootStackScreenProps<"LogInScreen">) => {
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
        <Artwork03 width={300} height={300} />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 32, fontWeight: "800" }}>
          {LOG_IN_SCREEN.title}
        </Text>
        <Text style={{ opacity: 0.5, marginTop: 16, fontSize: 16 }}>
          {LOG_IN_SCREEN.description}
        </Text>
        <View style={{ alignItems: "center", gap: 16 }}>
          <View style={{ position: "relative", width: "100%" }}>
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
          </View>
          <View style={{ position: "relative", width: "100%" }}>
            <TextInput
              placeholder='Your password'
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
          </View>
          <PrimaryButton
            onPress={() => navigation.navigate("IntroScreen02")} 
            label="Log In" 
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LogInScreen
