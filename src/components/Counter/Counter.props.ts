import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

import { I_Counter } from '../../interfaces/I_Counter';

export interface I_CounterProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  counter: I_Counter;
  deleteCounter: (id: number) => void;
  incCounterValue: (id: number) => void;
  decCounterValue: (id: number) => void;
}
