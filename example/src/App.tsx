import { View } from 'react-native';
import Picker from 'react-native-scrollable-time-date-picker';

export default function App() {
  const onConfirm = (date: string) => {
    console.log('from index', date);
  };

  return (
    <View>
      <Picker
        type={'time'}
        confirmText={'Confirm'}
        cancelText={'Deny'}
        maxTime={'13:13'}
        value={'13:13'}
        open={false}
        onConfirm={(text) => onConfirm(text)}
        image={require('../assets/time_gray.png')}
      />
      <Picker
        type={'date'}
        confirmText={'Confirm'}
        cancelText={'Deny'}
        maxDate={'19-09-2023'}
        value={'18-09-2022'}
        open={false}
        onConfirm={(text) => onConfirm(text)}
        image={require('../assets/date_gray.png')}
        language="da"
      />
    </View>
  );
}
