import React from 'react'
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { useTheme } from '@react-navigation/native';

const PrimaryButton = ({ onPress, label, style, labelStyle }: {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}) => {
  const theme = useTheme()
  return (
    <TouchableOpacity
      style={[{
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 32,
        height: 52,
        borderRadius: 26,
        alignItems: "center",
        justifyContent: "center",
      }, style]}
      onPress={onPress}
    >
      <Text style={[{ fontSize: 16, fontWeight: "600", color: theme.colors.background }, labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton