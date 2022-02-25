import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  console.log(require('./assets/icon.png')); // 1
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi semua</Text>
      <Image source={require('./assets/favicon.png')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
