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
  name: string;
  price: number;
  color: string;
  numbers: number[];
  date: string;
}
export interface GameProps {
  cartIsOpen: boolean;
  types: Array<TypeProps>;
  typeActive: TypeProps | null;
  minCartValue: number;
  bets: Array<BetProps>;
  selectedNumbers: Array<number>;
}
