import { Chargender, CharStatus } from "./endPoints";

export interface ICard {
  image: string;
  name: string;
  status: CharStatus;
  episode: number;
  id: number;
}

export interface IPaginationComp {
  total: number;
  page: number;
  per_page: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICharactersList {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: any;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  refetch: () => void;
}

export interface IActionComp<T> {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
  filters: { status: CharStatus; gender: Chargender };
  setFilters: React.Dispatch<
    React.SetStateAction<{ status: CharStatus; gender: Chargender }>
  >;
}

export interface ITextField<T> {
  setState: React.Dispatch<React.SetStateAction<T>>;
  placeHolder?: string;
  customFn?: () => void | any;
  state?: T;
  debounce?: boolean;
}

export type SelectOptions = {
  label: string | number;
  value: string | number;
}[];

export interface ISelectComp<T> {
  options: SelectOptions;
  value: T;
  name: string;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  placeHolder?: string;
}
