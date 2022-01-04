import { TypeProps } from '@models/GameProps';

export interface AuthScreensProps {
  type: 'secondary' | 'tertiary';
  children: React.ReactNode;
  textButtonInside: string;
  textButtonOutside: string;
  onPressInside: () => void;
  onPressOutside: () => void;
  message?: string;
}

export interface BetProps {
  date?: string;
  price: number;
  title: string;
  numbers: number[];
  color: string;
  id?: number;
}

export interface CartProps {
  visible: boolean;
  onClose: () => void;
  onOpen?: () => void;
  onSave: () => void;
}

export interface StyledProps {
  color?: string;
  selected?: boolean;
}

export interface FormTypesProps {
  title: string;
  typeForm: 'add' | 'edit';
  data?: TypeProps;
  onCancel?: () => void;
}

export interface ModalProps {
  data?: TypeProps;
  visible: boolean;
  onClose: () => {} | any;
}
