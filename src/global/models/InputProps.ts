import { KeyboardTypeOptions, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  value?: string;
  placeholder?: string;
  onChangeText?: ((text: string) => void) | undefined;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
}
