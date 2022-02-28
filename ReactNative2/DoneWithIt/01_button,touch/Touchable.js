import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
} from 'react-native';

const Touchable = () => {
  return (
    <>
    <TouchableWithoutFeedback onPress={() => console.log('image tapped')}>
      <Image source={require('./assets/favicon.png')} />
    </TouchableWithoutFeedback>
    <TouchableOpacity>
      <Image
        blurRadius={3}
        fadeDuration={1500} // android only
        source={{
          width: 100,
          height: 150,
          uri: 'https://picsum.photos/200/300'
        }}
      />
    </TouchableOpacity>
    <TouchableHighlight onPress={() => {}}>
      <Image
        source={{
          width: 100,
          height: 100,
          uri: 'https://picsum.photos/200'
        }}
      />
    </TouchableHighlight>
    <TouchableNativeFeedback onPress={() => {}}>
      <View style={{ width: 200, height: 70, backgroundColor: 'dodgerblue'}}>
      </View>
    </TouchableNativeFeedback>
    </>
  )
}

export default Touchable;
