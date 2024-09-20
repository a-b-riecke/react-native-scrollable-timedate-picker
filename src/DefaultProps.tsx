import type { DatePickerProps } from './types';

export const DefaultProps = (props: DatePickerProps) => {
  let allProps = {
    onConfirm: props.onConfirm,
    type: props.type ?? 'date',
    confirmText: props.confirmText ?? 'Confirm',
    cancelText: props.cancelText ?? 'Cancel',
    backgroundColor: props.backgroundColor ?? 'white',
    highlightColor: props.highlightColor ?? 'red',
    itemTextColor: props.itemTextColor ?? 'grey',
    textColor: props.textColor ?? 'black',
    maxDate: props.maxDate ?? null,
    maxTime: props.maxTime ?? null,
    open: props.open ?? false,
    value: props.value,
    buttonStyle: props.buttonStyle ?? null,
    buttonTextStyle: props.buttonTextStyle ?? null,
    image: props.image ?? undefined,
    imageSize: props.imageSize ?? 25,
    language: props.language ?? 'en',
  };
  return allProps;
};
