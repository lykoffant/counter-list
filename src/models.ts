export type CounterId = number;

export interface ICounter {
  id: CounterId;
  name: string;
  value: number;
}

export type CounterList = ICounter[];
