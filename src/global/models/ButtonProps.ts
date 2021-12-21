export interface ButtonProps {
  title?: string;
  color?: string;
  active?: boolean;
  onPress?: () => void;
}

export interface AuthButtonProps extends ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary';
}

export interface DefaultButton extends ButtonProps {
  type: 'edit' | 'save' | 'cart' | 'default';
}

export interface NumberButtonProps extends ButtonProps {
  number: number;
}
