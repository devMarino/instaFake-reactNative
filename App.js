import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar/>
          <View>
              <Header/>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0808',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
