export interface TypeProps {
  id: number;
  name: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  selected: boolean;
}
export interface GameProps {
  cartIsOpen: boolean;
  types: Array<TypeProps>;
  minCartValue: number;
}
