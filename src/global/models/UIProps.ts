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
}

export interface CartProps {
  visible: boolean;
  onClose: () => void;
  onOpen?: () => void;
  onSave: () => void;
}
