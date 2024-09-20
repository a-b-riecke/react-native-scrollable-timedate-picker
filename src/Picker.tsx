import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { DatePickerProps } from './types';
import { useCallback, useEffect, useState } from 'react';
import { styles } from './styles';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';
import { DefaultProps } from './DefaultProps';

let tempValue = '';

const Picker = (props: DatePickerProps) => {
  props = DefaultProps(props);
  const [isOpen, setIsOpen] = useState<boolean>(props.open);
  const [value, setValue] = useState<any>('00:00');

  useEffect(() => {
    setValue(props.value);
    tempValue = props.value;
  }, [props.value]);

  useEffect(() => {
    if (props.maxTime == null) return;
  }, [props.maxTime]);

  const valueChange = (time: string) => {
    tempValue = time;
  };

  const confirm = useCallback(() => {
    setValue(tempValue);
    setIsOpen(!isOpen);
    props.onConfirm(tempValue);
  }, [isOpen, props]);

  const PickerModal = useCallback(() => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={isOpen}
        onRequestClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <View style={styles.overlayContainer}>
          <Pressable
            onPress={() => setIsOpen(!isOpen)}
            style={styles.overlay}
          />
          <View>
            <View
              style={[
                { backgroundColor: props.backgroundColor },
                styles.modalCard,
              ]}
            >
              {props.type === 'time' ? (
                <TimePicker
                  {...props}
                  onChange={valueChange}
                  selectedValue={value}
                />
              ) : (
                <DatePicker
                  {...props}
                  onChange={valueChange}
                  selectedValue={value}
                />
              )}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => setIsOpen(!isOpen)}
                  style={styles.mainBtn}
                >
                  <Text
                    style={[styles.mainBtnText, { color: props.textColor }]}
                  >
                    {props.cancelText}
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.mainBtnText, { color: props.textColor }]}>
                  |
                </Text>
                <TouchableOpacity onPress={confirm} style={styles.mainBtn}>
                  <Text
                    style={[styles.mainBtnText, { color: props.textColor }]}
                  >
                    {props.confirmText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }, [confirm, isOpen, props, value]);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={[styles.buttonStyle, props.buttonStyle]}
      >
        <Text style={props.buttonTextStyle}>{value}</Text>
        {props.image && (
          <Image
            source={props.image}
            style={{ width: props.imageSize, height: props.imageSize }}
          />
        )}
      </TouchableOpacity>
      <PickerModal />
    </>
  );
};
export default Picker;
