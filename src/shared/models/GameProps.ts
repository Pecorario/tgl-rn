export interface TypeProps {
  id?: number;
  name: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  selected?: boolean;
}

export interface BetProps {
  id: number;
  idType?: number;
  name: string;
  price: number;
  color?: string;
  numbers: number[] | string;
  date?: string;
}

export interface ReqGameProps {
  games?: any;
}

export interface ReqSaveGameProps {
  games: {
    id: number | undefined;
    numbers: number[] | string;
  }[];
}

export interface ReqListGameProps {
  req?: string[];
  types?: any;
  typesGame?: Array<TypeProps>;
}
export interface GameProps {
  cartIsOpen: boolean;
  types: Array<TypeProps>;
  filters: Array<TypeProps>;
  typeActive: TypeProps | null;
  filtersActive: Array<string>;
  filteredGames: Array<BetProps>;
  minCartValue: number;
  games: Array<BetProps>;
  selectedNumbers: Array<number>;
  totalPrice: number;
  counter: number;
  typesLoaded: boolean;
  savedGames: boolean;
}
