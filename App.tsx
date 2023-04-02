import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Artwork01 from './src/components/artworks/Artwork01';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
