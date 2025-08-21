export interface IGetChar {
  page: number;
  name?: string;
  status?: CharStatus;
  gender?: Chargender;
  certainChar?: string;
}

export type CharStatus = "Alive" | "Dead" | "unknown" | undefined;
export type Chargender = "male" | "female" | undefined;
