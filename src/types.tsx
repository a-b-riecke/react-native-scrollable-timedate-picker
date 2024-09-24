import type {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type DatePickerProps = {
  onConfirm: (date: string) => void;
  open: boolean;
  type?: 'date' | 'time';
  backgroundColor?: string;
  confirmText?: string;
  cancelText?: string;
  highlightColor?: string;
  itemTextColor?: string;
  textColor?: string;
  maxDate?: string;
  maxTime?: string | null
  value: string | null;
  buttonStyle?: StyleProp<ViewStyle>;
  image?: ImageSourcePropType;
  imageSize?: number;
  buttonTextStyle?: StyleProp<TextStyle>;
  language?: 'da' | 'de' | 'en' | 'fi' | 'sv' | 'no';
};

export type TimerPickerProps = DatePickerProps & {
  onChange?: (hour: string) => void;
  selectedValue: string | null;
};
