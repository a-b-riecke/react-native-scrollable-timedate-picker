import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import ScrollPicker, {
  type ScrollPickerHandle,
} from 'react-native-wheel-scrollview-picker';
import type { TimerPickerProps } from './types';
import { months } from './Months';
import { styles } from './styles';

const allYears = Array.from({ length: 100 }, (_, i) =>
  (new Date().getFullYear() - 50 + i).toString()
);
const allDays = Array.from({ length: 31 }, (_, i) =>
  (i + 1).toString().padStart(2, '0')
);

const DatePicker = (props: TimerPickerProps) => {
  const { backgroundColor, highlightColor, itemTextColor } = props;
  const allMonths = months[props.language ?? 'en'];
  const yearRef = useRef<ScrollPickerHandle | null>(null);
  const monthsRef = useRef<ScrollPickerHandle | null>(null);
  const daysRef = useRef<ScrollPickerHandle | null>(null);
  const [selectableMonths, setSelectableMonths] = useState<string[]>(allMonths);
  const [selectableYears, setSelectableYears] = useState<string[]>(allYears);
  const [selectableDays, setSelectableDays] = useState<string[]>(allDays);
  const [yearIndex, setYearIndex] = useState<number>(
    allYears.findIndex((value) => value === props.selectedValue?.split('-')[2])
  );
  const [monthIndex, setMonthIndex] = useState<number>(
    Number(props.selectedValue?.split('-')[1]) - 1
  );
  const [dayIndex, setDayIndex] = useState<number>(
    Number(props.selectedValue?.split('-')[0]) - 1
  );

  const checkYears = useCallback(() => {
    let year = props.maxDate?.split('-')[2];
    let allYearIndex = allYears.indexOf(year!);
    let years = allYears.slice(0, allYearIndex + 1);

    setSelectableYears(years);
  }, [props.maxDate]);

  const checkMonths = useCallback(() => {
    if (yearIndex + 1 === selectableYears.length) {
      let month = props.maxDate?.split('-')[1];
      let allMonthIndex = Number(month) - 1;
      let availMonths = allMonths.slice(0, allMonthIndex + 1);

      setSelectableMonths(availMonths);
    } else {
      setSelectableMonths(allMonths);
    }
  }, [allMonths, props.maxDate, selectableYears.length, yearIndex]);

  const checkDays = useCallback(() => {
    const daysInMonth = getDaysInMonth(
      monthIndex + 1,
      Number(allYears[yearIndex])
    );
    let allDayIndex = daysInMonth - 1;
    if (
      monthIndex + 1 === selectableMonths.length &&
      yearIndex + 1 === selectableYears.length &&
      props.maxDate
    ) {
      let day = props.maxDate?.split('-')[0];
      allDayIndex = Number(day) - 1;
    }
    let days = allDays.slice(0, allDayIndex + 1);
    setSelectableDays(days);
  }, [
    monthIndex,
    props.maxDate,
    selectableMonths.length,
    selectableYears.length,
    yearIndex,
  ]);

  useEffect(() => {
    if (props.maxDate == null) return;
    checkYears();
    checkDays();
  }, [checkDays, checkYears, props.maxDate]);

  useEffect(() => {
    if (props.maxDate == null) return;
    checkYears();
  }, [checkYears, props.maxDate]);

  useEffect(() => {
    if (props.maxDate == null) return;
    checkMonths();
  }, [checkMonths, props.maxDate, yearIndex]);

  useEffect(() => {
    checkDays();
  }, [checkDays, monthIndex, yearIndex]);

  useEffect(() => {
    if (monthsRef.current) {
      if (monthIndex >= selectableMonths.length - 1) {
        const validMonthIndex = Math.min(
          monthIndex,
          selectableMonths.length - 1
        );
        setTimeout(() => {
          monthsRef.current?.scrollToTargetIndex(validMonthIndex);
          setMonthIndex(validMonthIndex);
        }, 100);
      }
    }
  }, [monthIndex, selectableMonths]);

  useEffect(() => {
    props.onChange &&
      props.onChange(
        String(dayIndex + 1).padStart(2, '0') +
          '-' +
          String(monthIndex + 1).padStart(2, '0') +
          '-' +
          selectableYears[yearIndex]
      );
  }, [yearIndex, monthIndex, dayIndex, props, selectableYears]);

  useEffect(() => {
    if (daysRef.current) {
      if (dayIndex >= selectableDays.length - 1) {
        const validDayIndex = Math.min(dayIndex, selectableDays.length - 1);
        setTimeout(() => {
          daysRef.current?.scrollToTargetIndex(validDayIndex);
          setDayIndex(validDayIndex);
        }, 100);
      }
    }
  }, [dayIndex, selectableDays]);

  const getDaysInMonth = (month: number, year: number) => {
    const date = new Date(year, month, 1);
    date.setDate(0);
    return date.getDate();
  };

  const handleChange = (index: number, type: 'year' | 'month' | 'day') => {
    switch (type) {
      case 'year':
        setYearIndex(index);
        break;
      case 'month':
        setMonthIndex(index);
        break;
      case 'day':
        setDayIndex(index);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.cardContainer}>
      <ScrollPicker
        ref={daysRef}
        dataSource={selectableDays}
        selectedIndex={dayIndex}
        onValueChange={(_data, selectedIndex) => {
          handleChange(selectedIndex, 'day');
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
        ref={monthsRef}
        dataSource={selectableMonths}
        selectedIndex={monthIndex}
        onValueChange={(_data, selectedIndex) => {
          handleChange(selectedIndex, 'month');
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
        ref={yearRef}
        dataSource={selectableYears}
        selectedIndex={yearIndex}
        onValueChange={(_data, selectedIndex) => {
          handleChange(selectedIndex, 'year');
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

export default DatePicker;
