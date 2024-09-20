import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import ScrollPicker, {
  type ScrollPickerHandle,
} from 'react-native-wheel-scrollview-picker';
import type { TimerPickerProps } from './types';
import { styles } from './styles';

const allHours = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, '0')
);
const allMinutes = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, '0')
);

const TimePicker = (props: TimerPickerProps) => {
  const { backgroundColor, highlightColor, itemTextColor } = props;
  const [selectableHours, setSelectableHours] = useState<string[]>(allHours);
  const [selectableMinutes, setSelectableMinutes] =
    useState<string[]>(allMinutes);
  const [hourIndex, setHourIndex] = useState<number>(
    allHours.findIndex((value) => value === props.selectedValue?.split(':')[0])
  );
  const [minuteIndex, setMinuteIndex] = useState<number>(
    allMinutes.findIndex(
      (value) => value === props.selectedValue?.split(':')[1]
    )
  );
  const hourRef = useRef<ScrollPickerHandle | null>(null);
  const minuteRef = useRef<ScrollPickerHandle | null>(null);

  const checkMinutes = useCallback(() => {
    if (hourIndex + 1 === selectableHours.length && props.maxTime) {
      let minute = props.maxTime?.split(':')[1];
      let allMinuteIndex = allMinutes.indexOf(minute!);
      let minutes = allMinutes.slice(0, allMinuteIndex + 1);

      setSelectableMinutes(minutes);
    } else {
      setSelectableMinutes(allMinutes);
    }
  }, [selectableHours, hourIndex, props.maxTime]);

  const checkHours = useCallback(() => {
    let hour = props.maxTime?.split(':')[0];
    let allHourIndex = allHours.indexOf(hour!);
    let hours = allHours.slice(0, allHourIndex + 1);

    setSelectableHours(hours);
  }, [props.maxTime]);

  useEffect(() => {
    if (props.maxTime == null) return;
    checkHours();
  }, [checkHours, props.maxTime]);

  useEffect(() => {
    if (props.maxTime == null) return;
    checkHours();
  }, [props.maxTime, checkHours]);

  useEffect(() => {
    if (props.maxTime == null) return;
    checkMinutes();
  }, [hourIndex, selectableHours, checkMinutes, props.maxTime]);

  useEffect(() => {
    if (minuteRef.current) {
      if (minuteIndex >= selectableMinutes.length - 1) {
        const validMinuteIndex = Math.min(
          minuteIndex,
          selectableMinutes.length - 1
        );
        setTimeout(() => {
          minuteRef.current?.scrollToTargetIndex(validMinuteIndex);
          setMinuteIndex(validMinuteIndex);
        }, 100);
      }
    }
  }, [selectableMinutes, minuteIndex]);

  useEffect(() => {
    props.onChange &&
      props.onChange(
        selectableHours[hourIndex] + ':' + selectableMinutes[minuteIndex]
      );
  }, [minuteIndex, hourIndex, props, selectableHours, selectableMinutes]);

  const handleChange = (index: number, type: 'hour' | 'minute') => {
    switch (type) {
      case 'hour':
        setHourIndex(index);
        break;
      case 'minute':
        setMinuteIndex(index);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.cardContainer}>
      <ScrollPicker
        ref={hourRef}
        dataSource={selectableHours}
        selectedIndex={hourIndex}
        onValueChange={(_data, selectedIndex) => {
          handleChange(selectedIndex, 'hour');
        }}
        wrapperHeight={210}
        wrapperBackground={backgroundColor}
        itemHeight={60}
        highlightColor={highlightColor}
        highlightBorderWidth={2}
        activeItemTextStyle={{ color: highlightColor }}
        itemTextStyle={{ color: itemTextColor }}
      />
      <ScrollPicker
        ref={minuteRef}
        dataSource={selectableMinutes}
        selectedIndex={minuteIndex}
        onValueChange={(_data, selectedIndex) => {
          handleChange(selectedIndex, 'minute');
        }}
        wrapperHeight={210}
        wrapperBackground={backgroundColor}
        itemHeight={60}
        highlightColor={highlightColor}
        highlightBorderWidth={2}
        activeItemTextStyle={{ color: highlightColor }}
        itemTextStyle={{ color: itemTextColor }}
      />
    </View>
  );
};

export default TimePicker;
