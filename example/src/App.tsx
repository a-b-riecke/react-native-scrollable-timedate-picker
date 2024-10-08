import { View } from 'react-native';
import Picker from 'react-native-scrollable-time-date-picker';

export default function App() {
  const onConfirm = (date: string) => {
    console.log('from index', date);
  };

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        gap: 20,
      }}
    >
      <Picker
        type={'time'}
        confirmText={'Confirm'}
        cancelText={'Deny'}
        minTime={'12:12'}
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
        minDate={'30-09-2024'}
        maxDate={'01-10-2024'}
        value={'19-09-2024'}
        open={false}
        onConfirm={(text) => onConfirm(text)}
        image={require('../assets/date_gray.png')}
        language="da"
      />
    </View>
  );
}
