# react-native-scrollable-time-date-picker
 An extension to react-native-scrollable-time-date-picker
A scrollable date or time picker where you can set max date & time. 

It's developer for personal usage, but if you can use it feel free. 

## Installation

```sh
npm install react-native-scrollable-time-date-picker
```

## Usage


```js
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

```

options:
  onConfirm: (date: string) => void;
  open: boolean;
  type?: 'date' | 'time';
  backgroundColor?: string;
  confirmText?: string;
  cancelText?: string;
  highlightColor?: string;
  itemTextColor?: string;
  textColor?: string;
  maxDate?:
    | `${number}${number}-${number}${number}-${number}${number}${number}${number}`
    | null;
  maxTime?: `${number}${number}:${number}${number}` | null;
  value:
    | `${number}${number}:${number}${number}`
    | `${number}${number}-${number}${number}-${number}${number}${number}${number}`;
  buttonStyle?: StyleProp<ViewStyle>;
  image?: ImageSourcePropType;
  imageSize?: number;
  buttonTextStyle?: StyleProp<TextStyle>;
  language?: 'da' | 'de' | 'en' | 'fi' | 'sv' | 'no';


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
