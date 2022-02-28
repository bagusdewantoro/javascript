import { registerRootComponent } from 'expo';
import {
  StyleSheet,
  SafeAreaView, // IOS only
  View,
} from 'react-native';

const Home = () => {
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
    backgroundColor: '#fff'
  },
});

registerRootComponent(Home);
