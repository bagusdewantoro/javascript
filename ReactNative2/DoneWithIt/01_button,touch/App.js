// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView, // IOS only
  Platform,
  StatusBar,
} from 'react-native';
import Touchable from './Touchable';
import Buttons from './Buttons';

export default function App() {
  // console.log(require('./assets/favicon.png')); // 1
  return (
    // <SafeAreaView style={containerStyle}>
    <SafeAreaView style={[
      styles.container,
      containerStyle // this will overide previous object properties
    ]}>
      <Text>Hi semua</Text>
      {/* <Touchable /> */}
      <Buttons />
    </SafeAreaView>
  );
}

// first
const containerStyle = {
  flex: 1,
  backgroundColor: '#fff',
}

// second -> use this for validation if mispell
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    // paddingTop: Platform.OS === 'android' ? 40 : 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});
