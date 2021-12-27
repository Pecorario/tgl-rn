import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export interface ButtonProps {
  title?: string;
  color?: string;
  active?: boolean;
  onPress?: () => void;
}

export interface AuthButtonProps extends ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export interface DefaultButton extends ButtonProps {
  type: 'edit' | 'save' | 'cart' | 'default';
}

export interface NumberButtonProps extends ButtonProps {
  number: number;
}

export interface ButtonHeaderProps extends ButtonProps {
  navigation?: BottomTabNavigationProp<any, any>;
}
