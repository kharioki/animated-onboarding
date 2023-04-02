import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const theme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#000',
    },
  };

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
