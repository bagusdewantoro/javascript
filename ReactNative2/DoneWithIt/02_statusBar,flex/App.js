import {
  Dimensions,
  StyleSheet,
  SafeAreaView, // IOS only
  Platform,
  StatusBar,
  View,
} from 'react-native';

export default function App() {
  // console.log(Dimensions.get('screen')); // get screen dimension
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70,
      }}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
