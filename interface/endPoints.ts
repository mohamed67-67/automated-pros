export interface IGetChar {
  page: number;
  name: string;
  status: CharStatus;
  gender: Chargender;
}

export type CharStatus = "alive" | "dead" | "unknown" | undefined;
export type Chargender = "male" | "female" | undefined;
