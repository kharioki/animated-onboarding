import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useMemo } from 'react';

export default function App() {
  const colorScheme = useColorScheme();
  const theme: Theme = useMemo(
    () => 
    colorScheme === 'dark' ? {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: '#fff'
      }
    } : {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#000'
    }
  }, [colorScheme]);

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer theme={theme}>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
