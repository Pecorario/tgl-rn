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

export interface BetProps {
  id: number;
  idType?: number;
  name: string;
  price: number;
  color: string;
  numbers: number[];
  date: string;
}
export interface GameProps {
  cartIsOpen: boolean;
  types: Array<TypeProps>;
  filters: Array<TypeProps>;
  typeActive: TypeProps | null;
  filterActive: TypeProps | null;
  minCartValue: number;
  games: Array<BetProps>;
  selectedNumbers: Array<number>;
  totalPrice: number;
  counter: number;
}
