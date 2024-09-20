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

| Option        | Value        | Required  | Default |
| ------------- |:-------------:| -----:| -----: |
| onConfirm     |  (date: string) => void;| yes | |
|type           | 'date' or 'time' | no | 'date' |
|backgroundColor | string | no | 'white' |
|highlightColor | string | no | 'red' |
|itemTextColor | string | no | 'grey' |
|textColor | string | no | 'black' |
|confirmText    | string | no | 'Confirm' |
|cancelText    | string | no | 'Cancel' |
|maxDate    | string 'DD-MM-YYYY' | no |  |
|maxTime    | string 'HH:mm' | no |  |
|open    | boolean | no | false |
|value    | string 'DD-MM-YYYY' or  'HH:mm'| yes |  |
|buttonStyle    | StyleProp<ViewStyle> | no |  |
|buttonTextStyle    | StyleProp<ViewStyle> | no |  |
|image    | ImageSourcePropType | no |  |
|imageSize    | number | no | 25 |
language: |'da'/'de'/ 'en'/ 'fi'/'sv'/'no' | no | 'en' |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
