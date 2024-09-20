import { View } from 'react-native';
import Picker  from 'react-native-scrollable-time-date-picker';

export default function App() {

  const onConfirm = (date: string) => {
    console.log('from index', date);
  }  

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flexDirection: 'row', gap: 20, paddingHorizontal: 50}}>
      <Picker 
        type={'time'}
        confirmText={'Bekræft'}
        cancelText={'Annuler'}
        maxTime={'13:13'}
        value={'13:13'}
        open={false}
        onConfirm={(text) => onConfirm(text)}
        buttonStyle={{paddingLeft: 25, padding: 10, borderRadius: 10, borderWidth: 1, borderColor: 'black'}}
        image={require('../assets/time_gray.png')}
      />
      <Picker 
        type={'date'}
        confirmText={'Bekræft'}
        cancelText={'Annuler'}
        maxDate={'19-09-2023'}
        value={'18-09-2022'}
        open={false}
        onConfirm={(text) => onConfirm(text)}
        buttonStyle={{paddingLeft: 25, padding: 10, borderRadius: 10, borderWidth: 1, borderColor: 'black'}}
        image={require('../assets/date_gray.png')}
        language='da'
      />
    </View>
  );
}