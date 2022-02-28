import {
  Button,
  Alert,
} from 'react-native';

const Buttons = () => {
  return (
    <>
      <Button
        title='Tombol 1'
        onPress={() => {
          console.log('button');
          Alert.alert(
            'Judul',
            'Pesannya',
            [
              {text: 'Yes', onPress: () => console.log('yes')},
              {text: 'No', onPress: () => console.log('no')},
            ]
          )
        }}
        color='orange'
      />
    </>
  )
}

export default Buttons;
